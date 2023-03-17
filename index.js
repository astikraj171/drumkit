// document.querySelector("button").addEventListener("click",handleClick);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimantion(buttonInnerHTML);
        
    })
};

document.addEventListener("keypress",function(events){
    makeSound(events.key);
    buttonAnimantion(events.key);
});

function makeSound(keys){
    switch(keys){
        case("w"):
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        
        case("a"):
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case("s"):
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case("d"):
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case("j"):
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case("k"):
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case("l"):
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

    }
}

function buttonAnimantion(currentKeys){
    var curKeys = document.querySelector("."+currentKeys);
    curKeys.classList.add("pressed");
    setTimeout(function(){
        curKeys.classList.remove("pressed")
    },100)
}