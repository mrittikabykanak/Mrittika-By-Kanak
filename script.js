// assign each product a stable id (its position in the array) so the hover
// pop-out can look products up reliably even when names repeat
PRODUCTS.forEach((p, i) => { p.id = i; });

function buildPreviewMarkup(product) {
  const hasVideo = !!product.video;
  const images = product.images && product.images.length ? product.images : null;

  const slidesHtml = images
    ? images.map((src) => `<div class="preview-slide"><img src="${src}" alt="${product.name}" /></div>`).join("")
    : `<div class="preview-slide preview-slide-placeholder"><span>📷</span><p>Photos coming soon</p></div>`;

  const videoHtml = hasVideo
    ? `<div class="preview-video"><video src="${product.video}" muted loop playsinline></video></div>`
    : "";

  return `
    <div class="preview-pop ${hasVideo ? "" : "no-video"}">
      <div class="preview-images">${slidesHtml}</div>
      ${videoHtml}
    </div>
  `;
}

  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getCategoryMeta(category) {
  return CATEGORY_META[category] || DEFAULT_CATEGORY_META;
}

// group products by category, preserving the order categories first appear in
function groupByCategory(products) {
  const order = [];
  const groups = {};
  products.forEach((p) => {
    if (!groups[p.category]) {
      groups[p.category] = [];
      order.push(p.category);
    }
    groups[p.category].push(p);
  });
  return order.map((category) => ({ category, items: groups[category] }));
}

const categoryGroups = groupByCategory(PRODUCTS);

// ---- build nav links ----
const navLinks = document.getElementById("navLinks");
categoryGroups.forEach(({ category }) => {
  const a = document.createElement("a");
  a.href = "#" + slugify(category);
  a.textContent = category;
  navLinks.appendChild(a);
});

// ---- build category chips ----
const chipRow = document.getElementById("chipRow");
categoryGroups.forEach(({ category }) => {
  const meta = getCategoryMeta(category);
  const a = document.createElement("a");
  a.href = "#" + slugify(category);
  a.className = "chip";
  a.textContent = category;
  a.style.background = meta.chipBg;
  a.style.color = meta.chipText;
  chipRow.appendChild(a);
});

// ---- build product shelves ----
const catalogue = document.getElementById("catalogue");
categoryGroups.forEach(({ category, items }) => {
  const meta = getCategoryMeta(category);
  const slug = slugify(category);

  const section = document.createElement("section");
  section.className = "shelf";
  section.id = slug;
  section.dataset.tint = meta.chipBg;

  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const heading = document.createElement("h2");
  heading.textContent = category;
  wrap.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "grid";

  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="thumb-wrap">
        <div class="thumb" style="background:${meta.thumbBg}">
          <span style="font-size:36px;">${meta.emoji}</span>
        </div>
        ${buildPreviewMarkup(product)}
      </div>
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <div class="card-actions">
        <button class="btn-save" aria-label="Save ${product.name}" data-product="${product.name}">♥</button>
        <button class="btn-order" data-product="${product.name}" style="background:${meta.accent}">Request order</button>
      </div>
    `;
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  section.appendChild(wrap);
  catalogue.appendChild(section);
});

// ---- play/pause preview videos only while hovering that card ----
document.querySelectorAll(".card").forEach((card) => {
  const video = card.querySelector(".preview-video video");
  if (!video) return;
  card.addEventListener("mouseenter", () => { video.currentTime = 0; video.play().catch(() => {}); });
  card.addEventListener("mouseleave", () => { video.pause(); });
});

// ---- background clay blobs shift color to match the shelf in view ----
const blobs = [document.getElementById("blobA"), document.getElementById("blobB"), document.getElementById("blobC")];
const shelves = document.querySelectorAll(".shelf[data-tint]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const tint = entry.target.getAttribute("data-tint");
      blobs.forEach((b) => { if (b) b.style.background = tint; });
    }
  });
}, { threshold: 0.35 });

shelves.forEach((s) => observer.observe(s));

// ---- save / wishlist toggle (event delegation, works for dynamically added cards) ----
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-save")) {
    e.target.classList.toggle("saved");
  }
});

// ---- order modal ----
const backdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-order")) {
    const productName = e.target.getAttribute("data-product");
    modalTitle.textContent = "Order " + productName;
    backdrop.classList.add("open");
  }
});

modalClose.addEventListener("click", () => backdrop.classList.remove("open"));
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) backdrop.classList.remove("open");
});
