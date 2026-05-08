import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomeShell } from '../components/home-shell'

describe('home shell', () => {
  it('renders the application shell with primary navigation', () => {
    render(<HomeShell />)

    expect(screen.getByText('AgentClinic')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Clinical operations for AI agents' }),
    ).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    )
    expect(within(nav).getByText('Clinic')).toHaveAttribute(
      'aria-disabled',
      'true',
    )
    expect(within(nav).getByText('Dashboard')).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  it('reserves a main application content frame for future routes', () => {
    render(<HomeShell />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByLabelText('Application content')).toBeInTheDocument()
  })
})
