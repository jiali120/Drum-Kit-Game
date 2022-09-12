// If i write "button" that is dangres because if I have an other button later, 
// the selector will select the new button too. So i changed "button" to "drum"

// Detecting Button Press
var numberDrumButtons = document.querySelectorAll(".drum").length;
//var audio = new Audio("tom-1.mp3")

for(var i=0; i<numberDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //audio.play();  --- make sounds
        //this can triggered all the drum from listener
        // When click the button the letter will become white color: this.style.color="white"

        var buttonInnerHTML = this.innerHTML;
        //Call makeSounds function, and basic call innerHTML
        makeSounds(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}



// Detecting keyboard Press 
//addEventListener is HIGHER ORDER Function and function(event) is callback function
// add event listeners to detect keyboard strokes
// event contains a propety called key tell us which keyboard key was pressed, 
document.addEventListener("keypress", function(event){
    //console.log(event);
    // send keypress to the event
    makeSounds(event.key); // send it to makeSounds function

    buttonAnimation(event.key);
});

function makeSounds(key){
    switch(key){
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;


        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }

}


function buttonAnimation(currentKey){


    // .nameofClass
    var activeButton = document.querySelector("."+currentKey);

    // change css pressed class. add it
    activeButton.classList.add("pressed");

    setTimeout(function(){
        //remove pressed class
        activeButton.classList.remove("pressed");
    }, 100); // after 0.1 second remove pressed class



}

// Constructor Function