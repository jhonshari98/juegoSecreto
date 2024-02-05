
let numeroSecreto = 0;
let conta =0;
let listaNumeroSor = [];
let numeroMaximo = 10;

function asignarTestiElemento(elemento, texto ){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numUsuario = parseInt(document.getElementById('numeroUsuarioValor').value);
    console.log (numeroSecreto);
    if (numUsuario === numeroSecreto){
        asignarTestiElemento('p',`Acertaste el numero en ${conta} ${(conta ===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {

        // el usuario no acerto
        if(numUsuario > numeroSecreto){
            asignarTestiElemento('p','El numero secreto es menor');

        }else{
            asignarTestiElemento('p','El numero secreto es mayor');
        }
        conta ++;
        limpiarCaja();
        console.log(conta);
    }
    return;
}

function limpiarCaja (){
    //Sacamos el valor de un input or id #
     document.querySelector('#numeroUsuarioValor').value ='';

}

function generarNumeroSecreto() {
    
    let numeroSo = Math.floor(Math.random()*numeroMaximo)+1;
    //Validar si el numero generado esta en el array
    console.log(numeroSo);
    console.log(listaNumeroSor)

    //Resoler la recursividad sitodos los numeros ya fueron sorteados

    if(listaNumeroSor.length == numeroMaximo){
        asignarTestiElemento('p','Ya se sortearon todos los numeros posibles');
        document.querySelector('#nuevoos').setAttribute('disabled','true');
    }else{
        if(listaNumeroSor.includes(numeroSo)){
            return generarNumeroSecreto();
        }   else{
                    listaNumeroSor.push(numeroSo)
                    return numeroSo;
        }
    }   

    
    
}

function condicionesIniciales(){
    asignarTestiElemento('h1','Juegos');
    asignarTestiElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
     //Generar el numero aleatorio
     numeroSecreto = generarNumeroSecreto();
     //Inicializar el numero de intentos
     conta=1;
}

function nuevoJuego (){
    // limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //Desabulitar el noton de nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();

