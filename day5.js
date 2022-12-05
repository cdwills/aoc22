console.log('>> DAY5');

const inputCrates = require('fs').readFileSync('./day5crates.txt').toString()
const crates = inputCrates.split('\n')

const inputMoves = require('fs').readFileSync('./day5moves.txt').toString()
const moves = inputMoves.split('\n').map(move => {
  const rmove = move.split(' ')
  const row = [rmove[1],rmove[3],rmove[5]]
  return row.map(x => parseInt(x))
})

// console.log('crates\n', crates)
// console.log('moves', moves)

// MOVES
// MOVE [0] FROM [1] TO [2]
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
const ecrates = [
  'ZN',
  'MCD',
  'P'
]

//
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
const emoves = [
  [1,2,1],
  [3,1,3],
  [2,2,1],
  [1,1,2]
]
// PART 1
// // const makeMoves = emoves.map(row => {
// const makeMoves = moves.map(row => {
//   // console.log({ row, ecrates })
//   // if (!row) return 0
//   const [ cratesToMove, rowToMoveFrom, rowToMoveTo ] = row
//   if (cratesToMove !== cratesToMove) return 0
//   console.log({ row, cratesToMove, rowToMoveFrom, rowToMoveTo })
//   // so a move.
//   //  is the number of crates
//   // const cratesPendingMove = ecrates[rowToMoveFrom - 1].slice(-cratesToMove)
//   const cratesPendingMove = crates[rowToMoveFrom - 1].slice(-cratesToMove)
//   console.log({ cratesPendingMove })
//   // ecrates[rowToMoveFrom - 1] =
//     // ecrates[rowToMoveFrom - 1].slice(0, ecrates[rowToMoveFrom - 1].length - cratesToMove)
//   crates[rowToMoveFrom - 1] =
//     crates[rowToMoveFrom - 1].slice(0, crates[rowToMoveFrom - 1].length - cratesToMove)
//
//   const ll = cratesPendingMove.length
//   const arr = cratesPendingMove.split('')
//   for (let i = 0; i < ll; i++){
//     const toMove = arr.pop()
//     // ecrates[rowToMoveTo - 1] = ecrates[rowToMoveTo - 1].concat(toMove)
//     crates[rowToMoveTo - 1] = crates[rowToMoveTo - 1].concat(toMove)
//     console.log(crates[rowToMoveTo - 1] )
//   }
//   // console.log({ ecrates, row, cratesPendingMove})
//   return crates;
// })
// const makeMoves = emoves.map(row => {
const makeMoves = moves.map(row => {
  // console.log({ row, ecrates })
  // if (!row) return 0
  const [ cratesToMove, rowToMoveFrom, rowToMoveTo ] = row
  if (cratesToMove !== cratesToMove) return 0
  console.log({ row, cratesToMove, rowToMoveFrom, rowToMoveTo })
  // so a move.
  //  is the number of crates
  // const cratesPendingMove = ecrates[rowToMoveFrom - 1].slice(-cratesToMove)
  const cratesPendingMove = crates[rowToMoveFrom - 1].slice(-cratesToMove)
  console.log({ cratesPendingMove })
  // ecrates[rowToMoveFrom - 1] =
    // ecrates[rowToMoveFrom - 1].slice(0, ecrates[rowToMoveFrom - 1].length - cratesToMove)
  crates[rowToMoveFrom - 1] =
    crates[rowToMoveFrom - 1].slice(0, crates[rowToMoveFrom - 1].length - cratesToMove)

  // const ll = cratesPendingMove.length
  // const arr = cratesPendingMove.split('')
  // for (let i = 0; i < ll; i++){
  //   const toMove = arr.pop()
    // ecrates[rowToMoveTo - 1] = ecrates[rowToMoveTo - 1].concat(toMove)
    crates[rowToMoveTo - 1] = crates[rowToMoveTo - 1].concat(cratesPendingMove)
    console.log(crates[rowToMoveTo - 1] )
  //}
  // console.log({ ecrates, row, cratesPendingMove})
  return crates;
})
// const makeMoves = emoves.map(row => {
// const makeMoves = moves.map(row => {
//   // console.log({ row, ecrates })
//   // if (!row) return 0
//   const [ cratesToMove, rowToMoveFrom, rowToMoveTo ] = row
//   if (cratesToMove !== cratesToMove) return 0
//   console.log({ row, cratesToMove, rowToMoveFrom, rowToMoveTo })
//   // so a move.
//   //  is the number of crates
//   // const cratesPendingMove = ecrates[rowToMoveFrom - 1].slice(-cratesToMove)
//   const cratesPendingMove = crates[rowToMoveFrom - 1].slice(-cratesToMove)
//   console.log({ cratesPendingMove })
//   // ecrates[rowToMoveFrom - 1] =
//     // ecrates[rowToMoveFrom - 1].slice(0, ecrates[rowToMoveFrom - 1].length - cratesToMove)
//   crates[rowToMoveFrom - 1] =
//     crates[rowToMoveFrom - 1].slice(0, crates[rowToMoveFrom - 1].length - cratesToMove)
//
//   const ll = cratesPendingMove.length
//   const arr = cratesPendingMove.split('')
//   for (let i = 0; i < ll; i++){
//     const toMove = arr.pop()
//     // ecrates[rowToMoveTo - 1] = ecrates[rowToMoveTo - 1].concat(toMove)
//     crates[rowToMoveTo - 1] = crates[rowToMoveTo - 1].concat(toMove)
//     console.log(crates[rowToMoveTo - 1] )
//   }
//   // console.log({ ecrates, row, cratesPendingMove})
//   return crates;
// })


console.log({ mine: crates, theres: ['C', 'M', 'PDNZ'] })
