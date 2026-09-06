// shift the background clay blobs' color to match whichever shelf is in view
const blobs = [document.getElementById('blobA'), document.getElementById('blobB'), document.getElementById('blobC')];
const shelves = document.querySelectorAll('.shelf[data-tint]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const tint = entry.target.getAttribute('data-tint');
      blobs.forEach((b) => { if (b) b.style.background = tint; });
    }
  });
}, { threshold: 0.35 });

shelves.forEach((s) => observer.observe(s));

// save / wishlist toggle
document.querySelectorAll('.btn-save').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('saved');
  });
});

// order modal
const backdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.btn-order').forEach((btn) => {
  btn.addEventListener('click', () => {
    const productName = btn.getAttribute('data-product');
    modalTitle.textContent = 'Order ' + productName;
    backdrop.classList.add('open');
  });
});

modalClose.addEventListener('click', () => backdrop.classList.remove('open'));
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) backdrop.classList.remove('open');
});
