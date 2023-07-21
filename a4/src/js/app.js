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
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

window.addEventListener("load", function() {
    // Your code here that should run when the page and all resources are loaded
    console.log("The page and all resources have been loaded!");

    let menu = document.getElementById("menu");

    for (let i = 0; i < categories.length; i++) {
        let createdElement = document.createElement("button");
        createdElement.id = categories[i].name;
        createdElement.textContent = categories[i].name;
        menu.appendChild(createdElement);
    } 

    
    productList();


});


function productList(category)
{
    let menuButtons = document.querySelector("#menu").querySelectorAll("button");
    for(let i = 0; i < menuButtons.length ; i++)
{
    menuButtons[i].addEventListener("click", function() {

        document.getElementById("selected-category").innerHTML = menuButtons[i].textContent;
        document.getElementById("category-products").innerHTML = "";

        var catSelected = menuButtons[i].textContent[0];

        for(let i = 0; i < products.length ; i++)
        {
            if(products[i].id[0] === catSelected && products[i].discontinued !== true)
            {
                var Row = document.getElementById("category-products").insertRow();
                Row.className = "row";
                var Cell = Row.insertCell();
                var Contents = document.createTextNode(products[i].title);
                Cell.appendChild(Contents);

                Cell = Row.insertCell();
                Contents = document.createTextNode(products[i].description);
                Cell.appendChild(Contents);

                Cell = Row.insertCell();
                Contents = document.createTextNode(products[i].price);
                Cell.appendChild(Contents);
            }
           
            
        }
    });
}
}



