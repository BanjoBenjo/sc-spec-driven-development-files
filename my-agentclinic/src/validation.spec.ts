import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

const projectRoot = join(import.meta.dirname, '..')

describe('home shell validation contract', () => {
  it('keeps TanStack Start as the documented framework choice', () => {
    const techStack = readFileSync(join(projectRoot, 'specs', 'tech-stack.md'), 'utf8')

    expect(techStack).toContain('TanStack Start')
  })

  it('keeps the project configured as a minimal TanStack Start app', () => {
    const packageJson = JSON.parse(
      readFileSync(join(projectRoot, 'package.json'), 'utf8'),
    ) as {
      scripts: Record<string, string>
      dependencies: Record<string, string>
    }

    expect(packageJson.scripts.dev).toBe('vite dev')
    expect(packageJson.scripts.build).toBe('vite build')
    expect(packageJson.scripts.typecheck).toBe('tsc --noEmit')
    expect(packageJson.dependencies['@tanstack/react-start']).toBeTruthy()
    expect(packageJson.dependencies['@tanstack/react-router']).toBeTruthy()
  })
})
