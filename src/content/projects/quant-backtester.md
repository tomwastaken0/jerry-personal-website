---
title: "Quant Backtester"
description: "A vectorised backtesting engine for systematic trading strategies, with Monte Carlo risk analysis. Built look-ahead-safe and cost-aware from the ground up, with a stationary block-bootstrap simulation to stress strategies across thousands of sampled futures."
tech: ["Python", "NumPy", "pandas", "Monte Carlo", "Quant Finance", "pytest"]
github: "https://github.com/tomwastaken0/quant-backtester"
featured: true
order: 1
---

A from-scratch **backtesting engine** for systematic trading strategies. The
design goal was correctness over features: the two mistakes that make most
homemade backtests lie to you — **look-ahead bias** and **ignoring transaction
costs** — are both handled explicitly, and there are tests that fail if either
regresses.

A strategy maps prices to a target position in `[-1, 1]`; the engine lags that
signal by one bar (so a signal known only at today's close is acted on tomorrow)
and charges a per-turnover cost in basis points. On top of the realised P&L it
runs a **Monte Carlo risk layer** — an i.i.d. and a *stationary block* bootstrap
that resample returns into thousands of synthetic histories to produce
terminal-equity percentiles, probability of loss, and 95% VaR / CVaR. A single
backtest is one draw from a noisy process; this answers "how good was the
strategy, really, across the futures that didn't happen?"

Ships with three strategies (buy & hold, SMA-crossover trend following,
z-score mean reversion), a full metrics suite (Sharpe, Sortino, max drawdown,
Calmar, turnover), matplotlib charts, a CLI, and a 17-test pytest suite. It runs
**fully offline** — if `yfinance` and a network connection are available it pulls
live prices, otherwise it falls back to a reproducible synthetic series, so the
whole thing runs with no API keys.

> This is the same simulation-and-risk toolkit I use in an Industrial & Systems
> Engineering context — Monte Carlo on cycle times, risk-weighted CAPEX
> decisions — pointed at a P&L series instead of a fab line.
