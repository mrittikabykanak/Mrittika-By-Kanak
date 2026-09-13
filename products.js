// ---- PRODUCT DATA ----
// To add a new product, just add a new object to this array.
// "category" controls which shelf it appears under — if you use a category
// name that doesn't exist yet, the site will automatically create a new
// shelf, nav link and chip for it (using a neutral default color).
//
// "images": an array of image file paths for that product (used in the
//   hover pop-out photo scroller). Leave empty [] until photos are ready —
//   the site will show a placeholder instead, nothing breaks.
// "video": a single video file path showing the product being made, or
//   null if there isn't one yet. The pop-out only shows a video pane when
//   this is set — otherwise the photo scroller simply takes the full width.
const PRODUCTS = [
  { name: "Kitty Fridge Magnets (Pack of 3)", category: "Fridge Magnet", price: 400, images: [], video: null },
  { name: "Floral Fridge Magnet", category: "Fridge Magnet", price: 300, images: [], video: null },
  { name: "Floral Bookmarks (Pack of 3)", category: "Bookmarks", price: 500, images: [], video: null },
  { name: "UK Telephone Booth", category: "Office Desk buddy", price: 1000, images: [], video: null },
  { name: "Batpanda Bobble Head", category: "Office Desk buddy", price: 600, images: [], video: null },
  { name: "Fairy Incense Burner", category: "Office Desk buddy", price: 700, images: [], video: null },
  { name: "Miniature Gas Stove", category: "Clay Toys for kids", price: 500, images: [], video: null },
  { name: "Miniature Pressure Cooker", category: "Clay Toys for kids", price: 500, images: ["images/miniature-pressure-cooker-1.jpg", "images/miniature-pressure-cooker-2.jpg"], video: "videos/miniature-pressure-cooker.mp4" },
  { name: "NASA Astronaut", category: "Office Desk buddy", price: 500, images: [], video: null },
  { name: "Dices Set (Pack of 2)", category: "Phone/Bag Charms", price: 200, images: [], video: null },
  { name: "Cute Hanging Monkey", category: "Fridge Magnet", price: 200, images: [], video: null },
  { name: "Baby Groot", category: "Office Desk buddy", price: 500, images: [], video: null },
  { name: "Bat Logo", category: "Office Desk buddy", price: 300, images: [], video: null },
  { name: "80's Miniature Television", category: "Office Desk buddy", price: 700, images: [], video: null },
  { name: "Bat Logo", category: "Phone/Bag Charms", price: 200, images: [], video: null },
];

// ---- CATEGORY STYLING ----
// Optional: pre-set colors and an emoji placeholder for each category.
// Any category not listed here will fall back to DEFAULT_CATEGORY_META below.
const CATEGORY_META = {
  "Fridge Magnet": { emoji: "🧲", thumbBg: "#FAECE7", accent: "#D85A30", chipBg: "#F5C4B3", chipText: "#4A1B0C" },
  "Bookmarks": { emoji: "🔖", thumbBg: "#E1F5EE", accent: "#0F6E56", chipBg: "#9FE1CB", chipText: "#04342C" },
  "Office Desk buddy": { emoji: "🎎", thumbBg: "#EEEDFE", accent: "#534AB7", chipBg: "#CECBF6", chipText: "#26215C" },
  "Clay Toys for kids": { emoji: "🧸", thumbBg: "#FAEEDA", accent: "#854F0B", chipBg: "#FAC775", chipText: "#412402" },
  "Phone/Bag Charms": { emoji: "🔑", thumbBg: "#FBEAF0", accent: "#993556", chipBg: "#F4C0D1", chipText: "#4B1528" },
};

const DEFAULT_CATEGORY_META = {
  emoji: "🎁", thumbBg: "#F1EFE6", accent: "#7A6A4F", chipBg: "#E7E2D2", chipText: "#3B331F",
};
