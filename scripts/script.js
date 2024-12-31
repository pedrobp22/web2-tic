document.addEventListener('DOMContentLoaded', function () {
  let myButton = document.querySelector('button'); // Botón para cambiar el nombre
  let nombreUsuario = document.getElementById('nombreUsuario'); // Elemento donde aparecerá el nombre del usuario

  // Función para cambiar el nombre del usuario
  function setUserName() {
    let myName = prompt('Por favor, introduce tu nombre.');
    if (!myName) {
      setUserName(); // Si no se introduce un nombre, vuelve a preguntar
    } else {
      // Guardar el nombre en localStorage
      localStorage.setItem('name', myName);
      // Cambiar el contenido del elemento con id 'nombreUsuario'
      nombreUsuario.textContent = myName;
    }
  }

  // Verifica si ya hay un nombre guardado en localStorage
  if (!localStorage.getItem('name')) {
    setUserName(); // Si no hay nombre guardado, pide el nombre
  } else {
    let storedName = localStorage.getItem('name');
    nombreUsuario.textContent = storedName; // Muestra el nombre guardado
  }

  // Cambiar el nombre cuando se hace clic en el botón
  myButton.onclick = function () {
    setUserName();
  };
});
console.log('El script está cargado');
