console.log('>>> DAY 2')

const input = require('fs').readFileSync('./day2.txt').toString()
const strat = input.split('\n').map(v => v.split(' '))

console.log('strat', strat)

// ROCK > SCISSORS
// SCISSIORS > PAPER
// PAPER > ROCK
// == draw

// COLUMN 1:
// A ROCK     | 1
// B PAPER    | 2
// C SCISSORS | 3

// COLUMN 2:
// X ROCK
// Y PAPER
// Z SCISSORS

// WIN 6
// DRAW 3
// LOSE 0

// 1 0
// 2 6
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


const def = [
	['A', 'Y'],
	['B', 'X'],
	['C', 'Z'],
]

const score = strat.reduce((s, round) => {
	// console.log('SCORE ROUND', s, round)
	const [me, you] = round.map(parsePlay)
	console.log('SCORE ROUND', {s, me, you})
	// ROCK > SCISSORS
	// 1 > 3
// SCISSIORS > PAPER
  // 3 > 1
// PAPER > ROCK
 // 2 > 3
  // DRAW
	let score = 0;
	if (me == you) {
		score =  3 + me + s
		console.log('DRAW', {me, you, s, score})
	} else if ((me == 1 && you == 3) || (me == 2 && you == 1) || (me == 3 && you == 2)) {
		score = 6 + me + s
		console.log('WIN', {me, you, s, score})
	} else {
    score = 0 + me + s
		console.log('LOSE', {me, you, s, score})
	}

	return score 
}, 0)

console.log("SCORE", score)