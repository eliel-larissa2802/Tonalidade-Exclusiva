const questions = document.querySelectorAll(".faq-btn");
// Adicione isso ao seu script.js existente
window.addEventListener('scroll', function() {
  const indicator = document.querySelector('.scroll-indicator');
  
  if (indicator) {
    // window.scrollY detecta quantos pixels a página já subiu
    if (window.scrollY > 20) { 
      // Quando rolar mais de 20px, ele começa a sumir
      indicator.style.opacity = '0';
      indicator.style.visibility = 'hidden';
      indicator.style.transition = 'opacity 0.5s ease, visibility 0.5s';
    } else {
      // Quando voltar para o topo, ele reaparece
      indicator.style.opacity = '1';
      indicator.style.visibility = 'visible';
    }
  }
});

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector(".icon");

    // Fecha/Abre e rotaciona o ícone
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      icon.style.transform = "rotate(45deg)";
    }
  });
});