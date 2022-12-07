function day07(input: string) {
  const lines = input.split('\n');
  const dirs: { [key: string]: number } = {};
  const currentPath: string[] = [];

  for (const line of lines) {
    if (/\d+\s\w+/.test(line)) {
      const fileSize = Number(line.match(/\d+/)[0]);
      const path: string[] = [];

      currentPath.forEach((dir) => {
        path.push(dir);

        const dirTotal = dirs[path.join('/')] ?? 0;
        dirs[path.join('/')] = dirTotal + fileSize;
      });
    } else if (line.startsWith('$ cd')) {
      const [_, _command, param] = line.split(' ');
      param === '..' ? currentPath.pop() : currentPath.push(param);
    }
  }

  const part1 = Object.values(dirs).reduce(
    (total, dirSize) => (dirSize <= 100000 ? total + dirSize : total),
    0,
  );

  const part2 = Object.values(dirs)
    .sort((a, b) => a - b)
    .find((dirSize) => 70000000 - dirs['/'] + dirSize >= 30000000);

  return { part1, part2 };
}

const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

console.log(day07(input));
