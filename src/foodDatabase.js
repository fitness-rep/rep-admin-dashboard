// COMPREHENSIVE FOOD DATABASE WITH ACCURATE PER-100G MACRO VALUES

// Helper function to generate unique food ID
export const generateFoodId = (name) => {
  return `${name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`;
};

// MEATS (per 100g)
export const meats = [
  {
    name: "Chicken Breast (Raw)",
    category: "meats",
    protein: 23.0, // 23g per 100g
    carbs: 0.0,
    fats: 3.0,
    fiber: 0.0,
    calories: 165,
    unit: "g"
  },
  {
    name: "Chicken Breast (Cooked)",
    category: "meats",
    protein: 31.0,
    carbs: 0.0,
    fats: 4.0,
    fiber: 0.0,
    calories: 165,
    unit: "g"
  },
  {
    name: "Ground Beef (85% Lean)",
    category: "meats",
    protein: 26.0,
    carbs: 0.0,
    fats: 15.0,
    fiber: 0.0,
    calories: 250,
    unit: "g"
  },
  {
    name: "Ground Beef (95% Lean)",
    category: "meats",
    protein: 30.0,
    carbs: 0.0,
    fats: 5.0,
    fiber: 0.0,
    calories: 174,
    unit: "g"
  },
  {
    name: "Salmon (Raw)",
    category: "meats",
    protein: 20.0,
    carbs: 0.0,
    fats: 13.0,
    fiber: 0.0,
    calories: 208,
    unit: "g"
  },
  {
    name: "Tuna (Raw)",
    category: "meats",
    protein: 23.0,
    carbs: 0.0,
    fats: 1.0,
    fiber: 0.0,
    calories: 144,
    unit: "g"
  },
  {
    name: "Cod (Raw)",
    category: "meats",
    protein: 18.0,
    carbs: 0.0,
    fats: 1.0,
    fiber: 0.0,
    calories: 82,
    unit: "g"
  },
  {
    name: "Shrimp (Raw)",
    category: "meats",
    protein: 20.0,
    carbs: 1.0,
    fats: 1.0,
    fiber: 0.0,
    calories: 99,
    unit: "g"
  }
];

// POULTRY (per 100g)
export const poultry = [
  {
    name: "Turkey Breast (Raw)",
    category: "poultry",
    protein: 22.0,
    carbs: 0.0,
    fats: 2.0,
    fiber: 0.0,
    calories: 135,
    unit: "g"
  },
  {
    name: "Turkey Breast (Cooked)",
    category: "poultry",
    protein: 29.0,
    carbs: 0.0,
    fats: 3.0,
    fiber: 0.0,
    calories: 189,
    unit: "g"
  },
  {
    name: "Egg (Whole)",
    category: "poultry",
    protein: 13.0,
    carbs: 1.0,
    fats: 11.0,
    fiber: 0.0,
    calories: 155,
    unit: "g"
  },
  {
    name: "Egg White",
    category: "poultry",
    protein: 11.0,
    carbs: 1.0,
    fats: 0.0,
    fiber: 0.0,
    calories: 52,
    unit: "g"
  },
  {
    name: "Egg Yolk",
    category: "poultry",
    protein: 16.0,
    carbs: 1.0,
    fats: 27.0,
    fiber: 0.0,
    calories: 322,
    unit: "g"
  }
];

// FRUITS (per 100g)
export const fruits = [
  {
    name: "Apple",
    category: "fruits",
    protein: 0.0,
    carbs: 14.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 52,
    unit: "g"
  },
  {
    name: "Banana",
    category: "fruits",
    protein: 1.0,
    carbs: 23.0,
    fats: 0.0,
    fiber: 3.0,
    calories: 89,
    unit: "g"
  },
  {
    name: "Orange",
    category: "fruits",
    protein: 1.0,
    carbs: 12.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 47,
    unit: "g"
  },
  {
    name: "Strawberries",
    category: "fruits",
    protein: 1.0,
    carbs: 8.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 32,
    unit: "g"
  },
  {
    name: "Blueberries",
    category: "fruits",
    protein: 1.0,
    carbs: 14.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 57,
    unit: "g"
  },
  {
    name: "Grapes",
    category: "fruits",
    protein: 1.0,
    carbs: 18.0,
    fats: 0.0,
    fiber: 1.0,
    calories: 62,
    unit: "g"
  }
];

