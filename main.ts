// The Best Meal You Ever Had (make.fun: u-pagg7-the-best-meal-you-ever-had-a3ac0f85)
// Writes one sentence, at most 200 characters, about the best meal ever had
// to /output/entry.txt. Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "On a rainy night in Bandung, mie ayam from a street cart, its broth dark with soy and sweet from kecap, the noodles springy, steam fogging my glasses while I chased the last one with my spoon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
