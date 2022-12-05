console.log('>>> DAY 4')

const input = require('fs').readFileSync('./day4.txt').toString()
const assignments = input.split('\n')

const example = [
  ['2-4','6-8'],
  ['2-3','4-5'],
  ['5-7','7-9'],
  ['2-8','3-7'],
  ['6-6','4-6'],
  ['2-6','4-8'],
]


const overlappersInFull = assignments.reduce((acc, value, index) => {
  if (!value) return acc
  const [first, second] = value.split(',')
  const [firstStart, firstEnd] = first.split('-').map(x => parseInt(x))
  const [secondStart, secondEnd] = second.split('-').map(x => parseInt(x))

  if (firstStart <= secondStart && secondEnd <= firstEnd) {
    ++acc
  } else if (firstStart >= secondStart && secondEnd >= firstEnd) {
    ++acc
  }

  return acc
}, 0)

console.log({ overlappersInFull });

console.log('DAY 4 PART 2')

const overlappersAtAll = assignments.reduce((acc, value, index) => {
  if (!value) return acc

  const [first, second] = value.split(',')
  const [firstStart, firstEnd] = first.split('-').map(x => parseInt(x))
  const [secondStart, secondEnd] = second.split('-').map(x => parseInt(x))

  if (firstStart >= secondStart && firstStart <= secondStart) {
    ++acc
  } else if (firstEnd <= secondEnd && firstEnd >= secondStart) {
    ++acc
  } else if (secondStart >= firstStart && secondStart <= firstEnd) {
    ++acc
  } else if (secondEnd <= firstEnd && secondEnd >= firstStart) {
    ++acc
  }

  return acc
}, 0)

console.log({ overlappersAtAll })
