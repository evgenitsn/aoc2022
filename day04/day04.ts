const parseInput = (input: string) =>
  input.split('\n').map((line) =>
    line.split(',').map((range) => {
      const [from, to] = range.split('-').map(Number);
      return [...Array(to - from + 1).keys()].map((x) => x + from);
    }),
  );

const day04 = (input: string) =>
  parseInput(input).reduce(
    (result, [pair1, pair2]) => {
      const intersection = pair1.filter((value) => pair2.includes(value));
      if (intersection.length > 0) {
        if (
          String(intersection) === String(pair1) ||
          String(intersection) === String(pair2)
        ) {
          return {
            partiallyOverlap: (result.partiallyOverlap += 1),
            fullyOverlap: (result.fullyOverlap += 1),
          };
        }
        return {
          ...result,
          partiallyOverlap: (result.partiallyOverlap += 1),
        };
      }
      return result;
    },
    {
      fullyOverlap: 0,
      partiallyOverlap: 0,
    },
  );

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

console.log(day04(input));
