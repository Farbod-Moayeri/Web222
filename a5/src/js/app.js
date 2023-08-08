/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Farbod Moayeri
 *      Student ID: 134395227
 *      Date:       2023/07/25
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

window.addEventListener("load", function () {
  let menu = document.getElementById("menu");

  for (let i = 0; i < categories.length; i++) {
    let createdElement = document.createElement("button");
    createdElement.id = categories[i].id;
    createdElement.textContent = categories[i].name;
    menu.appendChild(createdElement);
  }

  var menuButtons = document.querySelector("#menu").querySelectorAll("button");

  createProductCard(menuButtons[0]);

  for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function (event) {
      const clickedButton = event.target; // Get the clicked button
      createProductCard(clickedButton);
    });
  }
});


function createProductCard(product) { 

  console.log("Entered createProductCard");

  document.getElementById("product-cards").innerHTML = "";
  document.getElementById("selected-category").innerHTML = product.textContent;

  var filter = products.filter(
    (cat) => cat.categories[0].includes(product.id) && cat.discontinued !== true
  );

  filter.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const productImage = document.createElement("img"); 
    productImage.height = 300;
    productImage.width = 300;
    productImage.src = element.imageUrl; 
    productImage.classList.add("card-image"); 
    card.appendChild(productImage); 

    let title = document.createElement('h3');
    title.innerText = element.title;
    card.appendChild(title);

    let description = document.createElement('p');
    description.innerText = element.description;
    card.appendChild(description);

    console.log("h4 element creation");

    let price = document.createElement('h4');
    price.innerText = `$${element.price / 100}`;
    card.appendChild(price);

    document.getElementById("product-cards").appendChild(card);
  });
  

} 
