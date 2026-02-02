let holes = document.querySelectorAll('.hole-game .hole')
let dead = document.querySelector('#dead')
let lost = document.querySelector('#lost')
let deadCount = +dead.textContent
let lostCount = +lost.textContent

const toWin = 10
const toLoss = 5

holes.forEach((hole) => {
  hole.addEventListener('click', (e) => {
    if (e.target.classList.contains('hole_has-mole')) {
      dead.textContent = ++deadCount
    } else {
      lost.textContent = ++lostCount
    }

    console.log(deadCount)

    if (lostCount === toLoss) {
      alert('Вы проиграли!')
      deadCount = 0
      lostCount = 0
      dead.textContent = deadCount
      lost.textContent = lostCount
    }

    if (deadCount === toWin) {
      alert('Вы выиграли!')
      deadCount = 0
      lostCount = 0
      dead.textContent = deadCount
      lost.textContent = lostCount
    }
  })
})