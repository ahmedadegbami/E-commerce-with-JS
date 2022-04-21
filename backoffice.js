const option = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ",
  },
};

//  <<<<<<<<<<<< EDIT OT POST >>>>>>>>>>>>>>>>
const paramID = new URLSearchParams(window.location.search).get("productID");

console.log(paramID);

const method = paramID ? "PUT" : "POST";
const endpoint = paramID
  ? "https://striveschool-api.herokuapp.com/api/product/" + paramID
  : "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  if (paramID) {
    try {
      const response = await fetch(endpoint, option);
      let { name, description, brand, imageUrl, price } = await response.json();
      document.getElementById("name").value = name;
      document.getElementById("decription").value = description;
      document.getElementById("brand").value = brand;
      document.getElementById("image").value = imageUrl;
      document.getElementById("price").value = price;

      let poster = document.getElementById("poster");
      poster.innerHTML = "Make an update";
      let editor = document.getElementById("editor");
      editor.innerHTML = "Update";
      editor.className = " btn btn-primary";
      const alert = document.getElementById("alerter");
      alert.innerHTML = "Update Product";
    } catch (err) {
      console.log(err);
    }
  }
};

let postProduct = async (event) => {
  event.preventDefault();
  try {
    let myObject = {
      name: document.getElementById("name").value,
      description: document.getElementById("decription").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("image").value,
      price: document.getElementById("price").value,
    };

    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(myObject),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ",
      },
    });

    if (response.ok) {
      const products = await response.json();
      const alert = document.getElementById("alerter");
      const form = document.querySelector("form");

      if (paramID) {
        console.log(products);
        alert.innerHTML = "Update product";
        form.innerHTML = `<div id="alerter" class="alert alert-success" role="alert">
          You have successful made an update
        </div><img
      src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg&ga=GA1.2.1448366003.1641081600"
      alt="" class="d-flex m-auto justify-content-center" height="50%" width="50%"
    /> <a href="./index.html" class="btn btn-success m-auto">Back</a>`;

        // window.location.assign('/')
      } else {
        alert.innerHTML = "Fill to post product";
        form.innerHTML = `<div id="alerter" class="alert alert-success" role="alert">
          You have successful posted a product
        </div> 
       <img
      src="https://memesbams.com/wp-content/uploads/2017/12/Good-Luck-Quotes.jpg" 
      alt="" class="d-flex m-auto justify-content-center" height="30%" width="30%"/>
      <a href="./index.html" class="btn btn-success m-auto">Back</a></div>`;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

let deleteProduct = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + paramID, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.assign("/");
    });
};

const validated = (event) => {
  event.target.form.classList.add("validate");
};
