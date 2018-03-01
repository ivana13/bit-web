
function switchBorders() {
    document.querySelector('.selected').className = "";

    // select last img element on page
    // add class ... to that element
   var img = document.querySelectorAll('img');
   img[img.length-1].className = "selected"


   
}
function switchBorders2() {
    var nextDiv = document.querySelector(".selected").parentElement.nextElementSibling;
    nextDiv.firstElementChild.nextElementSibling.classList.add("selected");
}


