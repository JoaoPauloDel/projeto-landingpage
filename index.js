document.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        document.querySelector("header")
            .classList.add("active")
    } else {
        document.querySelector("header")
            .classList.remove("active")
    }
})



// Seleciona o botão "Delivery" da seção "Levamos até você"
const deliveryButton = document.querySelector(".delivery a");

// Função para soltar confetes
function soltarConfete() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#ff9ff3']
  });
}

// Quando clicar
deliveryButton.addEventListener("click", (event) => {
  event.preventDefault(); // impede redirecionamento
  soltarConfete();

  // Efeito extra: balançar o botão
  deliveryButton.style.transform = "scale(1.1)";
  setTimeout(() => {
    deliveryButton.style.transform = "scale(1)";
  }, 200);
});
