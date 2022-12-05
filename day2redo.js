console.log('>>> DAY 2')

const input = require('fs').readFileSync('./day2.txt').toString()
const strat = input.split('\n').map(v => v.split(' '))


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


const score = strat.reduce((score, round) => {
	const [you, me] = round.map(parsePlay)
	if (me == you) {
		score +=  3 + me
	} else if ((me == 1 && you == 3) || (me == 2 && you == 1) || (me == 3 && you == 2)) {
		score += 6 + me
	} else {
    score += 0 + me 
	}
	return score 
}, 0);
console.log('PART 1 : Score', score)

console.log('>>> DAY 2 PART 2')
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
	if (desiredOutcome == 3) {
		score += opponent + desiredOutcome
	} else if (desiredOutcome == 6) {
		let me = 0
		if (opponent == 1) {
			me = 2
		} else if ( opponent == 2){
			me = 3
		} else {
			me = 1
		}
		score += me + desiredOutcome
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
	}
	return score;
}, 0);

console.log('PART 2', scoreOutcomes);
// 13600