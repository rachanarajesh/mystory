
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

const contactButton =
  document.querySelector(".contact-toggle");

const heroContactButton =
  document.querySelector(
    ".hero-contact-trigger"
  );

const contactModal =
  document.querySelector(
    ".contact-modal-backdrop"
  );

const closeButton =
  document.querySelector(
    ".modal-close"
  );

function openContactModal() {

  contactModal.classList.add("open");

  contactModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}

function closeContactModal() {

  contactModal.classList.remove(
    "open"
  );

  contactModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}

contactButton.addEventListener(
  "click",
  openContactModal
);

if (heroContactButton) {

  heroContactButton.addEventListener(
    "click",
    openContactModal
  );
}

closeButton.addEventListener(
  "click",
  closeContactModal
);

contactModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      contactModal
    ) {
      closeContactModal();
    }

  }
);

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeContactModal();

    }

  }
);

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
