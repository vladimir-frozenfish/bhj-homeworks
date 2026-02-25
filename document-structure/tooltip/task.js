let links = document.querySelectorAll('.has-tooltip')
let body = document.querySelector('body')
// let toolTips = []
let currentTooltip = ''

let toolTip = document.createElement('div')
toolTip.classList.add('tooltip')

body.appendChild(toolTip)


links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    let {left, bottom} = link.getBoundingClientRect()

    if (link.getAttribute('title') === currentTooltip) {
      toolTip.classList.toggle('tooltip_active')
    } else {
      toolTip.classList.add('tooltip_active')
      toolTip.textContent = link.getAttribute('title')
      toolTip.style.top = bottom + 'px'
      toolTip.style.left = left + 'px'
    }

    currentTooltip = link.getAttribute('title')
  })
})
