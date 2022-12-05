console.log('>>> DAY 2')

const input = require('fs').readFileSync('./day2.txt').toString()
const strat = input.split('\n').map(v => v.split(' '))

// console.log('strat', strat)

// ROCK > SCISSORS
// SCISSIORS > PAPER
// PAPER > ROCK
// == draw

// COLUMN 1:
// A ROCK     | 1
// B PAPER    | 2
// C SCISSORS | 3

// COLUMN 2:
// X ROCK     | 1
// Y PAPER    | 2
// Z SCISSORS | 3

// WIN 6
// DRAW 3
// LOSE 0

// 2 6
// 1 0
// 3 3
// total 15

// ok so strat is MY PLAY, then OPPONENT
// MY PLAY + OUTCOME = SCORE FOR ROUND
// const play = (throw) => {
// 	switch (throw) {
// 		case 'A':
// 		case 'X':
// 			return

// 			break;

// 		default:
// 			break;
// 	}

// }
/*
// get winner
//
const parsePlay = (play) => {
  switch (play) {
		// rock
		case 'A':
		case 'X':
			return 1;
		// paper
		case 'B':
		case 'Y':
		  return 2;
		//scissors
		case 'C':
		case 'Z':
			return 3;
		default:
			console.log('oh no')
			return 0;
	}
}

const firstFive = [
	['C', 'Z' ], // 3 + 3 = 6 + 0
	['B', 'Y'],    // 2 + 3 = 5 + 6
	['C', 'X'],   // .1 + 6 = 7 + 11
	['B', 'Z'],   // 3 + 6 = 9 + 18
] // total 27

//
const def = [
	['A', 'Y'],
	['B', 'X'],
	['C', 'Z'],
] // example which total score == 15

const defwithties = [
	['A', 'Y'],
	['B', 'X'],
	['C', 'Z'],
	['A', 'X'], // 1+3
	['B', 'Y'], // 2+3
	['C', 'Z']  // 3+3
] // example which total score == 30
const everything = [
	['A', 'X'], // 1+3 = 4
	['A', 'Y'], // 1+0 = 1
	['A', 'Z'], // 1+6 = 7

	['B', 'X'], // 2+6 = 8
	['B', 'Y'], // 2+3 = 5
	['B', 'Z'], // 2+0 = 2

	['C', 'X'], // 3+0= 3
	['C', 'Y'], // 3+6= 9
	['C', 'Z']  // 3+3 = 6
] // example which total score == 45

const supers = [...everything, ...everything, ...everything];

const score = strat.reduce((score, round) => {
	// console.log('SCORE ROUND', s, round)
	const [you, me] = round.map(parsePlay)
	// console.log('SCORE ROUND', {score, me, you})

	const prev = score
	if (me == you) {
		score +=  3 + me
		console.log('DRAW', {me, you, prev,  score})
	} else if ((me == 1 && you == 3) || (me == 2 && you == 1) || (me == 3 && you == 2)) {
		score += 6 + me
		console.log('WIN', {me, you, prev, score})
	} else {
    score += 0 + me
		console.log('LOSS', {me, you, prev, score})
	}
	return score
}, 0);
*/
// console.log("SCORE", score)

console.log('>>> DAY 2 PART 2')

// strat is still strat
// X -> you should lose
// Y -> you should draw
// Z -> you should win
const outcomes = [
	['A', 'Y'], // ROCK | DRAW -> ROCK (1) + 3 = 4
	['B', 'X'], // PAPER | LOSE -> ROCK (1) + 0 = 1
	['C', 'Z'], // SCISSORS | WIN -> ROCK (1) + 6 = 7
]  // 12
const firstFour = [
	['C', 'Z' ],  // ROCK 1 + 6 = 7
	['B', 'Y'],  // PAPER 2 + 3 = 5
	['C', 'X'],  // PAPER 2 + 0 = 2
	['B', 'Z'],  // SCISSORS 3 + 6 = 9
] // total 23
const everythingOG = [
	['A', 'X'], // 1+3 = 4
	['A', 'Y'], // 1+0 = 1
	['A', 'Z'], // 1+6 = 7

	['B', 'X'], // 2+6 = 8
	['B', 'Y'], // 2+3 = 5
	['B', 'Z'], // 2+0 = 2

	['C', 'X'], // 3+0= 3
	['C', 'Y'], // 3+6= 9
	['C', 'Z']  // 3+3 = 6
] // example which total score == 45

const everything2 = [
	['A', '', 'LOSE'], // 3 + 0 = 3
	['A', '', 'TIE'],  // 1 + 3 = 4
	['A', '', 'WIN'],  // 2 + 6 = 8

	['B', '', 'LOSE'], // 1 + 0 = 1
	['B', '', 'TIE'],  // 2 + 3 = 5
	['B', '', 'WIN'],  // 3 + 6 = 9

	['C', '', 'LOSE'], // 2 + 0 = 2
	['C', '', 'TIE'],  // 3 + 3 = 6
	['C', '', 'WIN']   // 1 + 6 = 7
] // example which total score == 45

const parsePlay2 = (val) => {
	const play = {
		A: 1, // rock
		B: 2, // paper
		C: 3  // scissors
	}
	return play[val]
}
const parseOutcome = (val) => {
	const outcome= {
		X: 0, // lose
		Y: 3, // tie
		Z: 6  // win
	}
	return outcome[val];
}
const scoreOutcomes = strat.reduce((score, round) => {
	const opponent = parsePlay2(round[0]);
	const desiredOutcome = parseOutcome(round[1]);
	console.log('ROUND', { score, opponent, desiredOutcome})

	if (desiredOutcome == 3) {
		// we need a draw
		// which is equal to the opponents play
		score += opponent + desiredOutcome
		console.log('DRAW', { score, opponent, me: opponent, desiredOutcome })
	} else if (desiredOutcome == 6) {
		// we wanna win this one.
		let me = 0
		if (opponent == 1) {
			// they played rock, so i play paper
			me = 2
		} else if ( opponent == 2){
			// they played paper, so we need scissors
			me = 3
		} else {
			me = 1
		}
		score += me + desiredOutcome
		console.log('WIN2', { score, opponent, me, desiredOutcome })
	} else {
		// we wanna lose
		let me = 0
		if (opponent == 1) {
			// they played rock, so i play scissors
			me = 3
		} else if ( opponent == 2){
			// they played paper, so we need rock
			me = 1
		} else {
			// they played scissors, paper
			me = 2
		}
		score += me + desiredOutcome
		console.log('LOSE', { score, opponent, me, desiredOutcome })
	}
	return score;
}, 0);

console.log('PART 2', scoreOutcomes);
// 13600
