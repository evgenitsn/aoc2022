let testInputCranes = [['[Z]', '[N]'], ['[M]', '[C]', '[D]'], ['[P]']];

const printOutput = (cranes: string[][]) =>
  cranes.reduce((output, stack) => {
    return stack.at(-1)
      ? (output += stack.at(-1)?.replace('[', '').replace(']', ''))
      : output;
  }, '');

const day05 = (input: string) => {
  const commands = input
    .split('\n\n')[1]
    .split('\n')
    .map((e) => e.trim());
  const cranes9000 = JSON.parse(JSON.stringify(testInputCranes));
  const cranes9001 = JSON.parse(JSON.stringify(testInputCranes));

  commands.forEach((command) => {
    const commandTokens = command.split(' ');
    const cranesCount = +commandTokens[1];
    const from = +commandTokens[3] - 1;
    const to = +commandTokens[5] - 1;

    // part 1
    const cranesToMove9000 = cranes9000[from].slice(-cranesCount).reverse();
    cranes9000[from].splice(-cranesCount);
    cranes9000[to].push(...cranesToMove9000);

    // part 2
    const cranesToMove9001 = cranes9001[from].slice(-cranesCount);
    cranes9001[from].splice(-cranesCount);
    cranes9001[to].push(...cranesToMove9001);
  });
  return {
    crateMover9000: printOutput(cranes9000),
    crateMover9001: printOutput(cranes9001),
  };
};

const input = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

 move 1 from 2 to 1
 move 3 from 1 to 3
 move 2 from 2 to 1
 move 1 from 1 to 2`;

console.log(day05(input));

// let inputCranes = [
//   ['[W]', '[R]', '[F]'],
//   ['[T]', '[H]', '[M]', '[C]', '[D]', '[V]', '[W]', '[P]'],
//   ['[P]', '[M]', '[Z]', '[N]', '[L]'],
//   ['[J]', '[C]', '[H]', '[R]'],
//   ['[C]', '[P]', '[G]', '[H]', '[Q]', '[T]', '[B]'],
//   ['[G]', '[C]', '[W]', '[L]', '[F]', '[Z]'],
//   ['[W]', '[V]', '[L]', '[Q]', '[Z]', '[J]', '[G]', '[C]'],
//   ['[P]', '[N]', '[R]', '[F]', '[W]', '[T]', '[V]', '[C]'],
//   ['[J]', '[W]', '[H]', '[G]', '[R]', '[S]', '[V]'],
// ];
