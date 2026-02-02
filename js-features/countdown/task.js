let timer = document.querySelector('#timer')
let countSecond = +timer.textContent

let coundDownID = setInterval(() => {
  countSecond--
  timer.textContent = countSecond
  
  if (countSecond === 50) {
    clearInterval(coundDownID)
    setTimeout(() => {
      alert('Вы победили в конкурсе!')
    }, 0)
  }
}, 1000)