// VEGETABLES (per 100g)
export const vegetables = [
  {
    name: "Broccoli",
    category: "vegetables",
    protein: 3.0,
    carbs: 7.0,
    fats: 0.0,
    fiber: 3.0,
    calories: 34,
    unit: "g"
  },
  {
    name: "Spinach",
    category: "vegetables",
    protein: 3.0,
    carbs: 4.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 23,
    unit: "g"
  },
  {
    name: "Carrots",
    category: "vegetables",
    protein: 1.0,
    carbs: 10.0,
    fats: 0.0,
    fiber: 3.0,
    calories: 41,
    unit: "g"
  },
  {
    name: "Sweet Potato",
    category: "vegetables",
    protein: 2.0,
    carbs: 20.0,
    fats: 0.0,
    fiber: 3.0,
    calories: 86,
    unit: "g"
  },
  {
    name: "Cauliflower",
    category: "vegetables",
    protein: 2.0,
    carbs: 5.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 25,
    unit: "g"
  },
  {
    name: "Bell Pepper",
    category: "vegetables",
    protein: 1.0,
    carbs: 6.0,
    fats: 0.0,
    fiber: 2.0,
    calories: 20,
    unit: "g"
  }
];

// GRAINS (per 100g)
export const grains = [
  {
    name: "Oats (Raw)",
    category: "grains",
    protein: 17.0, // 17g per 100g
    carbs: 68.0,   // 68g per 100g
    fats: 7.0,     // 7g per 100g
    fiber: 10.0,   // 10g per 100g
    calories: 389, // 389 calories per 100g
    unit: "g"
  },
  {
    name: "Quinoa (Cooked)",
    category: "grains",
    protein: 4.0,
    carbs: 22.0,
    fats: 2.0,
    fiber: 3.0,
    calories: 120,
    unit: "g"
  },
  {
    name: "Whole Wheat Bread",
    category: "grains",
    protein: 13.0,
    carbs: 49.0,
    fats: 4.0,
    fiber: 7.0,
    calories: 247,
    unit: "g"
  },
  {
    name: "White Bread",
    category: "grains",
    protein: 9.0,
    carbs: 49.0,
    fats: 3.0,
    fiber: 3.0,
    calories: 265,
    unit: "g"
  },
  {
    name: "Pasta (Cooked)",
    category: "grains",
    protein: 5.0,
    carbs: 25.0,
    fats: 1.0,
    fiber: 1.0,
    calories: 131,
    unit: "g"
  },
  {
    name: "Brown Rice (Cooked)",
    category: "grains",
    protein: 3.0,
    carbs: 23.0,
    fats: 1.0,
    fiber: 2.0,
    calories: 111,
    unit: "g"
  }
];

// DAIRY (per 100g/ml)
export const dairy = [
  {
    name: "Whole Milk",
    category: "dairy",
    protein: 3.0,
    carbs: 5.0,
    fats: 4.0,
    fiber: 0.0,
    calories: 61,
    unit: "ml"
  },
  {
    name: "Skim Milk",
    category: "dairy",
    protein: 3.0,
    carbs: 5.0,
    fats: 0.0,
    fiber: 0.0,
    calories: 42,
    unit: "ml"
  },
  {
    name: "Greek Yogurt (Plain)",
    category: "dairy",
    protein: 10.0,
    carbs: 4.0,
    fats: 1.0,
    fiber: 0.0,
    calories: 59,
    unit: "g"
  },
  {
    name: "Cheddar Cheese",
    category: "dairy",
    protein: 25.0,
    carbs: 1.0,
    fats: 33.0,
    fiber: 0.0,
    calories: 403,
    unit: "g"
  },
  {
    name: "Cottage Cheese",
    category: "dairy",
    protein: 11.0,
    carbs: 3.0,
    fats: 4.0,
    fiber: 0.0,
    calories: 98,
    unit: "g"
  }
];

