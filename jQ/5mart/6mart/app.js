$(function () {
    var imageSources = ['http://via.placeholder.com/300x200', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/300x200', 'http://via.placeholder.com/300x200'];


    $container = $('.container');

    imageSources.forEach(function (src) {
        var $img = $('<img>');
        $img.attr('src', src);

        var randomWidth = 100 + Math.random() * 400;
        $img.css('width', randomWidth);

        if (randomWidth>200){
            $img.addClass('green');
        }

        $container.append($img);

    })

    $('.container').before('<h1> naslov...</h1>');
})




//  Array object
// var arrayOfNumbers = [1, 2, 3, 4, 5, 6];

// arrayOfNumbers.forEach(function (element, index, array) {
//     var output = "Current element: " + element + ", at index: " + index + " of Array: " + array + " | " + arrayOfNumbers;
//     console.log(output);
// });


// for (var index = 0; index < arrayOfNumbers.length; index++) {
//     var element = arrayOfNumbers[index];
// }