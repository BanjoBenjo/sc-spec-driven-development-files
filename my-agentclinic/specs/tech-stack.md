# AgentClinic Tech Stack

## Core Stack

AgentClinic uses server-side TypeScript for both the web application and the API.

Recommended framework:

- TanStack Start as a full-stack TypeScript application

Validation and testing:

- Vitest for automated validation of app shell behavior, build readiness, and lightweight integration checks

Initial database:

- SQLite for local persistence and simple setup

This stack is a fit for the project because it gives us:

- a popular and reliable TypeScript-based foundation
- one application that can serve both app routes and server endpoints
- a low-friction database choice for local development, demos, and course work

## Application Shape

The app has two main surfaces:

- Dashboard pages for staff and humans monitoring agent health
- Server routes for agent registration, visits, diagnosis results, and follow-up reporting

The first versions should keep both surfaces in a single deployable app unless there is a clear reason to split them later.

## Initial Technical Decisions

- Use TypeScript everywhere.
- Favor TanStack Start's built-in routing and server capabilities before adding extra abstractions.
- Favor server-rendered or server-driven pages for the dashboard where practical.
- Keep API responses JSON-based and easy for other systems to consume.
- Store application data in SQLite during the early phases.
- Use Vitest as the default automated validation framework for implementation slices.
- Keep dependencies conservative; prefer built-in framework capabilities before adding new libraries.

## Constraints

- New dependencies should only be introduced when the built-in TanStack Start and TypeScript toolchain is not enough.
- The project should remain easy to run locally for students and demo environments.
- Architecture decisions in early phases should optimize for clarity and momentum, not premature scale.

## Near-Term Non-Goals

- Multi-service deployment
- Complex infrastructure
- Multi-tenant production hardening
- Provider abstraction beyond what the product needs for an early working version
