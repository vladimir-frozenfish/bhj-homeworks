let loader = document.querySelector('#loader')
let items = document.querySelector('#items')

function render(currencies = []) {
  if (currencies.length === 0) {
    items.innerHTML = '<div>Данных не найдено ...</div>'
  } else {
    items.innerHTML = currencies.map(i => `
      <div class="item">
        <div class="item__code">
          ${i.CharCode}
        </div>
        <div class="item__value">
          ${i.Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
      </div>`
    ).join('')
  }  
}

async function getData() {
    try {
      const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
      data = await response.json()
      loader.classList.remove('loader_active')
      render(Object.values(data.response.Valute))
    } catch (e) {
      throw e
    }
  }


  getData()