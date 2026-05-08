# Home Shell Requirements

## Scope

This phase covers two related outcomes:

1. Align the project constitution with the chosen application framework by updating `specs/tech-stack.md` from Next.js to TanStack Start.
2. Bootstrap the application from the current plain TypeScript scaffold into a minimal TanStack Start app that delivers the first visible AgentClinic home shell.

The Home Shell should include:

- a root app shell suitable for future expansion
- a landing page that introduces AgentClinic clearly
- basic navigation within the shell
- explicit framing for the product's two main surfaces:
  - the clinic interface for agents or orchestrators
  - the dashboard interface for humans monitoring agent health

## In Scope

- TanStack Start bootstrap with TypeScript
- project scripts needed to run and build the app
- a root shell and one home route
- a reusable shell structure that can support future navigation
- homepage copy that reflects the patient/clinic metaphor from `specs/mission.md`
- lightweight placeholders or callouts for future dashboard and clinic capabilities
- constitution alignment in `specs/tech-stack.md`

## Out of Scope

- real patient registration flows
- persistent data modeling or SQLite setup
- diagnosis, treatment, or follow-up logic
- dashboard data views
- booking or appointment behavior
- production-grade design polish
- adding nonessential dependencies

## Decisions

- Framework: TanStack Start
- Language: TypeScript
- Tone: course/demo friendly, optimized for clarity and walkthroughs
- Implementation style: conservative defaults with minimal starter setup
- Dependency policy: use built-in framework capabilities first and avoid extra libraries unless required for bootstrap

## Context

This phase is the first concrete implementation slice for AgentClinic. The result should make the product legible to course students and demo audiences without overcommitting to later product details.

The shell should feel intentional and usable, but the main goal is to establish the correct foundation and a coherent first screen. Future phases will add persistence, patient records, visits, diagnosis, treatment, and follow-up.

The spec should remain consistent with:

- `specs/mission.md` for product framing and audience
- `specs/tech-stack.md` as the source of truth for framework and stack choices
- `specs/roadmap.md` Phase 1 as a small, independently shippable slice
