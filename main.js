// Detect button click
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

// Detect keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sound
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.wav").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-5.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-6.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-7.mp3").play();
            break;
        default:
            console.log(key);
    }
}

// Function for button animation
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
