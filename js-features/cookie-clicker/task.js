let clickerCounter = document.querySelector('#clicker__counter')
let cookie = document.querySelector('#cookie')
let count = +clickerCounter.textContent

cookie.onclick = function() {
  clickerCounter.textContent = ++count

  cookie.width === 200 ? cookie.width = 220 : cookie.width = 200
}

