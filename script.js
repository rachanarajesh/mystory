'use strict';

// Add verified public URLs here. Unconfigured links remain hidden.
const portfolioLinks = Object.freeze({
  credential: '',
  publication: ''
});

document.documentElement.classList.add('js');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const navigation = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.nav-toggle');
function closeNavigation() {
  navigation?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}
if (navigation && navToggle) {
  navToggle.hidden = false;
  navToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeNavigation();
      navToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav')) closeNavigation();
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeNavigation);
}

// Use IDs rather than treating an arbitrary fragment as a CSS selector.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    let target;
    try {
      target = document.getElementById(decodeURIComponent(href.slice(1)));
    } catch {
      return;
    }
    if (!target) return;
    event.preventDefault();
    closeNavigation();
    // A real focus target preserves keyboard navigation after scrolling.
    const hadTabIndex = target.hasAttribute('tabindex');
    if (!hadTabIndex) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    history.pushState(null, '', href);
  });
});

// Native dialog handles focus containment and Escape. One handler per action.
const contactDialog = document.querySelector('#contact-dialog');
let contactOpener = null;
let previousOverflow = '';
if (contactDialog && typeof contactDialog.showModal === 'function') {
  document.querySelectorAll('[data-open-contact]').forEach(trigger => {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', contactDialog.id);
    trigger.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (contactDialog.open) return;
      contactOpener = trigger;
      previousOverflow = document.body.style.overflow;
      contactDialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  contactDialog.querySelector('.modal-close')?.addEventListener('click', () => contactDialog.close());
  let pointerStartedOnBackdrop = false;
  contactDialog.addEventListener('pointerdown', event => {
    pointerStartedOnBackdrop = event.target === contactDialog;
  });
  contactDialog.addEventListener('click', event => {
    if (event.target === contactDialog && pointerStartedOnBackdrop) contactDialog.close();
    pointerStartedOnBackdrop = false;
  });
  contactDialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    contactOpener?.focus({ preventScroll: true });
    contactOpener = null;
  });
}

for (const [name, value] of Object.entries(portfolioLinks)) {
  if (!value) continue;
  let url;
  try { url = new URL(value); } catch { continue; }
  if (url.protocol !== 'https:') continue;
  document.querySelectorAll(`[data-resource="${name}"]`).forEach(link => {
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.hidden = false;
  });
}

const year = document.querySelector('#copyright-year');
if (year) year.textContent = String(new Date().getFullYear());

// Mark the section currently at the reading position without changing history.
if ('IntersectionObserver' in window && navigation) {
  const visibleSections = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visibleSections.set(entry.target.id, entry.isIntersecting));
    const current = [...visibleSections].find(([, visible]) => visible)?.[0];
    if (!current) return;
    navigation.querySelectorAll('a').forEach(link => {
      if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
