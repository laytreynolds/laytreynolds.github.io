// Progressive enhancement only: every piece of content works without this file.

// Copy email address
const canCopy = !!(navigator.clipboard && window.isSecureContext);

document.querySelectorAll('.copy').forEach(btn => {
  if (!canCopy) return;
  btn.hidden = false;
  const status = btn.parentElement.querySelector('.copy-status');
  let timer;

  btn.addEventListener('click', async () => {
    clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      status.textContent = 'Copied to clipboard';
    } catch {
      status.textContent = "Couldn't copy. Select the address and copy it instead.";
    }
    timer = setTimeout(() => { status.textContent = ''; }, 4000);
  });
});

// Keep the current role's segment of the career bar true to today's date
const devSeg = document.querySelector('.seg-dev');
if (devSeg) {
  const now = new Date();
  const months = (now.getFullYear() - 2025) * 12 + (now.getMonth() - 3) + 1;
  if (months > 0) devSeg.style.setProperty('--m', months);
}

// Mark the section currently in view in the nav
const navLinks = new Map(
  [...document.querySelectorAll('.nav-links a')].map(a => [a.hash.slice(1), a])
);

function setCurrent(id) {
  navLinks.forEach((a, key) => {
    if (key === id) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setCurrent(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  ['top', 'experience', 'projects', 'stack', 'education'].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // The contact band is short, so mark it whenever the page is scrolled to the end
  window.addEventListener('scroll', () => {
    const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atEnd) setCurrent('contact');
  }, { passive: true });
}
