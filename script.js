// SCROLL INDICATOR
window.addEventListener('scroll', function() {
  const indicator = document.querySelector('.scroll-indicator');
  if (indicator) {
    if (window.scrollY > 30) {
      indicator.style.opacity = '0';
      indicator.style.visibility = 'hidden';
    } else {
      indicator.style.opacity = '1';
      indicator.style.visibility = 'visible';
    }
  }
});

// FAQ - Accordion corrigido (inicia oculto e alterna corretamente)
const questions = document.querySelectorAll(".faq-btn");

questions.forEach(q => {
  const answer = q.nextElementSibling;
  const icon = q.querySelector(".icon");
  const faqItem = q.parentElement;

  // Garante que todas as respostas iniciem ocultas
  answer.style.maxHeight = "0px";
  answer.style.overflow = "hidden";
  answer.style.transition = "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  icon.style.transform = "rotate(0deg)";

  q.addEventListener("click", () => {
    if (faqItem.classList.contains("active")) {
      // Fecha
      answer.style.maxHeight = "0px";
      icon.style.transform = "rotate(0deg)";
      setTimeout(() => {
        faqItem.classList.remove("active");
      }, 500);
    } else {
      // Abre
      faqItem.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    }
  });
});