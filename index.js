var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){

    var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml) ;


    
})
; 

}


document.addEventListener("keypress", function(event){
makeSound(event.key);
});

function makeSound (key) {
    switch (key) {
        case "w":
           var tom1 = new Audio ("sounds/808_2.wav");
        tom1.play(); 
            break;
    
        case "a":
           var tom2 = new Audio ("sounds/808_3.wav");
        tom2.play(); 
            break;
    
        case "s":
            var tom3 = new Audio ("sounds/808_4.wav");
        tom3.play(); 
            break;
    
        case "d":
            var tom4 = new Audio ("sounds/808_6.wav");
        tom4.play(); 
            break;
    
    
        case "j":
            var snare = new Audio ("sounds/808_7.wav");
        snare.play(); 
            break;
    
    
        case "k":
            var crash = new Audio ("sounds/808_R.wav");
        crash.play(); 
            break;
    
    
        case "l":
            var kick = new Audio ("sounds/808_S.wav");
        kick.play(); 
            break;        
    
    
    
        default:
            
    }
    



}
