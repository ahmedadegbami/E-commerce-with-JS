 const option = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ",
        },
      };

      
      //  <<<<<<<<<<<< EDIT OT POST >>>>>>>>>>>>>>>>
      const paramID = new URLSearchParams(window.location.search).get(
        "productID"
      );

      console.log(paramID);

      
      const method = paramID ? "PUT" : "POST";
      const endpoint = paramID
        ? "https://striveschool-api.herokuapp.com/api/product/" + paramID
        : "https://striveschool-api.herokuapp.com/api/product/";
        
      window.onload = async () => {
        if (paramID) {
          try {
            const response = await fetch(endpoint, option);
            let { name, description, brand, imageUrl, price } =
              await response.json();
            document.getElementById("name").value = name;
            document.getElementById("decription").value = description;
            document.getElementById("brand").value = brand;
            document.getElementById("image").value = imageUrl;
            document.getElementById("price").value = price;
            
            let poster = document.getElementById("poster")
            poster.innerHTML = "Edit product"
            

            let editor = document.getElementById("editor")
            editor.innerHTML = "Change"
            editor.className = " btn btn-primary"

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

          const response = await fetch(
            endpoint,
            {
              method: method,
              body: JSON.stringify(myObject),
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmZhNWE5MDIzOTAwMTVkOTY1ZGIiLCJpYXQiOjE2NDk4NTIzMjUsImV4cCI6MTY1MTA2MTkyNX0.byIP9sGJBEu1KNeVEtoF2tsWgEOtohWDDZd-GgY2rUQ",
              },
            }
          );
          const products = await response.json();
          console.log(products);
          window.location.assign("/");

         
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
          .then((res) => res.text())
          .then((res) => {
            console.log(res);
            window.location.assign("/");
          });
      };

let validated = (event) => {
  event.target.form.classList.add("validate")

}