// NUTS & SEEDS (per 100g)
export const nuts_seeds = [
  {
    name: "Almonds",
    category: "nuts_seeds",
    protein: 21.0,
    carbs: 22.0,
    fats: 50.0,
    fiber: 12.0,
    calories: 579,
    unit: "g"
  },
  {
    name: "Peanuts",
    category: "nuts_seeds",
    protein: 26.0,
    carbs: 16.0,
    fats: 49.0,
    fiber: 9.0,
    calories: 567,
    unit: "g"
  },
  {
    name: "Walnuts",
    category: "nuts_seeds",
    protein: 15.0,
    carbs: 14.0,
    fats: 65.0,
    fiber: 7.0,
    calories: 654,
    unit: "g"
  },
  {
    name: "Chia Seeds",
    category: "nuts_seeds",
    protein: 17.0,
    carbs: 42.0,
    fats: 31.0,
    fiber: 34.0,
    calories: 486,
    unit: "g"
  },
  {
    name: "Flax Seeds",
    category: "nuts_seeds",
    protein: 18.0,
    carbs: 29.0,
    fats: 42.0,
    fiber: 27.0,
    calories: 534,
    unit: "g"
  }
];

// OTHER (per 100g)
export const other = [
  {
    name: "Olive Oil",
    category: "other",
    protein: 0.0,
    carbs: 0.0,
    fats: 100.0,
    fiber: 0.0,
    calories: 884,
    unit: "ml"
  },
  {
    name: "Honey",
    category: "other",
    protein: 0.0,
    carbs: 82.0,
    fats: 0.0,
    fiber: 0.0,
    calories: 304,
    unit: "g"
  },
  {
    name: "Protein Powder (Whey)",
    category: "other",
    protein: 80.0,
    carbs: 8.0,
    fats: 4.0,
    fiber: 0.0,
    calories: 375,
    unit: "g"
  },
  {
    name: "Peanut Butter",
    category: "other",
    protein: 25.0,
    carbs: 20.0,
    fats: 50.0,
    fiber: 6.0,
    calories: 588,
    unit: "g"
  }
];

