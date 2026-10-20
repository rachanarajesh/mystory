
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const contactToggle = document.querySelector('.contact-toggle');
const contactMenu = document.querySelector('.contact-menu');

function closeContactMenu() {
  contactMenu.classList.remove('open');
  contactToggle.setAttribute('aria-expanded', 'false');
}

contactToggle.addEventListener('click', e => {
  e.stopPropagation();
  const open = contactMenu.classList.toggle('open');
  contactToggle.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', e => {
  if (!e.target.closest('.contact-menu-wrap')) closeContactMenu();
});

const modalBackdrop = document.querySelector('.contact-modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const heroContact = document.querySelector('.hero-contact-trigger');

function openModal() {
  modalBackdrop.classList.add('open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

heroContact.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeContactMenu();
  }
});
