# Clay & Co. — website

A static, no-build website for a handmade clay art gifting brand: fridge magnets,
desk buddies, keepsakes, bag charms, and collectibles.

## Files
- `index.html` — page structure and all product cards
- `style.css` — peppy page background, clay blob animation, layout, colors
- `script.js` — scroll-linked blob color shift, save toggle, order popup

## Before going live
1. **Replace placeholder icons with real photos.** Every product currently uses a
   simple SVG shape in `index.html` (inside `<div class="thumb">`) — swap these for
   `<img>` tags pointing to real product photography.
2. **Set the real per-product order links.** In `index.html`, the "Request order"
   buttons all open the same generic modal linking to the Meesho, Instagram and
   WhatsApp homepages (in `index.html`, look for `.modal-option` links). Once each
   product has its own live listing, either:
   - give each `.btn-order` a `data-meesho`, `data-insta`, `data-wa` attribute with
     that product's real URL, and update `script.js` to read those into the modal
     links, or
   - keep it simple and just point all three modal links to your storefront pages
     if you don't want per-product deep links yet.
3. **Update prices and copy** in `index.html` to match actual pricing.

## Running it locally
No build step needed — just open `index.html` in a browser. For live-reload while
editing, you can also run a tiny local server, e.g. with Python:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

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
