---
title: "Production Planner"
description: "A mixed-integer optimisation model for multi-period, multi-product production planning (the capacitated lot-sizing problem), built on a hand-rolled MILP modelling layer over SciPy's HiGHS solver. Minimises production + holding + setup cost under capacity and smoothing constraints."
tech: ["Python", "SciPy", "HiGHS", "Mixed-Integer Programming", "Operations Research", "Optimisation"]
github: "https://github.com/tomwastaken0/production-planner"
featured: true
order: 2
---

A **mixed-integer optimisation** model for production planning — the textbook
**capacitated lot-sizing problem** — built from scratch on a small modelling
layer over the **HiGHS solver bundled inside SciPy**. No commercial solver and
no third-party modelling framework: just NumPy and SciPy.

It decides a production schedule that meets demand at minimum total cost,
balancing the three costs that pull against each other: **production**,
**holding** finished inventory between periods, and a fixed **setup** cost each
time a line is run. That setup cost is what makes the problem *mixed-integer* —
a binary "did we run this line this period?" variable linked to production by a
big-M constraint — and it creates the central trade-off the model solves
automatically: **batch several periods' demand into one big run and pay to hold
the inventory, or produce every period and pay the setup each time.** The model
also supports per-period **capacity** limits and optional **production
smoothing**, and it prices exactly what each constraint costs you (e.g. forcing
a smoother schedule on the sample instance adds +2,481 to total cost).

The modelling layer is reusable on its own — add named variables and
`{variable: coefficient}` constraints, call `.solve()`, and it assembles the cost
vector, bounds, integrality mask and constraint matrix and runs HiGHS. Ships
with a CLI, a console schedule table, a matplotlib chart, and a 14-test pytest
suite covering the solver layer and the lot-sizing invariants that matter (all
demand met, capacity never exceeded, production implies a paid setup, costs
reconcile with the objective).

> This is the direct descendant of an NUS ISE x Micron case challenge where my
> team matched wafer starts to demand via LP/MIP under capacity and smoothing
> constraints — production planning treated as a constrained optimisation
> problem.
