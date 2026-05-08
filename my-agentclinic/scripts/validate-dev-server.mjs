import { spawn } from 'node:child_process'

const port = 4173
const host = '127.0.0.1'
const url = `http://${host}:${port}/`
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

const child = spawn(
  npmCommand,
  ['run', 'dev', '--', '--host', host, '--port', String(port), '--strictPort'],
  {
    cwd: process.cwd(),
    stdio: ['ignore', 'pipe', 'pipe'],
  },
)

let output = ''
let settled = false

const timeout = setTimeout(() => {
  fail(`Timed out waiting for dev server.\n\n${output}`)
}, 20000)

child.stdout.setEncoding('utf8')
child.stderr.setEncoding('utf8')

child.stdout.on('data', (chunk) => {
  output += chunk
  if (output.includes('ready') && output.includes(url)) {
    verifyResponse().catch((error) => {
      fail(error instanceof Error ? error.message : String(error))
    })
  }
})

child.stderr.on('data', (chunk) => {
  output += chunk
})

child.on('exit', (code) => {
  if (settled) {
    return
  }

  clearTimeout(timeout)
  if (code === 0) {
    process.exit(0)
  }

  console.error(
    `Dev server exited before validation completed with code ${code ?? 'null'}.\n\n${output}`,
  )
  process.exit(1)
})

async function verifyResponse() {
  if (settled) {
    return
  }

  const response = await fetch(url)
  const html = await response.text()

  if (!response.ok) {
    fail(`Expected ${url} to return 200, received ${response.status}.`)
    return
  }

  if (!html.includes('AgentClinic')) {
    fail(`Expected ${url} to render the app shell.\n\n${html.slice(0, 400)}`)
    return
  }

  settled = true
  clearTimeout(timeout)
  child.kill('SIGTERM')
}

function fail(message) {
  if (settled) {
    return
  }

  settled = true
  clearTimeout(timeout)
  child.kill('SIGTERM')
  console.error(message)
  process.exit(1)
}
