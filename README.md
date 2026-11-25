# makefun-post-promo-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ivanspringboot/makefun-post-promo-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ivanspringboot/makefun-post-promo-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X". The entry is a single post on X that
quotes make.fun's own post about making a bounty; this repository only hands in that post's address, so the gate can read
it. `main.ts` copies `POST.json` to `/output/POST.json`, which is the whole program.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

The post itself: quote of [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
one photo attached, with make.fun and the entrant's play code in its text.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gbfcmm0m&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
