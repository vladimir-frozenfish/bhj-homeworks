let form = document.querySelector('#form')
let progressBar = document.querySelector('#progress')

function uploadFile(formFile) {
  let xhr = new XMLHttpRequest()

  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      progressBar.value = (e.loaded / e.total) * 100
    }
  })

  xhr.onload = function() {
    alert('Файл успешно отправлен');
  }

  xhr.onerror = function() {
    alert('Ошибка при загрузке файла')
  }

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
  xhr.send([formFile])
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  uploadFile(new FormData(e.target))
})