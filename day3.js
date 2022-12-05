console.log('>>> DAY 3')

const input = require('fs').readFileSync('./day3.txt').toString()
const rucksacks = input.split('\n')

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const getPriority = (char) => alpha.indexOf(char) + 1

const output = rucksacks.map((sack) => {
  const length = sack.length
  const half = length / 2
  const first = sack.slice(0, half).split('')
  const last = sack.slice(half).split('')

  const indexOfDupe = first.reduce((arr, char) => {
    if (last.indexOf(char) == -1) return arr

    arr.push(last.indexOf(char));
    return arr;
  }, [])

  return last[indexOfDupe[0]]
})

const outputPriorities = output.map(getPriority)
const sum = outputPriorities.reduce((a,c) => a + c, 0)

// CORRECT 7980
console.log('OUTPUT PRIORITIES', { shouldBe: 7980, sum })


console.log('>> DAY 3 PART 2');

// now i have the shortest index
// so now we take that one and compare each char to the other 2 in the group
const getCommonChar = (group, shortestIndex) => {
  if (group.length != 3){
    return -1
  }

  const [one, two, three] = group
  const commonChar = one.split('').reduce((commonChar, currentChar, index) => {
    if (two.indexOf(currentChar) > -1 && three.indexOf(currentChar) > -1) {
      return currentChar
    }
    return commonChar

  })

  return commonChar
}

const groupThrees = [[]]
let groupIndex = 0
const { grouped }= rucksacks.reduce((acc, each, index) => {
  let { grouped, groupIndex } = acc

  if (index % 3 == 0 && index > 0) {
    groupIndex++
    grouped[groupIndex] = [each]
  } else {
    grouped[groupIndex].push(each)
  }

  return { grouped, groupIndex }
}, { grouped: [[]], groupIndex: 0})
const groupedPriorities = grouped.map(getCommonChar).map(getPriority).reduce((a,c) => a + c)

console.log('DAY 2 Part 2 priorties', groupedPriorities)
