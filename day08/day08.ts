const day08a = (input: string): number => {
  const rows = input.split('\n');
  let visibleTrees = 0;
  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows[row].length; col++) {
      if (
        col == 0 ||
        row == 0 ||
        col == rows[row].length - 1 ||
        row == rows.length - 1
      ) {
        visibleTrees++;
        continue;
      }

      for (let direction of ['left', 'right', 'up', 'down']) {
        let isVisible = true;

        if (direction === 'left') {
          for (let i = 0; i < col; i++) {
            if (rows[row][i] >= rows[row][col]) isVisible = false;
          }
        } else if (direction === 'right') {
          for (let i = col + 1; i < rows[row].length; i++) {
            if (rows[row][i] >= rows[row][col]) isVisible = false;
          }
        } else if (direction === 'up') {
          for (let i = 0; i < row; i++) {
            if (rows[i][col] >= rows[row][col]) isVisible = false;
          }
        } else if (direction === 'down') {
          for (let i = row + 1; i < rows.length; i++) {
            if (rows[i][col] >= rows[row][col]) isVisible = false;
          }
        }

        if (isVisible) {
          visibleTrees++;
          break;
        }
      }
    }
  }

  return visibleTrees;
};

const day08b = (input: string): number => {
  const rows = input.split('\n');
  let highest = -Infinity;
  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows[row].length; col++) {
      let [left, right, bottom, top] = [0, 0, 0, 0];
      for (let i = col - 1; i >= 0; i--) {
        left++;
        if (rows[row][i] >= rows[row][col]) break;
      }
      for (let i = col + 1; i < rows[row].length; i++) {
        right++;
        if (rows[row][i] >= rows[row][col]) break;
      }
      for (let i = row - 1; i >= 0; i--) {
        top++;
        if (rows[i][col] >= rows[row][col]) break;
      }
      for (let i = row + 1; i < rows.length; i++) {
        bottom++;
        if (rows[i][col] >= rows[row][col]) break;
      }
      highest = Math.max(left * right * top * bottom, highest);
    }
  }
  return highest;
};

const input = `30373
25512
65332
33549
35390`;

console.log(day08a(input));
console.log(day08b(input));
