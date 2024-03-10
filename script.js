
// SE DECLARAN LAS VARIABLES DONDE SE ESTARA RECIBIENDO EL TEXTO DE LAS TEXAREAS 
const mensaje = document.querySelector(".mensaje");
const codigo = document.querySelector(".codigo");

// SE FORMA UNA MATRIZ O ARREGLO MULTIDIMENCIONAL DE LAS LLAVES DE ENCRIPTACION 


function btnEncriptar(){
    const encriptado = encriptar(mensaje.value);
    codigo.value = encriptado;
    mensaje.value = "";
    codigo.style.backgroundImage = "none";
}


function encriptar(textUsuario){
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    textUsuario = textUsuario.toLowerCase();
        //RECORRIDO DE MATRIS CON for
        // i EMPIEZA EN CERO; i DEBE SER MAS PEQUE;A QUE matriz; EL INCREMENTAL PARA IR RECORRIENDO 
    for(let i = 0; i < matriz.length; i++){
            //COMPARACION DE LAS LETRAS
            // if EL TEXTO DEL USUARIO ESTA INCLUIDO EN LA matriz  EN EL INDICE i Y POSICION 0
        if(textUsuario.includes(matriz[i][0])){
                //
            textUsuario = textUsuario.replaceAll(matriz[i][0], matriz[i][1]);
        }
     }
    return textUsuario;
 }




 function btnDesencriptar(){
    const desencriptado = desEncriptar(mensaje.value);
    codigo.value = desencriptado;
    mensaje.value = "";
    codigo.style.backgroundImage = "none";
}


 function desEncriptar(texEncriptado){
    let matriz = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    texEncriptado = texEncriptado.toLowerCase();
    for(let i = 0; i < matriz.length; i++){
        if(texEncriptado.includes(matriz[i][0])){
            texEncriptado = texEncriptado.replaceAll(matriz[i][0], matriz[i][1]);
        }
     }
    return texEncriptado;
 }



