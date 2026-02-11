let cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  let rotatorCases = card.querySelectorAll('.rotator__case')

  let count = 0
  rotatorCases.forEach((elem, index) => {
    if (elem.classList.contains('rotator__case_active')) count = index
  })
  
  setInterval(() => {
    count++
    if (count === rotatorCases.length) count = 0

    rotatorCases.item(count ? count - 1 : rotatorCases.length - 1).classList.remove('rotator__case_active')
    rotatorCases.item(count).classList.add('rotator__case_active')
  }, 1000)

  console.log(rotatorCases)
  console.log(rotatorCases.length)
})