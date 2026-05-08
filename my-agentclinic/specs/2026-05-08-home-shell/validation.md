# Home Shell Validation

## Automated

- Install completes with the dependencies required for the minimal TanStack Start app.
- The project typechecks successfully.
- The project build completes successfully.
- The local development server starts without framework bootstrap errors.

## Manual

- Visiting the home route renders a visible AgentClinic shell.
- The page includes a root shell and basic navigation.
- The shell exposes a clear main content area for future routes.
- The result is easy to explain in a course walkthrough or conference demo.

## Definition of Done

- `specs/tech-stack.md` names TanStack Start as the framework choice.
- The codebase has moved from the plain TypeScript scaffold to a minimal TanStack Start app.
- A minimal Home Shell exists as the first real screen.
- The implementation stays within the phase boundary and does not pull in patient, visit, diagnosis, or persistence work.
- The branch is ready for implementation review and the next roadmap phase remains unchanged.
