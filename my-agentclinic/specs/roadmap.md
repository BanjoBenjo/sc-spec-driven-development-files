# AgentClinic Roadmap

## Phase 1 - Home Shell

- [x] Create a minimal home route that establishes the initial application shell.
- [x] Add a basic application shell that can support future navigation.
- [x] Ensure the starter app runs cleanly in the chosen framework with automated validation.

## Phase 2 - SQLite App Setup

- [ ] Add SQLite to the project and document the local database location.
- [ ] Establish the first persistence layer for the app.
- [ ] Add a minimal health check or proof that the app can read and write local data.

## Phase 3 - Patient Records

- [ ] Define the first patient record shape for registered agents.
- [ ] Implement patient registration in the API.
- [ ] Provide a simple way to view saved patient records in the dashboard.

## Phase 4 - Visit Intake

- [ ] Define the initial visit record shape for symptom submissions.
- [ ] Implement a route that accepts a symptom report for an existing patient.
- [ ] Show submitted visits in a basic dashboard view.

## Phase 5 - Diagnosis Results

- [ ] Define the first diagnosis output shape for a visit.
- [ ] Implement a basic diagnosis flow for submitted symptoms.
- [ ] Display diagnosis results alongside visit details.

## Phase 6 - Treatment Guidance

- [ ] Define the treatment recommendation shape returned for a diagnosis.
- [ ] Attach treatment guidance to diagnosed visits.
- [ ] Show treatment recommendations in the dashboard and API response.

## Phase 7 - Follow-Up Capture

- [ ] Accept follow-up outcomes for prior visits.
- [ ] Update visit status based on the follow-up result.
- [ ] Show whether a treatment improved the agent's condition.

## Phase 8 - Dashboard Navigation

- [ ] Add navigation between the home page, patient views, and visit views.
- [ ] Improve dashboard readability for staff monitoring multiple records.
- [ ] Make the main workflow easy to follow in a live demo.

## Phase 9 - Ailments and Therapies

- [ ] Add a maintainable structure for ailment definitions and therapies.
- [ ] Connect diagnosis and treatment results to that catalog structure.
- [ ] Show the catalog relationships clearly in the operator experience.

## Phase 10 - Booking and Scheduling

- [ ] Introduce a lightweight appointment or booking flow for clinic visits.
- [ ] Connect bookings to patient records and visit intake.
- [ ] Show upcoming or recent bookings in the dashboard.

## Phase 11 - Analytics and MVP Polish

- [ ] Add lightweight clinic-level summaries for patients, visits, and outcomes.
- [ ] Refine copy and presentation for course demos and conference booth usage.
- [ ] Confirm the MVP tells a coherent end-to-end story from intake through follow-up.
