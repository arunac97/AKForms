document.addEventListener('DOMContentLoaded', async () => {
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');

  if (headerMount) {
    try {
      const response = await fetch('header.html');
      if (!response.ok) throw new Error('Header not found');
      headerMount.innerHTML = await response.text();

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = headerMount.querySelectorAll('.site-nav a');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });

      const toggleButton = headerMount.querySelector('.nav-toggle');
      const siteHeader = headerMount.closest('.site-header');
      if (toggleButton && siteHeader) {
        toggleButton.addEventListener('click', () => {
          const isOpen = siteHeader.classList.toggle('open');
          toggleButton.setAttribute('aria-expanded', String(isOpen));
        });
      }
    } catch (error) {
      console.warn('Unable to load shared header:', error);
    }
  }

  if (footerMount) {
    try {
      const response = await fetch('footer.html');
      if (!response.ok) throw new Error('Footer not found');
      footerMount.innerHTML = await response.text();

      const yearNode = footerMount.querySelector('#year');
      if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
      }
    } catch (error) {
      console.warn('Unable to load shared footer:', error);
    }
  }
});
