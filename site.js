(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.site-drawer');
  const closeTargets = document.querySelectorAll('[data-close-menu]');

  const setMenuOpen = (open) => {
    document.body.classList.toggle('menu-open', open);
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (drawer) drawer.setAttribute('aria-hidden', String(!open));
  };

  menuButton?.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  closeTargets.forEach((node) => node.addEventListener('click', () => setMenuOpen(false)));
  drawer?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      closeLightbox();
    }
  });

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (!form.reportValidity()) return;
      if (status) status.textContent = 'Thank you — your form is ready. This static preview does not send data to a server.';
      form.reset();
    });
  });

  const lightbox = document.querySelector('[data-lightbox-dialog]');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxLinks = [...document.querySelectorAll('[data-lightbox]')];
  let currentImage = -1;

  function openLightbox(index) {
    if (!lightbox || !lightboxImage || !lightboxLinks.length) return;
    currentImage = (index + lightboxLinks.length) % lightboxLinks.length;
    const link = lightboxLinks[currentImage];
    const image = link.querySelector('img');
    lightboxImage.src = link.href;
    lightboxImage.alt = image?.alt || 'Yoga class gallery image';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('[data-lightbox-close]')?.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  lightboxLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(index);
    });
  });

  lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => openLightbox(currentImage - 1));
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => openLightbox(currentImage + 1));
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('open')) return;
    if (event.key === 'ArrowLeft') openLightbox(currentImage - 1);
    if (event.key === 'ArrowRight') openLightbox(currentImage + 1);
  });
})();
