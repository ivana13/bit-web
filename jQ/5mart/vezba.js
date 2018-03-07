$(function() {
    console.log('Hello Deki');
    
var img = document.querySelectorAll('img');

img.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (elem.width !== 300) {
            event.stopPropagation();
        }
        elem.classList.add("red");
    })
})

document.addEventListener("click", function (event) {
    console.log(event.target);
})
})