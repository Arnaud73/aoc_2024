import { assertEquals } from "@std/assert";

import { challenge_01_1, challenge_01_2, puzzle, sample } from "./01.ts";

Deno.test("Challenge 1•1 - Sample", () => {
  assertEquals(challenge_01_1(sample), 11);
});
Deno.test("Challenge 1•1 - Puzzle", () => {
  assertEquals(challenge_01_1(puzzle), 2580760);
});
Deno.test("Challenge 1•2 - Sample", () => {
  assertEquals(challenge_01_2(sample), 31);
});
Deno.test("Challenge 1•2 - Puzzle", () => {
  assertEquals(challenge_01_2(puzzle), 25358365);
});
