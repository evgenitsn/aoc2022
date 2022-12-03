const getPriority = (item: string): number => {
  const charCode = item.charCodeAt(0);
  return charCode >= 97 && charCode <= 122
    ? charCode - 97 + 1
    : charCode - 65 + 27;
};

const day03a = (input: string) =>
  input
    .split('\n')
    .map((rucksack) => {
      const first = rucksack.substring(0, rucksack.length / 2);
      const second = rucksack.substring(rucksack.length / 2);
      const commonItemType = [...first].find((itemType) =>
        second.includes(itemType),
      );
      return getPriority(commonItemType || '');
    })
    .reduce((sum, curr) => (sum += curr), 0);

const day03b = (input: string) => {
  let badges: string[] = [];
  const rucksacks = input.split('\n');
  for (let i = 0; i < rucksacks.length; i += 3) {
    const group = rucksacks.slice(i, i + 3);
    const firstBackpack = new Set(group[0]);
    const secondBackpack = new Set(group[1]);
    const thirdBackpack = new Set(group[2]);
    const common = [...firstBackpack].find(
      (x) => secondBackpack.has(x) && thirdBackpack.has(x),
    );
    if (common) {
      badges.push(common);
    }
  }
  return badges
    .map((e) => getPriority(e))
    .reduce((acc, curr) => (acc += curr), 0);
};

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

console.log(day03a(input));
console.log(day03b(input));
