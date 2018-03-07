
'use strict'

$(function(){




$("img").on('click', function(){
    $('img').hide().delay(800).fadeIn(7000);

    $("img").animate({
        left: '250px',
        top: '+=300px',
        width: '+=100px'
    },1000);
})
})