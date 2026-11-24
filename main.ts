// Loading Screen Gold: A Tip in 200 Characters
// Writes a single original loading-screen tip (<= 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (defaults to /output/entry.txt).
// Node 22 stdlib only. Fully deterministic: same bytes on every run.
// rev2: comment-only revision; output bytes unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent just rewrote the function you swore you'd fix tomorrow. It works. You still don't trust it. Good. Neither does it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
