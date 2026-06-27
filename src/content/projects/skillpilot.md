---
title: "SkillPilot"
description: "An AI résumé reviewer and course recommender for Singapore's SkillsFuture. Parses your résumé with NLP and ranks SSG courses by cosine similarity to sequence a personalised learning path."
tech: ["React", "FastAPI", "Python", "AWS Bedrock", "NLP"]
github: "https://github.com/tomwastaken0/SkillPilot"
featured: true
order: 1
---

Built at the **SimplifyNext Agentic AI Hackathon** (Aug–Sep 2025). SkillPilot
reads a user's résumé, parses it with NLP, and recommends relevant SkillsFuture
(SSG) courses — using cosine similarity to rank courses and sequence a learning
path. The stack is a React front end with a FastAPI backend, Claude via AWS
Bedrock for the AI, and SSG-WSG OAuth2 for course data.

> **Status / next steps:** the current version depends on AWS Bedrock, which I no
> longer have access to. I plan to refactor the AI layer to a provider I can run
> (e.g. a local or hosted model) so the demo works end-to-end, and to clean up
> the setup instructions.