// ADDITIONAL FOODS FOR COMPREHENSIVE MEALS (per 100g)
export const additionalFoods = [
  {
    name: "Avocado",
    category: "fruits",
    protein: 2.0,
    carbs: 9.0,
    fats: 15.0,
    fiber: 7.0,
    calories: 160,
    unit: "g"
  },
  {
    name: "Paneer",
    category: "dairy",
    protein: 18.0,
    carbs: 1.0,
    fats: 20.0,
    fiber: 0.0,
    calories: 265,
    unit: "g"
  },
  {
    name: "Ricotta Cheese",
    category: "dairy",
    protein: 11.0,
    carbs: 3.0,
    fats: 13.0,
    fiber: 0.0,
    calories: 174,
    unit: "g"
  },
  {
    name: "Mozzarella Cheese",
    category: "dairy",
    protein: 22.0,
    carbs: 2.0,
    fats: 22.0,
    fiber: 0.0,
    calories: 280,
    unit: "g"
  },
  {
    name: "Feta Cheese",
    category: "dairy",
    protein: 14.0,
    carbs: 4.0,
    fats: 21.0,
    fiber: 0.0,
    calories: 264,
    unit: "g"
  },
  {
    name: "Lettuce",
    category: "vegetables",
    protein: 1.4,
    carbs: 2.9,
    fats: 0.2,
    fiber: 1.3,
    calories: 15,
    unit: "g"
  },
  {
    name: "Cucumber",
    category: "vegetables",
    protein: 0.7,
    carbs: 3.6,
    fats: 0.1,
    fiber: 0.5,
    calories: 16,
    unit: "g"
  },
  {
    name: "Zucchini",
    category: "vegetables",
    protein: 1.2,
    carbs: 3.1,
    fats: 0.3,
    fiber: 1.0,
    calories: 17,
    unit: "g"
  },
  {
    name: "Mushrooms",
    category: "vegetables",
    protein: 3.1,
    carbs: 3.3,
    fats: 0.3,
    fiber: 1.0,
    calories: 22,
    unit: "g"
  },
  {
    name: "Chickpeas (Cooked)",
    category: "grains",
    protein: 8.9,
    carbs: 27.0,
    fats: 2.6,
    fiber: 7.6,
    calories: 164,
    unit: "g"
  },
  {
    name: "Lentils (Cooked)",
    category: "grains",
    protein: 9.0,
    carbs: 20.0,
    fats: 0.4,
    fiber: 7.9,
    calories: 116,
    unit: "g"
  },
  {
    name: "Pea Protein Powder",
    category: "other",
    protein: 80.0,
    carbs: 5.0,
    fats: 2.0,
    fiber: 0.0,
    calories: 350,
    unit: "g"
  },
  {
    name: "Almond Milk",
    category: "dairy",
    protein: 1.0,
    carbs: 1.0,
    fats: 2.5,
    fiber: 0.0,
    calories: 17,
    unit: "ml"
  },
  {
    name: "Dates",
    category: "fruits",
    protein: 2.5,
    carbs: 75.0,
    fats: 0.4,
    fiber: 8.0,
    calories: 282,
    unit: "g"
  },
  {
    name: "Flattened Rice (Poha)",
    category: "grains",
    protein: 6.7,
    carbs: 77.0,
    fats: 0.5,
    fiber: 2.8,
    calories: 346,
    unit: "g"
  },
  {
    name: "Peas",
    category: "vegetables",
    protein: 5.4,
    carbs: 14.0,
    fats: 0.4,
    fiber: 5.7,
    calories: 84,
    unit: "g"
  },
  {
    name: "Tomatoes",
    category: "vegetables",
    protein: 0.9,
    carbs: 3.9,
    fats: 0.2,
    fiber: 1.2,
    calories: 18,
    unit: "g"
  },
  {
    name: "Basil",
    category: "vegetables",
    protein: 3.2,
    carbs: 2.6,
    fats: 0.6,
    fiber: 1.6,
    calories: 23,
    unit: "g"
  },
  {
    name: "Garlic",
    category: "vegetables",
    protein: 6.4,
    carbs: 33.0,
    fats: 0.5,
    fiber: 2.1,
    calories: 149,
    unit: "g"
  },
  {
    name: "Parmesan Cheese",
    category: "dairy",
    protein: 38.0,
    carbs: 4.0,
    fats: 29.0,
    fiber: 0.0,
    calories: 431,
    unit: "g"
  },
  {
    name: "Romaine Lettuce",
    category: "vegetables",
    protein: 1.2,
    carbs: 3.3,
    fats: 0.3,
    fiber: 2.1,
    calories: 17,
    unit: "g"
  }
];

// Combine all foods with IDs
export const allFoodsWithIds = [
  ...meats.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...poultry.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...fruits.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...vegetables.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...grains.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...dairy.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...nuts_seeds.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...other.map(food => ({ ...food, foodId: generateFoodId(food.name) })),
  ...additionalFoods.map(food => ({ ...food, foodId: generateFoodId(food.name) }))
];

// Sample meals for meal builder
export const sampleMeals = [
  {
    name: "Protein Oatmeal Bowl",
    description: "High protein breakfast with oats and protein powder",
    ingredients: [
      { foodId: "oats_raw_202", quantity: 50, unit: "g" },
      { foodId: "protein_powder_whey_123", quantity: 30, unit: "g" },
      { foodId: "banana_456", quantity: 100, unit: "g" },
      { foodId: "chia_seeds_789", quantity: 10, unit: "g" }
    ]
  },
  {
    name: "Chicken Salad",
    description: "Healthy protein-rich salad",
    ingredients: [
      { foodId: "chicken_breast_raw_101", quantity: 100, unit: "g" },
      { foodId: "spinach_202", quantity: 50, unit: "g" },
      { foodId: "bell_pepper_303", quantity: 50, unit: "g" },
      { foodId: "olive_oil_404", quantity: 5, unit: "ml" }
    ]
  }
]; 