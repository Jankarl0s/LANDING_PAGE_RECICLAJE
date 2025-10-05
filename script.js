/* Archivo script.js */

/* Inicialización de Particles.js */
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100, // Cantidad de partículas. Menos es más elegante.
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // Color de las partículas
      },
      "shape": {
        "type": "circle", // Forma de la partícula (circle, edge, triangle, polygon, star, image)
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true, // Opacidad aleatoria para un efecto más natural
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 3,
        "random": true, // Tamaño aleatorio
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150, // Distancia máxima para que las líneas se conecten
        "color": "#ffffff", // Color de las líneas
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2, // Velocidad del movimiento
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out", // Comportamiento al salir del lienzo
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse" // Efecto al pasar el ratón: "repulse" aleja las partículas
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Efecto al hacer clic: "push" añade nuevas partículas
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_opacity": 1
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8
        },
        "repulse": {
          "distance": 150, // Distancia de repulsión del cursor
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4 // Cantidad de partículas a añadir al hacer clic
        }
      }
    },
    "retina_detect": true
  });

 /* --- CÓDIGO ACTUALIZADO PARA ROBOT CON CUERPO MÓVIL --- */
document.addEventListener('DOMContentLoaded', () => {

    const heroSection = document.querySelector('.hero-section');
    const robotCube = document.getElementById('robot-cube');
    const robotBody = document.getElementById('robot-body'); // <-- 1. Obtenemos el cuerpo

    if (heroSection && robotCube && robotBody) { // <-- Verificamos que exista el cuerpo
        
        const MAX_ROTATION = 35; 

        heroSection.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateYValue = (mouseX - centerX) / centerX;
            const rotateXValue = (mouseY - centerY) / centerY;
            
            // Rotación completa para la cabeza
            const finalRotateY = rotateYValue * MAX_ROTATION;
            const finalRotateX = -1 * rotateXValue * MAX_ROTATION;

            // <-- 2. Calculamos una rotación más sutil para el cuerpo (la mitad de la cabeza)
            const bodyRotateY = finalRotateY * 0.5;
            const bodyRotateX = finalRotateX * 0.5;

            // Aplicamos las rotaciones
            robotCube.style.transform = `rotateX(${finalRotateX}deg) rotateY(${finalRotateY}deg)`;
            robotBody.style.transform = `rotateX(${bodyRotateX}deg) rotateY(${bodyRotateY}deg)`; // <-- 3. Movemos el cuerpo
        });
        
        heroSection.addEventListener('mouseleave', () => {
            // Regresamos ambos a su posición original
            robotCube.style.transform = 'rotateX(0deg) rotateY(0deg)';
            robotBody.style.transform = 'rotateX(0deg) rotateY(0deg)'; // <-- 4. Reseteamos el cuerpo
        });
    }
});

/* --- CÓDIGO PARA LA ANIMACIÓN LOTTIE DE LA SECCIÓN DE CONTACTO --- */
document.addEventListener('DOMContentLoaded', () => {
    

    const contactLottieContainer = document.getElementById('lottie-contact-animation');
    
    if (contactLottieContainer) {
        contactLottieContainer.innerHTML = `
            <lottie-player 
                src="img/Fish.json" 
                background="transparent" 
                speed="1" 
                style="width: 100%; height: 100%;" 
                loop 
                autoplay>
            </lottie-player>
        `;
    }
});

/* --- CÓDIGO PARA LA VENTANA EMERGENTE DEL CALENDARIO --- */
document.addEventListener('DOMContentLoaded', () => {
    // ... tu otro código puede estar aquí ...

    // Obtener los elementos
    const modal = document.getElementById('calendar-modal');
    const openBtn = document.getElementById('open-calendar-btn');
    const closeBtn = document.querySelector('.close-button');

    // Revisar si los elementos existen para evitar errores
    if (modal && openBtn && closeBtn) {
        // Cuando el usuario hace clic en el botón, abre la ventana
        openBtn.onclick = function() {
            modal.style.display = "block";
        }

        // Cuando el usuario hace clic en la (x), cierra la ventana
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Cuando el usuario hace clic fuera de la ventana, también la cierra
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});