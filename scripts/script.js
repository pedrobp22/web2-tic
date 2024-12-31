document.addEventListener('DOMContentLoaded', function () {
  let myButton = document.getElementById('changeNameButton'); // Botón para cambiar el nombre
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

  // Función para cambiar la imagen
  let myImage = document.querySelector('#proteina-p53 img');

  myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src'); // Obtiene el valor del atributo 'src'
    if (mySrc === 'https://upload.wikimedia.org/wikipedia/commons/0/00/1tup.jpg') {
      myImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cell_Cycle_2.svg/1920px-Cell_Cycle_2.svg.png');
    } else {
      myImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/0/00/1tup.jpg');
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById('movingImage');
    let positionX = 0; // Posición inicial
    const speed = 0.75; // Velocidad de movimiento

    function moveImage() {
        // Mover la imagen incrementando la posición
        positionX += speed;

        // Si la imagen llega al final de la pantalla, vuelve al principio
        if (positionX > window.innerWidth) {
            positionX = -image.width; // Coloca la imagen fuera de la pantalla a la izquierda
        }

        // Actualiza la posición de la imagen en la pantalla
        image.style.left = positionX + 'px';

        // Llama a la función en el siguiente frame para crear el movimiento
        requestAnimationFrame(moveImage);
    }

    // Iniciar el movimiento de la imagen
    moveImage();
});
