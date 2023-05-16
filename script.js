const textArea = document.querySelector(".area_texto");
const mensaje = document.querySelector(".area_mensaje");

function boton_encriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function boton_desencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function boton_copiar() {
  const mensaje = document.querySelector(".area_mensaje");
  const texto = mensaje.value;

  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Texto copiado: ' + texto);
    })
    .catch((error) => {
      console.error('Error al copiar el texto:', error);
    });
}


function encriptar(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function desencriptar(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

