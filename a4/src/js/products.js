/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  // DINOSAURS ------------------------------------------------------------------------------------
  {
    id: "D1",
    title: "T-Rex Plushie",
    description: "A green T-Rex Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1299,
    discontinued: false,
    categories: ["Dino"]
  },
  {
    id: "D2",
    title: "Triceratops Plushie",
    description: "A green triceratops Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1399,
    discontinued: false,
    categories: ["Dino"]
  },
  {
    id: "D3",
    title: "Pterodactyl Plushie",
    description: "A purple Pterodactyl Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1099,
    discontinued: false,
    categories: ["Dino"]
  },
  {
    id: "D4",
    title: "Velociraptor Plushie",
    description: "A green Velociraptor Plushie. Perfect way to introduce dinosaurs to children.",
    price: 999,
    discontinued: false,
    categories: ["Dino"]
  },
  {
    id: "D5",
    title: "Stegosaurus Plushie",
    description:
      "A brown and green Stegosaurus Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1599,
    discontinued: false,
    categories: ["Dino"]
  },
  // MAMMALS ------------------------------------------------------------------------------------------------------------------
  {
    id: "M1",
    title: "Monkey Plushie",
    description: "A brown monkey Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["Mamma"]
  },
  {
    id: "M2",
    title: "Elephant Plushie",
    description: "An elephant plushie. This plushies trunk is both extendable and moldable, meaning more fun for everyone.",
    price: 1399,
    discontinued: false,
    categories: ["Mamma"]
  },
  {
    id: "M3",
    title: "Wolf Plushie",
    description: "A wolf plushie. Wolves live in packs so if you buy 4, you get the next 4 for free.",
    price: 1399,
    discontinued: false,
    categories: ["Mamma"]
  },
  {
    id: "M4",
    title: "Lion Plushie",
    description: "A lion plushie. A soft mane guarantees that children and adults alike will fall in love with this fearsome creature.",
    price: 1399,
    discontinued: false,
    categories: ["Mamma"]
  },
  {
    id: "M5",
    title: "Giraffe Plushie",
    description: "A giraffe Plushie. The british fabricated the existence of giraffes to brag about hunting a 20 foot tall creature.",
    price: 1399,
    discontinued: true,
    categories: ["Mamma"]
  },
  {
    id: "M6",
    title: "Hamster Plushie",
    description: "A hamster plushie. Child whining for a pet hamster? Not willing to clean up after it? This is the next best thing.",
    price: 1399,
    discontinued: true,
    categories: ["Mamma"]
  },
  // AQUATIC --------------------------------------------------------------------------------------
  {
    id: "A1",
    title: "Dolphin Plushie",
    description: "A blue dolphin Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["Aqua"]
  },
  {
    id: "A2",
    title: "Shark Plushie",
    description: "A white shark Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["Aqua"]
  },
  {
    id: "A3",
    title: "Jellyfish Plushie",
    description: "A blue jellyfish Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["Aqua"]
  },
  {
    id: "A4",
    title: "Whale Plushie",
    description: "A blue whale Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["Aqua"]
  },
  {
    id: "A5",
    title: "Goldfish Plushie",
    description: "An orange goldfish Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: true,
    categories: ["Aqua"]
  }
];
