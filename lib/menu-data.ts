export const categories = [
  { id: 'starters', name: 'Starters', icon: '🍹' },
  { id: 'mains', name: 'Main Courses', icon: '🍽️' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'drinks', name: 'Drinks', icon: '🥂' },
]

export const menuItems = [
  {
    id: 1,
    name: "Levitating Molecular Spheres",
    description: "Nitrogen-frozen berry spheres with vanilla cloud and edible gold dust that appear to float above the plate through magnetic levitation.",
    price: 18,
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    isSpecial: true,
    isVegan: true,
    ingredients: ["Mixed berries", "Liquid nitrogen", "Vanilla essence", "Gold leaf", "Magnetic base"]
  },
  {
    id: 2,
    name: "Neon Sashimi Fusion",
    description: "Premium tuna sashimi served with bioluminescent algae sauce and micro herb garnish that glows under UV light.",
    price: 24,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "starters",
    spicyLevel: 1,
    ingredients: ["Bluefin tuna", "Bioluminescent algae", "Micro herbs", "Ponzu sauce", "Black salt"]
  },
  {
    id: 3,
    name: "Plasma-Infused Cocktail",
    description: "Color-changing spirits with aromatic smoke and frozen fruit crystals that transform as they melt.",
    price: 16,
    image: "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "drinks",
    ingredients: ["Butterfly pea flower-infused gin", "Citrus elements", "Aromatic bitters", "Liquid nitrogen", "Edible flowers"]
  },
  {
    id: 4,
    name: "Holographic Tartare Tower",
    description: "Wagyu beef tartare with projected holographic seasonings and textures that change with each bite.",
    price: 32,
    image: "https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "starters",
    spicyLevel: 2,
    ingredients: ["Wagyu beef", "Truffle oil", "Quail egg", "Micro greens", "Special holographic projection"]
  },
  {
    id: 5,
    name: "Nebula Cloud Risotto",
    description: "Squid ink risotto with seafood medley, surrounded by aromatic seafood broth mist created tableside.",
    price: 36,
    image: "https://images.pexels.com/photos/15016558/pexels-photo-15016558/free-photo-of-seafood-risotto-with-prawns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mains",
    isSpecial: true,
    ingredients: ["Arborio rice", "Squid ink", "Scallops", "Prawns", "Dry ice", "Seafood broth"]
  },
  {
    id: 6,
    name: "Quantum Field Filet",
    description: "Perfectly aged beef filet with molecular gastronomy accompaniments and elements that represent quantum particles.",
    price: 45,
    image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mains",
    spicyLevel: 1,
    ingredients: ["Aged beef filet", "Truffle butter", "Molecular caviar", "Edible soil", "Smoke infusion"]
  },
  {
    id: 7,
    name: "Aurora Borealis Gelato",
    description: "Changing-color gelato infused with edible luminescence that mimics the northern lights as it melts.",
    price: 14,
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    isVegan: true,
    ingredients: ["Coconut cream", "Natural color-changing extracts", "Edible luminescence", "Fruit essences"]
  },
  {
    id: 8,
    name: "Zero Gravity Champagne",
    description: "Premium champagne served with levitating molecular fruit caviar that floats in your glass.",
    price: 28,
    image: "https://images.pexels.com/photos/3491579/pexels-photo-3491579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "drinks",
    ingredients: ["Vintage champagne", "Molecular fruit caviar", "Gold flakes", "Dry ice elements"]
  },
  {
    id: 9,
    name: "Biometric Wellness Elixir",
    description: "Custom health-optimized beverage created based on your mood, with adaptogenic herbs and probiotics.",
    price: 15,
    image: "https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "drinks",
    isVegan: true,
    ingredients: ["Adaptogenic herbs", "Cold-pressed fruits", "Probiotics", "Electrolyte minerals", "Custom wellness blend"]
  },
  {
    id: 10,
    name: "Teleportation Torte",
    description: "Multi-layered chocolate experience with temperature and texture contrasts that transport your palate across dimensions.",
    price: 19,
    image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    ingredients: ["Valrhona chocolate varieties", "Liquid nitrogen cream", "Hot chocolate center", "Edible gold", "Dehydrated fruit crisps"]
  },
  {
    id: 11,
    name: "Photosynthesis Salad",
    description: "Living microgreen salad that continues to grow at your table under specialized lighting, with interactive dressing spheres.",
    price: 22,
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "starters",
    isVegan: true,
    ingredients: ["Living microgreens", "Heirloom vegetables", "Molecular dressing spheres", "Edible flowers", "Specialized growing medium"]
  },
  {
    id: 12,
    name: "Sonic-Enhanced Soup",
    description: "Vibration-infused broth with suspended ingredients that change position and flavor based on sound frequencies played tableside.",
    price: 20,
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "starters",
    ingredients: ["Clarified consommé", "Suspended vegetable cubes", "Herb-infused oils", "Sound vibration device", "Aromatic vapors"]
  }
]