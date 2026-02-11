let revealElements = document.querySelectorAll('.reveal')

window.addEventListener(
  'scroll',
   () => {
    revealElements.forEach((elem) => {
      const {top, bottom} = elem.getBoundingClientRect()
      if (bottom > 0 && top < window.innerHeight) {
        elem.classList.add('reveal_active')
      } else {
        elem.classList.remove('reveal_active')
      }
    })
   })