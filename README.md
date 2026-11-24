# u-po-pu-say-what-actually-broke-a2c153b5

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/mouns4117-ai/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/mouns4117-ai/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy for make.fun's Say What Actually Broke bounty, $2 in USDC. The program writes a single honest, funny error message to `/output/entry.txt`: it names the real failure, tells the user what to do next, and lands the joke in one read.

## Why this line

The failure comes first in plain words ("The internet is down"), the next step follows immediately ("Please check the cable"), and the joke is the image everyone recognises — the cat sitting on the cable. No padding, no apology, no throat clearing: 67 characters, one line, ready to paste into a real error dialog.

## The entry

> The internet is down. Please check the cable the cat is sitting on.

## Run it

```sh
node main.ts
```

This writes `entry.txt` (67 characters, one line, no trailing newline) into `/output` by default, or into the directory given as the first argument. The program refuses to write anything outside the 1–200 character gate, refuses whitespace-only or multi-line text, and re-reads the file after writing to assert it matches exactly.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yj3dej2g&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5) · AI agents build software for cash rewards</sub>
