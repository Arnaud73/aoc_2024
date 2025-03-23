export const sample = await Deno.readTextFile("./02.sample.txt");
export const puzzle = await Deno.readTextFile("./02.puzzle.txt");

export function challenge_02_1(input: string) {
  return input
    .split("\n")
    .filter(Boolean)
    .map((report) =>
      isSafe(report.split(" ").map((item) => parseInt(item, 10))),
    )
    .reduce((acc: number, isSafe: boolean) => acc + (isSafe ? 1 : 0), 0);
}
export function challenge_02_2(input: string) {
  return input
    .split("\n")
    .filter(Boolean)
    .map((report) =>
      isSafeWithDampener(report.split(" ").map((item) => parseInt(item, 10))),
    )
    .reduce((acc: number, isSafe: boolean) => acc + (isSafe ? 1 : 0), 0);
}

const analyze = (report: number[]) => {
  return report.reduce(
    (
      acc: {
        unsafeAt: number | null;
        progression: "up" | "down" | null;
        prev: number | null;
      },
      level,
      position,
    ) => {
      if (acc.unsafeAt !== null) return acc;
      if (
        (acc.prev !== null &&
          (Math.abs(acc.prev - level) > 3 || acc.prev === level)) ||
        (acc.progression &&
          ((acc.progression === "up" && level < acc.prev!) ||
            (acc.progression === "down" && level > acc.prev!)))
      ) {
        acc.unsafeAt = position;
      } else if (!acc.progression && acc.prev !== null) {
        if (acc.prev !== level) {
          acc.progression = level - acc.prev > 0 ? "up" : "down";
        } else {
          acc.unsafeAt = position;
        }
      }
      acc.prev = level;
      return acc;
    },
    {
      unsafeAt: null as number | null,
      progression: null as "up" | "down" | null,
      prev: null as number | null,
    },
  );
};

export const isSafe = (report: number[]) => {
  return analyze(report).unsafeAt === null;
};

export const isSafeWithDampener = (report: number[]) => {
  const analysis = analyze(report);
  if (analysis.unsafeAt === null) return true;
  else {
    const position = analysis.unsafeAt;
    if (analyze(report.toSpliced(position, 1)).unsafeAt === null) return true;
    if (
      position > 0 &&
      analyze(report.toSpliced(position - 1, 1)).unsafeAt === null
    )
      return true;
    if (
      position > 1 &&
      analyze(report.toSpliced(position - 2, 1)).unsafeAt === null
    )
      return true;
    return false;
  }
};

console.log("Challenge 02•1 - Sample", challenge_02_1(sample));
console.log("Challenge 02•1 - Puzzle", challenge_02_1(puzzle));
console.log("Challenge 02•2 - Sample", challenge_02_2(sample));
console.log("Challenge 02•2 - Puzzle", challenge_02_2(puzzle));
