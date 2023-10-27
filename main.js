//Declaração/criação da função tocaSomPom
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//criando a referência constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}