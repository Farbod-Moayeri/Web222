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
    id: "A1",
    title: "T-Rex Plushie",
    description: "A green T-Rex Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1299,
    discontinued: false,
    categories: ["z1"]
  },
  {
    id: "A2",
    title: "Triceratops Plushie",
    description: "A green triceratops Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1399,
    discontinued: false,
    categories: ["z1"]
  },
  {
    id: "A3",
    title: "Pterodactyl Plushie",
    description: "A purple Pterodactyl Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1099,
    discontinued: false,
    categories: ["z1"]
  },
  {
    id: "A4",
    title: "Velociraptor Plushie",
    description: "A green Velociraptor Plushie. Perfect way to introduce dinosaurs to children.",
    price: 999,
    discontinued: false,
    categories: ["z1"]
  },
  {
    id: "A5",
    title: "Stegosaurus Plushie",
    description:
      "A brown and green Stegosaurus Plushie. Perfect way to introduce dinosaurs to children.",
    price: 1599,
    discontinued: false,
    categories: ["z1"]
  },
  // MAMMALS ------------------------------------------------------------------------------------------------------------------
  {
    id: "B1",
    title: "Dolphin Plushie",
    description: "A brown monkey Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["z2"]
  },
  {
    id: "B2",
    title: "Elephant Plushie",
    description: "A grey elephant Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["z2"]
  },
  {
    id: "B3",
    title: "Wolf Plushie",
    description: "A grey wolf Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["z2"]
  },
  {
    id: "B4",
    title: "Lion Plushie",
    description: "A yellowish lion Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["z2"]
  },
  {
    id: "B5",
    title: "Giraffe Plushie",
    description: "A yellowish giraffe Plushie. Perfect way to introduce mammals to children.",
    price: 1399,
    discontinued: false,
    categories: ["z2"]
  },
  // AQUATIC --------------------------------------------------------------------------------------
  {
    id: "C1",
    title: "Dolphin Plushie",
    description: "A blue dolphin Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["z3"]
  },
  {
    id: "C2",
    title: "Shark Plushie",
    description: "A white shark Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["z3"]
  },
  {
    id: "C3",
    title: "Jellyfish Plushie",
    description: "A blue jellyfish Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["z3"]
  },
  {
    id: "C4",
    title: "Whale Plushie",
    description: "A blue whale Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["z3"]
  },
  {
    id: "C5",
    title: "Goldfish Plushie",
    description: "An orange goldfish Plushie. Perfect way to introduce aquatic life to children.",
    price: 1399,
    discontinued: false,
    categories: ["z3"]
  }
];
