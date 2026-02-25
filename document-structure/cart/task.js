let cart = document.querySelector('.cart__products')
let products = document.querySelectorAll('.product')

products.forEach(product => {
  let img = product.querySelector('.product__image')
  let count = product.querySelector('.product__quantity-value')
  let countInc = product.querySelector('.product__quantity-control_inc')
  let countDec = product.querySelector('.product__quantity-control_dec')
  let addInCart = product.querySelector('.product__add')

  countInc.addEventListener('click', () => {
    count.textContent = +count.textContent + 1
  })

  countDec.addEventListener('click', () => {
    count.textContent = +count.textContent > 1 ? +count.textContent - 1 : 1
  })

  addInCart.addEventListener('click', () => {
    let currentProductInCart = cart.querySelector(`[data-id="${product.getAttribute('data-id')}"]`)

    if (currentProductInCart) {
      let countProduct = currentProductInCart.querySelector('.cart__product-count')
      countProduct.textContent = +count.textContent + +currentProductInCart.textContent
    } else {
      let cartProduct = document.createElement('div')
      cartProduct.classList.add('cart__product')
      cartProduct.setAttribute('data-id', product.getAttribute('data-id'))
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${count.textContent}</div>      
      `
      cart.appendChild(cartProduct)
    }
  })
})