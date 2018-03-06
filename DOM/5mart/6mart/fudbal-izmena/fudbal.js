"use strict";


var $body = $('body');
var $button = $('button');
var $player = $('img');

$body.on('click', movePlayer);
$button.on('click', removeEvent);

function movePlayer(event) {
    var $currentPositionX = event.clientX;
    var $currentPositionY = event.clientY;

    
   // $player.style.top = $currentPositionY - ($player.height) / 2 + "px";
   // $player.style.left = $currentPositionX - ($player.width) / 2 + "px";

    $player.offset({
        'left': $currentPositionX - $player.width() / 2 ,
        'top':  $currentPositionY - $player.height() / 2
    });

}

function removeEvent() {
    $body.remove('click', movePlayer);
}