const firstSubstringOfNthElements = (input: string, n: number) =>
  input.split('').reduce((acc, _, idx) => {
    let substr = input.substring(idx, idx + n);
    if (new Set(substr).size == n && acc === 0) return idx + n;
    return acc;
  }, 0);

const day06 = (input: string) => ({
  startOfPacket: firstSubstringOfNthElements(input, 4),
  startOfMessage: firstSubstringOfNthElements(input, 14),
});

const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

console.log(day06(input));
