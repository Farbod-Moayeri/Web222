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

  productList(menuButtons[0]);

  for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function () {
      productList(menuButtons[i]);
    });
  }
});

function productList(category) {
  document.getElementById("category-products").innerHTML = "";
  document.getElementById("selected-category").innerHTML = category.textContent;

  var filter = products.filter(
    (cat) => cat.categories[0].includes(category.id) && cat.discontinued !== true
  );

  filter.forEach((element) => {
    var Row = document.getElementById("category-products").insertRow();
    Row.className = "row";
    var Cell = Row.insertCell();
    var Contents = document.createTextNode(element.title);
    Cell.appendChild(Contents);

    Cell = Row.insertCell();
    Contents = document.createTextNode(element.description);
    Cell.appendChild(Contents);

    Cell = Row.insertCell();
    Contents = document.createTextNode(`$${element.price / 100}`);
    Cell.appendChild(Contents);
  });
}
