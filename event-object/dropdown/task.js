let dropDownButton = document.querySelector('.dropdown__value')
let dropDownList = document.querySelector('.dropdown__list')
let dropDownLinks = document.querySelectorAll('.dropdown__link')


dropDownButton.addEventListener(
  'click',
  () => {
    dropDownList.classList.toggle('dropdown__list_active')
  }
)

dropDownLinks.forEach((link) => {
  link.addEventListener(
    'click',
    (e) => {
      e.preventDefault()
      dropDownButton.textContent = e.target.textContent.trim()
      dropDownList.classList.remove('dropdown__list_active')
    }
  )
})