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
  // DINOSAURS ------------------------------------------------------------------------------------
  {
    id: "D1",
    title: "T-Rex Plushie",
    description:
      "A green T-Rex Plushie. It's tail and feet have internal support so the T-rex can stand on its own without support. It is a proud and mighty Dino.",
    price: 1299,
    discontinued: false,
    categories: ["Dino"],
    imageUrl: "images/Dino/Green-Angry.jpg"
  },
  {
    id: "D2",
    title: "Triceratops Plushie",
    description:
      "A green triceratops Plushie. Its horns squeak when you squeeze them but they are as soft as the rest of this plushie.",
    price: 1399,
    discontinued: false,
    categories: ["Dino"],
    imageUrl: "images/Dino/triceratops.jpg"

  },
  {
    id: "D3",
    title: "Pterodactyl Plushie",
    description:
      "A purple Pterodactyl Plushie. It is made so it glides when thrown. Guaranteed to be a delight to children.",
    price: 1099,
    discontinued: false,
    categories: ["Dino"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "D4",
    title: "Velociraptor Plushie",
    description:
      "A green Velociraptor Plushie. The velociraptor makes a dinosaur noise when squeezed, and its pitch changes depending on where it is squeezed.",
    price: 999,
    discontinued: false,
    categories: ["Dino"],
    imageUrl: "images/Dino/velociraptor.jpg"
  },
  {
    id: "D5",
    title: "Stegosaurus Plushie",
    description:
      "A brown and green Stegosaurus Plushie. The spines on its back is soft and feels incredible to touch.",
    price: 1599,
    discontinued: false,
    categories: ["Dino"],
    imageUrl: "images/Dino/Orange-Happy.jpg"
  },
  // MAMMALS ------------------------------------------------------------------------------------------------------------------
  {
    id: "M1",
    title: "Monkey Plushie",
    description:
      "A brown monkey Plushie. It makes a monkey noise when a button that is hidden inside the chest of the plushie is pressed. It takes deliberate force to push the button so the noise will not occur is the plushie is held tightly.",
    price: 1799,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Mamma/monkey.jpg"
  },
  {
    id: "M2",
    title: "Elephant Plushie",
    description:
      "An elephant plushie. This plushies trunk is both extendable and moldable, meaning more fun for everyone.",
    price: 1599,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M3",
    title: "Wolf Plushie",
    description:
      "A wolf plushie. Wolves live in packs so if you buy 4, you get the next 4 for free.",
    price: 999,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M4",
    title: "Lion Plushie",
    description:
      "A lion plushie. A soft mane guarantees that children and adults alike will fall in love with this fearsome creature.",
    price: 1299,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M5",
    title: "Giraffe Plushie",
    description:
      "A giraffe Plushie. The british fabricated the existence of giraffes to brag about hunting a 20 foot tall creature.",
    price: 1099,
    discontinued: true,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M6",
    title: "Hamster Plushie",
    description:
      "A hamster plushie. Child whining for a pet hamster? Not willing to clean up after it? This is the next best thing.",
    price: 899,
    discontinued: true,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M7",
    title: "Gorilla Plushie",
    description:
      "A gorilla plushie. This gorilla spins around and around if you tap it on its head. Do not attempt to sleep beside it.",
    price: 1599,
    discontinued: true,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M8",
    title: "Pig Plushie",
    description:
      "A pig plushie. The pig oinks if you tap its nose three times. Perfect for teaching children about farm animals.",
    price: 1499,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "M9",
    title: "Bunny Plushie",
    description:
      "A bunny plushie. This plushie jumps up a foot if both ears are held up for three seconds.",
    price: 1199,
    discontinued: false,
    categories: ["Mamma"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  // AQUATIC --------------------------------------------------------------------------------------
  {
    id: "A1",
    title: "Dolphin Plushie",
    description:
      "A blue dolphin Plushie. Has a motor in its tail that stimulates the swimming of a dolphin. Do not submerge in water.",
    price: 1399,
    discontinued: false,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "A2",
    title: "Shark Plushie",
    description:
      "A white shark Plushie. Sings baby shark when shake'd three times in quick succession.",
    price: 1299,
    discontinued: false,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "A3",
    title: "Jellyfish Plushie",
    description:
      "A blue jellyfish Plushie. This jellyfish plushie can float for some time due to there being trapped helium inside of it. A delight for the eyes.",
    price: 1199,
    discontinued: false,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "A4",
    title: "Whale Plushie",
    description:
      "A blue whale Plushie. Make an inaudible whale noise when held. The pitch increases the longer it is held so you eventually can hear its gentle cries.",
    price: 1499,
    discontinued: false,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "A5",
    title: "Goldfish Plushie",
    description:
      "An orange goldfish Plushie. Tired of buying goldfish for your children only for the fish to be flushed down the toilet a couple days later? Fear not, the goldfish plushie is here.",
    price: 999,
    discontinued: true,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  },
  {
    id: "A6",
    title: "Electric Eel Plushie",
    description:
      "An electric eel Plushie. It vibrates when touched and the vibrations get stronger the longer it is touched.",
    price: 2099,
    discontinued: false,
    categories: ["Aqua"],
    imageUrl: "images/Dino/Grey-Tall.jpg"
  }
];
