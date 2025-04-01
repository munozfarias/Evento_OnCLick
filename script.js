document.addEventListener("DOMContentLoaded", () => {
  class Definicion {
    constructor(nombre, cientifico, descripcion, habitat, datoCurioso) {
      this.nombre = nombre;
      this.cientifico = cientifico;
      this.descripcion = descripcion;
      this.habitat = habitat;
      this.datoCurioso = datoCurioso;
      this.likes = 0;
    }

    crearTarjeta() {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
              <h2 class="name">${this.nombre}</h2>
              <p class="description">
                  <span class="highlight">Nombre Científico:</span> <i class="scientific">${this.cientifico}</i><br>
                  <span class="highlight">Descripción:</span> ${this.descripcion}<br>
                  <span class="highlight">Hábitat:</span> ${this.habitat}<br>
                  <span class="highlight">Dato Curioso:</span> ${this.datoCurioso}
              </p>
              <div class="like-box">
                  ❤️ <span class="like-count">${this.likes}</span>
                  <button class="like-btn">Me gusta</button>
              </div>
          `;

      // Boton de "Me gusta"
      const likeBtn = card.querySelector(".like-btn");
      const likeCount = card.querySelector(".like-count");

      likeBtn.addEventListener("click", () => {
        this.likes++;
        likeCount.textContent = this.likes;
        alert(`Le diste "Me gusta" a ${this.nombre}`);
      });

      return card;
    }
  }

  // Lista de definiciones
  const definiciones = [
    new Definicion(
      "Axolote",
      "Ambystoma mexicanum",
      "El axolote es un anfibio con regeneración única.",
      "Lagos de agua dulce",
      "Nunca pasa a la etapa adulta debido a la neotenia."
    ),
    new Definicion(
      "Cuervo",
      "Corvus corax",
      "Ave inteligente, capaz de resolver problemas y recordar rostros.",
      "Bosques y ciudades",
      "Puede imitar sonidos humanos."
    ),
    new Definicion(
      "Pulpo",
      "Octopus vulgaris",
      "Invertebrado con habilidades de camuflaje y resolución de problemas.",
      "Océanos",
      "Tiene tres corazones y sangre azul."
    ),
  ];

  // Agregar definiciones en la página
  const contenedorDefiniciones = document.querySelector(".left-column");
  definiciones.forEach((definicion) => {
    contenedorDefiniciones.appendChild(definicion.crearTarjeta());
  });

  // Cambio del botón de "Agregar Definición"
  const addDefinitionBtn = document.querySelector(".add-definition-btn");
  if (addDefinitionBtn) {
    addDefinitionBtn.addEventListener("click", () => {
      addDefinitionBtn.remove();
    });
  }

  // Cambio entre "Iniciar Sesión" y "Cerrar Sesión"
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", () => {
    loginBtn.textContent =
      loginBtn.textContent === "Iniciar Sesión"
        ? "Cerrar Sesión"
        : "Iniciar Sesión";
  });
});
