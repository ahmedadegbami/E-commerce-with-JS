

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
   col.className = "col-3" 
    col.innerHTML = `<div class="card">
          <img src=${product.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">
              ${product.description}
            </p>
            <a href="#" class="btn btn-primary">${product.price}€</a>
          </div>
        </div>`

        row.appendChild(col)
  });

};

let postProduct = async (event) => {
      event.preventDefault()

     let myObject = {
          name: document.getElementById("name").value,
          description: document.getElementById("decription").value,
          brand: document.getElementById("brand").value,
          imageUrl: document.getElementById("image").value,
          price: document.getElementById("price").value

      }

      const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", { method: "POST",
            body: JSON.stringify(myObject), 
            headers: {
            "Content-Type": "application/json",  
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ"}
            })
            const products = await response.json();
            console.log(products)
  



 }

window.onload = () => {
  displayProducts();
};


