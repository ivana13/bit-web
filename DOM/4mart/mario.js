var stay = document.querySelector(".stay");
var run = document.querySelector(".run");
var bg = document.querySelector(".bg");
bg.style.backgroundPositionX = '100px';
var interval = "";
var startRunBool = false;

document.addEventListener("keydown", function(){
   
    
    stay.style.display = "none";
    run.style.display = "block";
    
    startRun();
})

document.addEventListener("keyup", function(){
    run.style.display = "none";
    stay.style.display = "block";
    clearInterval(interval);
    startRunBool = false;
})

function startRun() {
    if(!startRunBool){
        console.log("trcanje");
        
        interval = setInterval(groundMove, 50);
        startRunBool = true;
    }
}

function groundMove () {
    bg.style.backgroundPositionX = (parseInt(bg.style.backgroundPositionX) - 10) + 'px';
}
