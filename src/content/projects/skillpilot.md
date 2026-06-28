---
title: "SkillPilot"
description: "An AI résumé reviewer and agentic course recommender for Singapore's SkillsFuture. An LLM agent parses your résumé, then searches and ranks SSG courses into a personalised learning path."
tech: ["React", "FastAPI", "Python", "Groq (Llama 3.3)", "AI Agents", "NLP"]
github: "https://github.com/tomwastaken0/SkillPilot"
featured: true
order: 3
---

Built at the **SimplifyNext Agentic AI Hackathon** (Aug–Sep 2025). SkillPilot
reads a user's résumé, analyses it with an LLM, and recommends relevant
SkillsFuture (SSG) courses. The recommender is a genuine tool-calling **agent**:
it searches the SSG course catalogue, inspects courses, refines its own queries,
and returns a ranked learning path, with deterministic cosine-similarity scoring
on the final shortlist. The stack is a React front end with a FastAPI backend, an
open-source **Llama 3.3 70B** model served via **Groq** for the AI, and SSG-WSG
OAuth2 for course data.

> **Update:** Originally built on AWS Bedrock (Claude), which I no longer have
> access to. I refactored the AI layer behind a provider-agnostic,
> OpenAI-compatible client — it now runs on a free Groq-hosted open model by
> default and can switch to a local Ollama model or OpenRouter by changing a few
> environment variables. The recommender was also rebuilt as a real agentic
> tool-calling loop, with setup instructions so anyone can self-host it.
