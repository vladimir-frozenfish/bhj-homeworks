let form = document.querySelector('#tasks__form')
let input = document.querySelector('#task__input')
let tasksList = document.querySelector('#tasks__list')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let task = document.createElement('div')
  task.classList.add('task')
  task.innerHTML = `
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>    
    `
  let removeTask = task.querySelector('a')
  removeTask.addEventListener('click', (e) => {
    e.preventDefault()
    task.remove()
  })

  tasksList.prepend(task)
  e.target.reset()
})