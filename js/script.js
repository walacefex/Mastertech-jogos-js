// let inputs = document.querySelectorAll(".dentro");

// for (let input of inputs){
//     input.onkeyup = function(evento){
//         if(evento.key === "Enter"){
//             event.target.style.backgroundColor = event.target.value;
//         }
//         input.onpaste
//     }
// }



function embaralhar(lista) {
    let valor_temporario;
    let indice_aleatorio;
 
    for(let i = lista.length -1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
       
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
 
    return lista;
}
let cartas = document.querySelectorAll(".carta");
let cartaVirada = null;
let imagensSalvas = ["img-1.png","img-2.png","img-3.png","img-4.png","img-5.png","img-6.png","img-7.png","img-8.png"];
let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for( let i in cartas){
    cartas[i].style.backgroundImage = `url("img/${imagens[i]}")`;
}


setTimeout(function() {
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("img/carta-virada.png")';
        carta.onclick = function(){
        if(cartaVirada && cartaVirada.id !== carta.id
            
            ){
            
        }else{
        carta.style.backgroundImage = `url("img/${imagens[Number(carta.id)]}")`;
        cartaVirada = carta;
        }

        }
    }
}, 3000);

