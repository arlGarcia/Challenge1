let arrayCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
const textarea = document.querySelector("#salida");
const entrada = document.querySelector("#entrada");

function btnEncriptar() {
    document.getElementById("desencriptar").style.backgroundImage = "none";
    textarea.value = encriptar(entrada.value);
    entrada.value = "";   
}
function btnDesencriptar(){
    document.getElementById("desencriptar").style.backgroundImage = "none";
    textarea.value = desencriptar(entrada.value);
    entrada.value = "";
}
function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringEncriptado.includes(arrayCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i = 0; i < arrayCodigo.length; i++){
        if(stringDesencriptado.includes(arrayCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(arrayCodigo[i][1], arrayCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
function copiar(){     
    navigator.clipboard.writeText(textarea.value)
}

