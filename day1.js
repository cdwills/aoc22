console.log('>>> DAY 1')

const input = require('fs').readFileSync('./day1.txt').toString()

const elves = input.split('\n\n')
  .map(x => x.split('\n').map(x => parseInt(x)))

const max = elves.reduce((p, v) => {
  const calories = v.reduce((p, v) => p + v)
	return calories > p ? calories : p;
}, 0);

console.log('TOTAL MAX CALORIES: ', max);

console.log('>>> PART 2')

const totals = elves.map(val => val.reduce((p, v) =>	p + v	))
totals.sort((a,b) => b - a)

const [one, two, three] = totals

console.log('TOTAL OF TOP 3', { total: one + two + three })