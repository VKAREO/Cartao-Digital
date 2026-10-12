

document.addEventListener('DOMContentLoaded', () => {
  // Adiciona um pequeno feedback visual ao clicar nos links
  const links = document.querySelectorAll('.link-btn');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Efeito de ripple sutil
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = link.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      link.appendChild(ripple);

      // Remove o ripple após a animação
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });


  console.log(
    '%c✨ Victorya Kare – Cartão Digital',
    'color: #34d399; font-size: 14px; font-weight: bold;'
  );
  console.log(
    '%cDesenvolvido com boas práticas de programação 💜',
    'color: #94a3b8; font-size: 12px;'
  );
});
