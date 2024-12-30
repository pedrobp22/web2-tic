// Función para cambiar el nombre del usuario en el texto
function setUserName() {
  let myName = prompt('Por favor, introduce tu nombre.');
  if(!myName) {
    setUserName(); // Si no se introduce un nombre, vuelve a preguntar
  } else {
    document.getElementById('nombreUsuario').textContent = myName; // Cambia el texto en el span con id 'nombreUsuario'
  }
}
// Llamar a la función para que se ejecute cuando cargue la página
window.onload = setUserName;

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ', Las Croquetas Te Van a Encantar ';
}

myButton.onclick = function() {
  setUserName();
}
