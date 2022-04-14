

const displayProducts = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ"
}
})
  const products = await response.json();
  console.log(products);

  let row = document.querySelector(".row")
  


  

  products.forEach(product => {
   let col = document.createElement("div")
   col.className = "col-3 mb-5 image-fluid" 
    col.innerHTML = `<div class="card">
          
          <div class="card-body">
            <h5 class="card-title">${product.brand}</h5>
            
            <a href="#" class="btn btn-primary">${product.price} €</a>
            <a href="./details.html?productID=${product._id}" class="btn btn-primary float-right">VIEW</a>

          </div>
        </div>`

        row.appendChild(col)
  });

};

// <<<<<<<<<<<< back offine >>>>>>>>>>










window.onload = () => {
  displayProducts();
};

