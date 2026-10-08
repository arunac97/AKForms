document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const siteHeader = document.querySelector('.site-header');
  const yearNode = document.getElementById('year');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  if (toggleButton && siteHeader) {
    toggleButton.addEventListener('click', () => {
      const isOpen = siteHeader.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Joined!';
        button.disabled = true;

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 1800);
      }
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = contactForm.querySelector('button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Sent!';
        button.disabled = true;

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          contactForm.reset();
        }, 1800);
      }
    });
  }
});
