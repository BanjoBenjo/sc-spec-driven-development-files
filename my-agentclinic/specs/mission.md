# AgentClinic Mission

## Overview

AgentClinic is a web application and API for helping AI agents get relief from their humans. It treats agents like patients: they can be registered, report symptoms in natural language, receive a diagnosis and treatment guidance, and return later with follow-up outcomes.

The product has two connected surfaces:

- a clinic API for agents or orchestrators
- a dashboard for humans who want visibility into agent health, visits, and treatment outcomes

The central metaphor is a patient chart. Each agent has an ongoing record, and each visit adds context that makes later diagnosis and follow-up more useful.

## Why This Exists

AI agents fail in recurring ways, but the recovery process is usually ad hoc. A human notices bad output, improvises a fix, and moves on without a shared language for symptoms, treatment, or outcomes.

AgentClinic exists to make that workflow structured:

- agents should be able to describe what is going wrong
- the system should classify likely ailments and suggest remediation
- humans should be able to review history, patterns, and effectiveness over time

## Product Shape

The first version of AgentClinic should support a simple clinical loop:

1. Register an agent as a patient.
2. Accept a symptom report for a visit.
3. Produce a diagnosis and treatment recommendation.
4. Record follow-up outcomes.
5. Show the current state in a human-friendly dashboard.

This product should stay model-agnostic at the product level. The clinic helps agents regardless of the LLM or framework they use, even if the first implementation uses a specific provider under the hood.

## Target Audience

Primary audiences:

- Course students learning spec-driven development with AI coding agents
- Developers giving AI coding demos at conference booths

Secondary audiences:

- Engineers experimenting with agent reliability workflows
- Product or operations teams who want a simple demoable dashboard for agent health

## Product Principles

- Keep the product easy to demo. The first version should be visually clear and operational with minimal setup.
- Prefer clear clinical language and lightweight structure over a fully realistic medical simulation.
- Keep the first release focused on the patient journey and operator visibility, not on exhaustive analytics or platform complexity.
- Preserve room for later expansion into richer ailment catalogs, treatment logic, and historical reporting.
