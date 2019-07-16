let inputs = document.querySelectorAll(".dentro");

for (let input of inputs){
    input.onkeyup = function(evento){
        if(evento.key === "Enter"){
            event.target.style.backgroundColor = event.target.value;
        }
        input.onpaste
    }
}