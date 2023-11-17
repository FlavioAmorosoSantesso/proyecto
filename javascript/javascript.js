// Función para alerta con saludo (después de un tiempo)
function bienvenida() {
    alert('¡Hola, soy el Mago Richard, gracias visitar mi página web!');
  }
  //Tiempo de respuesta en 2.5em
  setTimeout(bienvenida, 2500);
  //Botón para modo oscuro//
let toggle = document.getElementById("toggle");
let label = document.getElementById("label");
toggle.addEventListener("change", (event) => {
  let estado = event.target.checked;
  document.body.classList.toggle("oscuro");
  if (estado == true) {
    label.innerHTML = '<i class="fa-solid fa-plug"></i>';
  } else {
    label.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  }
});
//Función de Alerta en Vivo
let EnVivoAhora = false;
function consultarDirectosEnVivo() {
// Se requiere API para el fetch
fetch('')
.then(response => response.json())
.then(data => EnVivoAhora = data.estado === 'En vivo ahora');
}
function AlertaDeDirecto() {
if (EnVivoAhora) {
  Notification.requestPermission().then(resultado => {
    if (resultado === 'granted') {
      const notification = new Notification('¡Veni a mi canal de Youtube!');
      notification.onclick = function () {
        window.location.href = 'https://www.youtube.com/@elmagorichard/streams';
      };
    } else {alert('Bueno, cuando puedas pasa a ver el directo, ¡nos vemos!');
  }
});
 }
};