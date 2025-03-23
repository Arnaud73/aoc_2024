export const sample1 = await Deno.readTextFile("./03.sample.1.txt");
export const sample2 = await Deno.readTextFile("./03.sample.2.txt");
export const puzzle = await Deno.readTextFile("./03.puzzle.txt");

export const part1 = /mul\((\d+),(\d+)\)/gm;
export const part2 = /(?:mul\((\d+),(\d+)\)|do\(\)|don't\(\))/gm;

export function challenge_03_1(input: string) {
  let res = 0;
  let matches;

  while ((matches = part1.exec(input)) !== null) {
    if (matches.index === part1.lastIndex) {
      part1.lastIndex++;
    }
    res += parseInt(matches[1], 10) * parseInt(matches[2], 10);
  }
  part1.lastIndex = 0;
  return res;
}

export function challenge_03_2(input: string) {
  let multiply = true;
  let res = 0;
  let matches;

  while ((matches = part2.exec(input)) !== null) {
    if (matches.index === part2.lastIndex) {
      part2.lastIndex++;
    }
    if (matches[0] === "do()") {
      multiply = true;
    } else if (matches[0] === "don't()") {
      multiply = false;
    } else if (multiply) {
      res += parseInt(matches[1], 10) * parseInt(matches[2], 10);
    }
  }
  part2.lastIndex = 0;
  return res;
}

console.log("Challenge 02•1 - Sample", challenge_03_1(sample1));
console.log("Challenge 02•1 - Puzzle", challenge_03_1(puzzle));
console.log("Challenge 02•2 - Sample", challenge_03_2(sample2));
console.log("Challenge 02•2 - Puzzle", challenge_03_2(puzzle));
