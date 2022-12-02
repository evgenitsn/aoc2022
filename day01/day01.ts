const getElfCalories = (input: string) =>
  input
    .split('\n\n')
    .map((e) => e.split('\n'))
    .map((e) => e.reduce((acc, curr) => (acc += Number(curr)), 0));

const day01a = (input: string) => Math.max(...getElfCalories(input));

const day01b = (input: string) => {
  const elfCalories = getElfCalories(input);
  return elfCalories
    .slice(elfCalories.length - 3)
    .reduce((partialSum, a) => partialSum + a, 0);
};

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

console.log(day01a(input));
console.log(day01b(input));
