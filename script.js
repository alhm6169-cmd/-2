document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successMsg) successMsg.style.display = 'block';
      contactForm.reset();
    });
  }
});
