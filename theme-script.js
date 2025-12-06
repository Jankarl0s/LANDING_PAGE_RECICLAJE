const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;



function applySavedTheme() {
  // Lee la preferencia guardada en localStorage. Si no hay nada, el valor es `null`.
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
}

//  Este evento se dispara cuando el HTML de la página está completamente cargado.
//  llama a la función y aplica el tema sin que el usuario lo note.
document.addEventListener('DOMContentLoaded', applySavedTheme);


// Esta parte maneja el clic del usuario y guarda la seleccion.

themeToggleButton.addEventListener('click', () => {
  //  Alterna la clase 'dark-mode' en el body. Esto cambia la apariencia visual al instante.
  body.classList.toggle('dark-mode');
  
  //  Después de cambiar el tema, guardamos la nueva preferencia en localStorage.
  let currentTheme = 'light';

  if (body.classList.contains('dark-mode')) {
    // Si el body AHORA tiene la clase 'dark-mode', se actualiza la variable.
    currentTheme = 'dark';
  }
  
  // Se guarda el valor actual ('light' o 'dark') en localStorage.
  localStorage.setItem('theme', currentTheme);
});