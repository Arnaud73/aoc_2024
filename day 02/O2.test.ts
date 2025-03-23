import { assertEquals } from "@std/assert";

import {
  challenge_02_1,
  challenge_02_2,
  isSafe,
  isSafeWithDampener,
  puzzle,
  sample,
} from "./02.ts";

Deno.test("isSafe", () => {
  assertEquals(isSafe([1, 2, 3, 4, 5, 6]), true);
  assertEquals(isSafe([1, 3, 6]), true);
  assertEquals(isSafe([1, 4]), true);
  assertEquals(isSafe([1, 5]), false);
  assertEquals(isSafe([1, 1]), false);
  assertEquals(isSafe([1, 2, 1]), false);

  assertEquals(isSafe([7, 6, 4, 2, 1]), true);
  assertEquals(isSafe([1, 2, 7, 8, 9]), false);
  assertEquals(isSafe([9, 7, 6, 2, 1]), false);
  assertEquals(isSafe([1, 3, 2, 4, 5]), false);
  assertEquals(isSafe([8, 6, 4, 4, 1]), false);
  assertEquals(isSafe([1, 3, 6, 7, 9]), true);
});
Deno.test("isSafeWithDampener", () => {
  assertEquals(isSafeWithDampener([7, 6, 4, 2, 1]), true);
  assertEquals(isSafeWithDampener([1, 2, 7, 8, 9]), false);
  assertEquals(isSafeWithDampener([9, 7, 6, 2, 1]), false);
  assertEquals(isSafeWithDampener([1, 3, 2, 4, 5]), true);
  assertEquals(isSafeWithDampener([8, 6, 4, 4, 1]), true);
  assertEquals(isSafeWithDampener([1, 3, 6, 7, 9]), true);
});

Deno.test("Challenge 2•1 - Sample", () => {
  assertEquals(challenge_02_1(sample), 2);
});
Deno.test("Challenge 2•1 - Puzzle", () => {
  assertEquals(challenge_02_1(puzzle), 502);
});

Deno.test("Challenge 2•2 - Sample", () => {
  assertEquals(challenge_02_2(sample), 4);
});
Deno.test("Challenge 2•2 - Puzzle", () => {
  assertEquals(challenge_02_2(puzzle), 544);
});
