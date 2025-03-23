export const sample = await Deno.readTextFile("./01.sample.1.txt");
export const puzzle = await Deno.readTextFile("./01.puzzle.txt");

export function challenge_01_1(input: string) {
  const { a, b } = input
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("  "))
    .reduce(
      (acc, [a, b]) => {
        acc.a.push(parseInt(a, 10));
        acc.b.push(parseInt(b, 10));
        return acc;
      },
      { a: [] as number[], b: [] as number[] },
    );

  return transpose([a.sort(sortUp), b.sort(sortUp)])
    .map(([a, b]) => Math.abs(a - b))
    .reduce(sum);
}

export function challenge_01_2(input: string) {
  const { a, b } = input
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("  "))
    .reduce(
      (acc, [a, b]) => {
        acc.a.push(parseInt(a, 10));
        acc.b.push(parseInt(b, 10));
        return acc;
      },
      { a: [] as number[], b: [] as number[] },
    );

  const occurences = b.reduce((acc, val) => {
    if (acc.get(val) !== undefined) return acc;
    acc.set(val, b.filter((it) => it === val).length);
    return acc;
  }, new Map<number, number>());

  return a.reduce((acc, val) => {
    return acc + val * (occurences.get(val) ?? 0);
  }, 0);
}

const sortUp = (a: number, b: number) => a - b;
const sum = (a: number, b: number) => a + b;
const transpose = (a: number[][]) => a[0].map((_, i) => a.map((row) => row[i]));

console.log("Challenge 01•1 - Sample", challenge_01_1(sample));
console.log("Challenge 01•1 - Puzzle", challenge_01_1(puzzle));
console.log("Challenge 01•2 - Sample", challenge_01_2(sample));
console.log("Challenge 01•2 - Puzzle", challenge_01_2(puzzle));
