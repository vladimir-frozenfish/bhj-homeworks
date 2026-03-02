let pollTitle = document.querySelector('#poll__title')
let pollAnswers = document.querySelector('#poll__answers')

function render(data) {
  pollTitle.textContent = data.title
  pollAnswers.innerHTML = data.answers.map(i => `<button class="poll__answer">${i}</button>`).join('')

  let answers = pollAnswers.querySelectorAll('.poll__answer')
  answers.forEach(answer => {
    answer.addEventListener('click', () => {window.alert('Спасибо, ваш голос засчитан!')})
  })
}

async function getData() {
    try {
      const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll')
      data = await response.json()
      render(data.data)
    } catch (e) {
      throw e
    }
  }


  getData()