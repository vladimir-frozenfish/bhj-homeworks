let links = document.querySelectorAll('.has-tooltip')
let toolTips = []


links.forEach((link) => {
  let toolTip = document.createElement('div')
  toolTip.textContent = link.getAttribute('title')
  toolTip.classList.add('tooltip')
  
  link.appendChild(toolTip)

  toolTips.push(toolTip)

  link.addEventListener('click', (e) => {
    e.preventDefault()

    toolTips.forEach(elem => elem.classList.remove('tooltip_active'))
    toolTip.classList.add('tooltip_active')
  })
})