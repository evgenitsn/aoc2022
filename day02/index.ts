const TURNS = { ROCK: 'A', PAPER: 'B', SCISSORS: 'C' };

const simplifyMyTurns = (turn: string) => {
  if (turn === 'X') return 'A';
  if (turn === 'Y') return 'B';
  if (turn === 'Z') return 'C';
  return '';
};

const isWin = (elf: string, me: string) =>
  (elf === TURNS.ROCK && me === TURNS.PAPER) ||
  (elf === TURNS.PAPER && me === TURNS.SCISSORS) ||
  (elf === TURNS.SCISSORS && me === TURNS.ROCK);

const turnPoints = (me: string) => {
  if (me === TURNS.ROCK) return 1;
  if (me === TURNS.PAPER) return 2;
  if (me === TURNS.SCISSORS) return 3;
  return 0;
};

const getMyTurnBasedOnShouldWin = (elfTurn: string, shouldWin: string) => {
  if (elfTurn === TURNS.ROCK) {
    if (shouldWin === 'A') return TURNS.SCISSORS;
    if (shouldWin === 'B') return TURNS.ROCK;
    if (shouldWin === 'C') return TURNS.PAPER;
  }
  if (elfTurn === TURNS.SCISSORS) {
    if (shouldWin === 'A') return TURNS.PAPER;
    if (shouldWin === 'B') return TURNS.SCISSORS;
    if (shouldWin === 'C') return TURNS.ROCK;
  }
  return shouldWin;
};

const parseInput = (inputLine: string) => {
  const playerToken = inputLine.split(' ');
  const elfTurn = playerToken[0];
  const myTurn = simplifyMyTurns(playerToken[1]);
  return [elfTurn, myTurn];
};

const calculatePoints = (elfTurn: string, myTurn: string) => {
  let result = 0;
  if (isWin(elfTurn, myTurn)) result += 6;
  if (elfTurn === myTurn) result += 3;
  result += turnPoints(myTurn);
  return result;
};

const day02a = (input: string) =>
  input.split('\n').reduce((currResult, turns) => {
    const [elfTurn, myTurn] = parseInput(turns);
    return (currResult += calculatePoints(elfTurn, myTurn));
  }, 0);

const day02b = (input: string) =>
  input.split('\n').reduce((currResult, turns) => {
    const [elfTurn, shouldWin] = parseInput(turns);
    const myTurn = getMyTurnBasedOnShouldWin(elfTurn, shouldWin);
    return (currResult += calculatePoints(elfTurn, myTurn));
  }, 0);

const input = `A Y
B X
C Z`;

console.log(day02a(input));
console.log(day02b(input));
