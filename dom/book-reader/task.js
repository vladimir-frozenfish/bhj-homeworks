let fontSwitches = document.querySelectorAll('.font-size')
let book = document.querySelector('#book')

fontSwitches.forEach((fontSwitch) => {
  fontSwitch.addEventListener(
    'click',
    (e) => {
      e.preventDefault()
      fontSwitches.forEach((elem) => elem.classList.remove('font-size_active'))
      fontSwitch.classList.add('font-size_active')
      
      let fontSize = fontSwitch.getAttribute('data-size')
      book.className = 'book'
      if (fontSize) book.classList.add(`book_fs-${fontSize}`)
    }
  )
})