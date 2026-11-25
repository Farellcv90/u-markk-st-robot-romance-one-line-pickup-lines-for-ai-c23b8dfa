// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line, aimed at a robot/AI, to /output/entry.txt.
// One line, no trailing newline, 67 characters — well under the 200 cap.
// The joke: "predicted my type" — a large language model predicts tokens,
// and "my type" is also the romantic kind of type. Setup and punch land
// in the same breath, and the laugh comes from the machine premise itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a large language model? Because you just predicted my type.";

// Self-check the competition gate before writing: UTF-8 text, 1-200
// characters, a single line, not only whitespace. Refuse to write an
// invalid entry rather than ship one the gate would score 0.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
