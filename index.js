const displayProducts = async () => {
  const response = await fetch(
    'https://striveschool-api.herokuapp.com/api/product/',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ',
      },
    },
  )
  const products = await response.json()
  console.log(products)

  let row = document.querySelector('.row')

  products.forEach((product) => {
    let col = document.createElement('div')
    col.className = 'col-3 mb-5 image-fluid'
    col.innerHTML = `<div class="card">
          
          <div class="card-body">
          <div class="d-flex justify-content-center">
          <img src="${product.imageUrl}" alt="" height="100px" weight="100px" />
          </div>
          
            <h5 class="card-title">${product.name}</h5>
            
            <div class="d-flex justify-content-between align-items-center">
            <p class="mb-0 text-danger font-weight-bold lead ">${product.price} €</p>
            <a href="./details.html?productID=${product._id}" class="btn btn-info">VIEW</a>
            </div>

          </div>
        </div>`

    row.appendChild(col)
  })
}

// <<<<<<<<<<<< back offine >>>>>>>>>>

window.onload = () => {
  displayProducts()
}
