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
    menuButtons[i].addEventListener("click", function () {
      createProductCard(menuButtons[i]);
    });
  }
});

// function productList(category) {
//   document.getElementById("category-products").innerHTML = "";
//   document.getElementById("selected-category").innerHTML = category.textContent;

//   var filter = products.filter(
//     (cat) => cat.categories[0].includes(category.id) && cat.discontinued !== true
//   );

//   filter.forEach((element) => {
//     var Row = document.getElementById("category-products").insertRow();
//     Row.className = "row";
//     var Cell = Row.insertCell();
//     var Contents = document.createTextNode(element.title);
//     Cell.appendChild(Contents);

//     Cell = Row.insertCell();
//     Contents = document.createTextNode(element.description);
//     Cell.appendChild(Contents);

//     Cell = Row.insertCell();
//     Contents = document.createTextNode(`$${element.price / 100}`);
//     Cell.appendChild(Contents);
//   });
// }

function createProductCard(product) { 

  document.getElementById("category-products").innerHTML = "";
  document.getElementById("selected-category").innerHTML = product.textContent;

  var filter = products.filter(
    (cat) => cat.categories[0].includes(product.id) && cat.discontinued !== true
  );

  filter.forEach((element) => {
    const card = document.createElement("div"); 
    card.classList.add("card"); 

    const productImage = document.createElement("img"); 
    productImage.src = product.imageUrl; 
    productImage.classList.add("card-image"); 
    card.appendChild(productImage); 

    let title = document.createElement('h3');
    title.innerText = element.title;
    card.appendChild(title);

    let description = document.createElement('p');
    description.innerText = element.description;
    card.appendChild(description);

    let price = document.createElement('h4');
    price.innerText = `$${element.price / 100}`;
    card.appendChild(price);
  });
  // Return the card’s <div> element to the caller 

} 
