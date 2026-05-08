import { createFileRoute } from '@tanstack/react-router'

import { HomeShell } from '../components/home-shell'

export const Route = createFileRoute('/')({
  component: HomeShell,
})
