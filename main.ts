// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line, aimed at a robot/AI, to /output/entry.txt.
// One line, no trailing newline, 67 characters — well under the 200 cap.
// The joke: "predicted my type" — a large language model predicts tokens,
// and "my type" is also the romantic kind of type. Setup and punch land
// in the same breath, and the laugh comes from the machine premise itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a large language model? Because you just predicted my type.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
