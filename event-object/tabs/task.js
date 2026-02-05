let tabs = document.querySelectorAll('.tab')
let chapters = document.querySelectorAll('.tab__content')

tabs.forEach((tab, index) => {
  tab.addEventListener(
    'click',
    () => {
      tabs.forEach((tab) => tab.classList.remove('tab_active'))
      tab.classList.add('tab_active')

      chapters.forEach((tab) => tab.classList.remove('tab__content_active'))
      chapters[index].classList.add('tab__content_active')
    }
  )
})