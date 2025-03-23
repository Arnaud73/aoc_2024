import { assertEquals } from "@std/assert";

import {
  challenge_03_1,
  challenge_03_2,
  part1,
  puzzle,
  sample1,
  sample2,
} from "./03.ts";

Deno.test("Mul RegExp", () => {
  assertEquals(part1.exec("mul(1,2)")?.[1], "1");
  part1.lastIndex = 0;
  assertEquals(part1.exec("mul(2,3)")?.[1], "2");
  part1.lastIndex = 0;
  assertEquals(part1.exec("mul(3,4)")?.[1], "3");
  part1.lastIndex = 0;
});

Deno.test("Challenge 3•1 - Sample", () => {
  assertEquals(challenge_03_1(sample1), 161);
});
Deno.test("Challenge 3•1 - Puzzle", () => {
  assertEquals(challenge_03_1(puzzle), 153469856);
});

Deno.test("Challenge 2•2 - Sample", () => {
  assertEquals(challenge_03_2(sample2), 48);
});
Deno.test("Challenge 2•2 - Puzzle", () => {
  assertEquals(challenge_03_2(puzzle), 77055967);
});
