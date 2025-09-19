document.addEventListener("DOMContentLoaded", function() {
    let elements = document.getElementsByClassName("important");

    let paragraph = document.querySelector("p");
    paragraph.innerHTML = '<span class="important">Today we offer:</span>';

    let canceledProducts = document.querySelectorAll("li");
    canceledProducts[1].setAttribute("class", "nemame");


    let image = document.querySelector('[src="img/pastry.jpg"]');      // výber elementu
    image.setAttribute("alt", "Bread");                               // nastavenie atribútu
    console.log(image.hasAttribute("alt"));                                 // kontrola či má element atribút

    let novyTovar = document.createElement("li");
    novyTovar.textContent = "Muffins";

    let parent = document.getElementById("ponuka");
    prvaPolozka = parent.firstElementChild;
    parent.insertBefore(novyTovar, prvaPolozka);
})