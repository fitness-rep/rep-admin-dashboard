import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Function to check current food data
export const checkFoodData = async () => {
  try {
    console.log("=== CHECKING CURRENT FOOD DATA ===");
    const foodsSnapshot = await getDocs(collection(db, "foods"));
    const foodsData = [];
    
    foodsSnapshot.forEach((doc) => {
      foodsData.push({ id: doc.id, ...doc.data() });
    });
    
    console.log("Total foods in database:", foodsData.length);
    
    // Find oats specifically
    const oats = foodsData.find(food => 
      food.name.toLowerCase().includes('oat') || 
      food.name.toLowerCase().includes('oats')
    );
    
    if (oats) {
      console.log("=== OATS DATA FOUND ===");
      console.log("Name:", oats.name);
      console.log("Protein:", oats.protein, "g per 100g");
      console.log("Carbs:", oats.carbs, "g per 100g");
      console.log("Fats:", oats.fats, "g per 100g");
      console.log("Calories:", oats.calories, "per 100g");
      console.log("Category:", oats.category);
    } else {
      console.log("No oats found in database");
    }
    
    // Show first few foods
    console.log("=== SAMPLE FOODS ===");
    foodsData.slice(0, 5).forEach(food => {
      console.log(`${food.name}: ${food.protein}g P, ${food.carbs}g C, ${food.fats}g F, ${food.calories} cal`);
    });
    
    return foodsData;
  } catch (error) {
    console.error("Error checking food data:", error);
    return [];
  }
};

// Function to update food data with correct values
export const updateFoodData = async () => {
  try {
    console.log("=== UPDATING FOOD DATA WITH CORRECT VALUES ===");
    
    // Correct nutrition values (per 100g) from USDA database
    const correctFoods = [
      {
        name: "Oats (Raw)",
        category: "grains",
        protein: 16.9, // USDA: 16.9g per 100g
        carbs: 66.3,   // USDA: 66.3g per 100g
        fats: 6.9,     // USDA: 6.9g per 100g
        fiber: 10.6,   // USDA: 10.6g per 100g
        calories: 389, // USDA: 389 calories per 100g
        unit: "g"
      },
      {
        name: "Chicken Breast (Raw)",
        category: "meats",
        protein: 23.1, // USDA: 23.1g per 100g
        carbs: 0.0,
        fats: 2.6,     // USDA: 2.6g per 100g
        fiber: 0.0,
        calories: 120, // USDA: 120 calories per 100g
        unit: "g"
      },
      {
        name: "Banana",
        category: "fruits",
        protein: 1.1,  // USDA: 1.1g per 100g
        carbs: 22.8,   // USDA: 22.8g per 100g
        fats: 0.3,     // USDA: 0.3g per 100g
        fiber: 2.6,    // USDA: 2.6g per 100g
        calories: 89,  // USDA: 89 calories per 100g
        unit: "g"
      },
      {
        name: "Spinach (Raw)",
        category: "vegetables",
        protein: 2.9,  // USDA: 2.9g per 100g
        carbs: 3.6,    // USDA: 3.6g per 100g
        fats: 0.4,     // USDA: 0.4g per 100g
        fiber: 2.2,    // USDA: 2.2g per 100g
        calories: 23,  // USDA: 23 calories per 100g
        unit: "g"
      },
      {
        name: "Almonds",
        category: "nuts_seeds",
        protein: 21.2, // USDA: 21.2g per 100g
        carbs: 21.7,   // USDA: 21.7g per 100g
        fats: 49.9,    // USDA: 49.9g per 100g
        fiber: 12.5,   // USDA: 12.5g per 100g
        calories: 579, // USDA: 579 calories per 100g
        unit: "g"
      }
    ];
    
    console.log("Correct values from USDA database:");
    correctFoods.forEach(food => {
      console.log(`${food.name}: ${food.protein}g P, ${food.carbs}g C, ${food.fats}g F, ${food.calories} cal`);
    });
    
    return correctFoods;
  } catch (error) {
    console.error("Error updating food data:", error);
    return [];
  }
}; 