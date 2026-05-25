import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const standaloneDir = ".next/standalone";

if (!existsSync(standaloneDir)) {
  console.error(
    'Missing ".next/standalone". Ensure next.config has output: "standalone".',
  );
  process.exit(1);
}

const nextDir = join(standaloneDir, ".next");
mkdirSync(nextDir, { recursive: true });

if (existsSync(".next/static")) {
  cpSync(".next/static", join(nextDir, "static"), { recursive: true });
  console.log("Copied .next/static -> .next/standalone/.next/static");
}

if (existsSync("public")) {
  cpSync("public", join(standaloneDir, "public"), { recursive: true });
  console.log("Copied public -> .next/standalone/public");
}
