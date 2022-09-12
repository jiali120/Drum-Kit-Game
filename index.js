// If i write "button" that is dangres because if I have an other button later, 
// the selector will select the new button too. So i changed "button" to "drum"
var numberDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio("tom-1.mp3")

for(var i=0; i<numberDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        audio.play();
    });
}