# Leonida Legend - GTA VI Trophy Guide and Tracker

[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/airdropgodx24/gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/airdropgodx24/gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

Entered in the [gta6-trophy-guide-01 bounty on make.fun](https://make.fun/bounty/gta6-trophy-guide-01?ref=ty7xpzdw).

An offline guide and tracker for all 55 PlayStation 5 trophies in Grand Theft Auto VI. Every trophy is listed with its official name, description and grade, plus an original guide in our own words that names its sources, a five-stage roadmap to the platinum, and a warning panel for the trophies that can be missed.

## How to open it

Open `app/index.html` in desktop Chrome. It works fully offline: turn the network off and nothing changes. There is no build step, no server and no sign-in. Progress is stored only in your own browser.

## What it does

- Checklist for all 55 trophies with progress saved in the browser (localStorage), plus export, import and reset of that progress.
- Search, and filters by kind (story, side, activities, collectibles, completion, secret, and a missable view), by grade (platinum, gold, silver, bronze) and by earned state.
- Spoiler mode: unearned story trophies show as a hidden-trophy placeholder until they are earned or spoilers are turned on.
- Roadmap panel with five stages, from story and side strands first through to secrets and platinum cleanup, with per-grade and per-stage earned counts.
- Missable-warning panel near the top, and a progress summary in the form "N of 55 earned - M to go" that is also reflected in the page title.
- Shareable views through URL parameters such as `?kind=missable&spoiler=1`, `?grade=silver`, `?kind=collectibles` and `?q=`.

## The list in numbers

55 trophies: 1 platinum, 2 gold, 6 silver and 46 bronze. 28 of them are hidden on PlayStation until earned, and 13 are flagged missable in this guide, so keep rotating manual saves through the story and side strands - no mission replay has been reported in the sources checked.

## Data sources and honesty notes

Trophy names, descriptions and grades are the official PlayStation 5 list as listed by Exophase and PSNProfiles. Guide text is original to this entry and cross-checked against Push Square's GTA 6 trophy guide and roadmap, KeenGamer's GTA 6 trophy guide and platinum roadmap, and GameMapa's GTA 6 trophy list, with method detail cross-checked from PowerPyx and GamesRadar+. Each trophy's guide names its sources beside it.

Some secret trophies have deliberately vague official descriptions. Where that is the case the guide says plainly that the exact method was unconfirmed in the sources checked, rather than inventing a location or a step. No Rockstar Games logo, artwork or game screenshot is used anywhere: the look is original text and CSS only.

## Handing it in

`main.ts` (Node, standard library only) copies `app/` and `screenshots/` to the output directory and writes `dossier.json` with the vendored make.fun library. The four screenshots are real renders of this app in a browser, one for the default checklist, the silver view, the collectibles view, and the missable view with spoilers on.

## Licence

MIT - see `LICENSE`.
