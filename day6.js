console.log('>> DAY 6')

const input = require('fs').readFileSync('./day6.txt').toString()
const signal = input.split('\n')[0]

// console.log(signal)

// we are looking for sets of 4 where there is no repeated character.
// we need to start and take sets of 4, so slice(0,4), slice(1,4)...etc
// when there is no repeated char in that set, we win

const e1 = { s: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', a: 7, a2: 19  }
const e2 = { s: 'bvwbjplbgvbhsrlpgdmjqwftvncz', a: 5, a2: 23 }
const e3 = { s: 'nppdvjthqldpwncqszvftbrmjlhg', a: 6, a2: 23 }
const e4 = { s: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', a: 10, a2: 29 }
const e5 = { s: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', a: 11, a2: 26 }

const examples = [e1,e2,e3,e4,e5]

const boop = (signal, answer, offset) => {
  for(let l = 0; l < signal.length; l++) {
    const chunk = signal.slice(l, l + offset)
    const chunkSet = new Set(chunk.split(''));

    if (chunkSet.size == offset){
      console.log({ answer, mine: l+offset, match: (l+offset == answer) })
      break;
    }
  }
}

examples.map(v => boop(v.s, v.a, 4))
boop(signal, 1198, 4)

console.log('DAY6 PART2 ')

// const borp = (s,a) => {
//   for(let l = 0; l < s.length; l++) {
//     const chunk = s.slice(l, l + 14)
//     const chunkSet = new Set(chunk.split(''));
//
//     if (chunkSet.size == 14){
//       console.log({ a, mine: l+14, match: (l+14 == a) })
//       break;
//     }
//   }
// }

examples.map(v => boop(v.s, v.a2, 14))
boop(signal, 3120, 14)



