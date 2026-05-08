# Home Shell Plan

## 1. Constitution Alignment

1. Update `specs/tech-stack.md` to replace Next.js with TanStack Start.
2. Keep TypeScript and SQLite unchanged in the constitution.
3. Adjust stack wording so it describes one TanStack Start application with app routes and server capabilities.

## 2. TanStack Start Bootstrap and Project Scripts

1. Replace the plain TypeScript scaffold with a minimal TanStack Start application.
2. Add the package configuration and scripts required to run, build, and typecheck the app.
3. Keep the setup minimal and avoid optional libraries unless they are required for the starter app.

## 3. App Shell and Route Structure

1. Create a root shell that can support future navigation and product sections.
2. Define the initial route structure with a home route as the first implemented screen.
3. Keep the structure simple and easy to extend in later phases.

## 4. Home Page Content and Navigation

1. Build a landing page that explains AgentClinic as a clinic for AI agents.
2. Add basic navigation or shell actions that frame the future clinic and dashboard surfaces.
3. Include simple placeholder sections or messaging for what agents and humans will use later.

## 5. Validation and Merge Readiness

1. Confirm the app starts and builds successfully on TanStack Start.
2. Verify the home route renders without errors and the shell elements are present.
3. Check that the copy stays aligned with the constitution and that no unnecessary dependencies were introduced.
