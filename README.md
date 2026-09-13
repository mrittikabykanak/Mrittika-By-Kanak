# Mrittika by Kanak — website

A static, no-build website for a handmade clay art gifting brand.

## Files
- `index.html` — page structure (header, hero, about, and empty containers that
  get filled in automatically)
- `products.js` — **all product data lives here.** Add, edit, or remove products
  by editing this one file.
- `style.css` — peppy page background, clay blob animation, layout, colors
- `script.js` — reads `products.js` and builds the nav links, category chips,
  and product shelves automatically; also handles the scroll-linked blob color
  shift, save toggle, and order popup

## Adding or updating products
Open `products.js`. Each product is one entry in the `PRODUCTS` array:
```js
{ name: "Cherry Charm", category: "Phone/Bag Charms", price: 149, images: [], video: null },
```
- To **add a product**, copy an entry and change the name, category, and price.
- To **change a price or name**, just edit that entry directly.
- To **add a brand-new category**, just use a category name that doesn't exist
  yet — the website will automatically create a new shelf, nav link, and chip
  for it (using a neutral default color). If you want that new category to have
  its own color and emoji instead of the default, add an entry for it in the
  `CATEGORY_META` object further down in the same file.

No other file needs to change when you add products — `index.html` and
`script.js` will always reflect whatever is in `products.js`.

## Hovering over a product shows photos (and a making-video, if you have one)
Hovering over any product's thumbnail pops out a small preview: photos scroll
on one side, and a video of it being made plays on the other side — if a
video exists for that product. If there's no video yet, the photos simply
take up the full width of the pop-out instead. If there are no photos yet
either, a "Photos coming soon" placeholder shows instead — nothing breaks.

**To add media for a product:**
1. Create two folders next to `index.html`: `images/` and `videos/`.
2. Drop the relevant files in, ideally named after the product, e.g.
   `images/cherry-charm-1.jpg`, `images/cherry-charm-2.jpg`,
   `videos/cherry-charm.mp4`.
3. In `products.js`, update that product's entry:
   ```js
   { name: "Cherry Charm", category: "Phone/Bag Charms", price: 149,
     images: ["images/cherry-charm-1.jpg", "images/cherry-charm-2.jpg"],
     video: "videos/cherry-charm.mp4" },
   ```
   - `images` can hold as many photos as you like — they'll all scroll in the
     pop-out.
   - `video` is optional — leave it as `null` if there isn't one for that
     product yet.

## Before going live
1. Add real photos (and videos, where available) for each product as
   described above — until then, the emoji + "coming soon" placeholders will
   show instead.
2. **Set the real per-product order links.** The "Request order" buttons all
   open the same modal linking to the Meesho, Instagram and WhatsApp homepages
   (see the `.modal-option` links in `index.html`). Once each product has a live
   listing, either point these to your general storefronts, or extend
   `products.js`/`script.js` to store a real link per product.

## Running it locally
No build step needed — just open `index.html` in a browser.

## Pushing to GitHub
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Hosting for free with GitHub Pages
1. Push the repo to GitHub (above).
2. In the repo, go to **Settings > Pages**.
3. Under "Build and deployment", set the source branch to `main` and folder to `/root`.
4. Save — GitHub will give you a live URL like `https://yourusername.github.io/repo-name`
   within a minute or two.
