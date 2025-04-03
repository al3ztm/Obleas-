function changeTheme(){
  document.body.classList.toggle("switch");
}

document.addEventListener("DOMContentLoaded", function() {
  // Ahora seleccionamos el formulario usando la clase "login"
  const loginForm = document.querySelector(".login");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí podrías agregar validación de usuario/contraseña si lo deseas

    // Se oculta la vista de login y se muestra la vista de Obleas
    document.getElementById("vista-login").style.display = "none";
    document.getElementById("vista-obleas").style.display = "block";
    // Se muestra el header
    document.getElementById("header").style.display = "block";
  });

  // Event Listener para el navbar
  const navInicio = document.getElementById("navInicio");
  const navSobre = document.getElementById("navSobre");

  navInicio.addEventListener("click", function(e) {
    e.preventDefault();
    // Scroll a la sección de obleas (parte superior)
    document.getElementById("seccion-obleas").scrollIntoView({
      behavior: 'smooth'
    });
  });

  navSobre.addEventListener("click", function(e) {
    e.preventDefault();
    // Scroll a la sección "Conócenos!"
    document.getElementById("section-conocenos").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
