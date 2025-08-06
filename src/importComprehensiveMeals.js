// Script to import comprehensive meals into Firebase database
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { allComprehensiveMeals } from "./comprehensiveMealDatabase";

export const importComprehensiveMeals = async () => {
  try {
    console.log('Starting comprehensive meal import...');
    console.log(`Total meals to import: ${allComprehensiveMeals.length}`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const meal of allComprehensiveMeals) {
      try {
        await setDoc(doc(db, "meals", meal.id), {
          name: meal.name,
          description: meal.description,
          ingredients: meal.ingredients,
          category: meal.category,
          cuisine: meal.cuisine,
          dietary: meal.dietary,
          bodyType: meal.bodyType,
          mealType: meal.mealType,
          createdAt: meal.createdAt
        });
        
        successCount++;
        console.log(`✅ Imported: ${meal.name}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Error importing ${meal.name}:`, error);
      }
    }
    
    console.log('=== IMPORT SUMMARY ===');
    console.log(`✅ Successfully imported: ${successCount} meals`);
    console.log(`❌ Failed to import: ${errorCount} meals`);
    console.log(`📊 Total processed: ${allComprehensiveMeals.length} meals`);
    
    return { successCount, errorCount, total: allComprehensiveMeals.length };
  } catch (error) {
    console.error('Error during meal import:', error);
    throw error;
  }
};

// Function to import meals by category
export const importMealsByCategory = async (category) => {
  try {
    const meals = allComprehensiveMeals.filter(meal => meal.category === category);
    console.log(`Importing ${meals.length} ${category} meals...`);
    
    let successCount = 0;
    for (const meal of meals) {
      try {
        await setDoc(doc(db, "meals", meal.id), {
          name: meal.name,
          description: meal.description,
          ingredients: meal.ingredients,
          category: meal.category,
          cuisine: meal.cuisine,
          dietary: meal.dietary,
          bodyType: meal.bodyType,
          mealType: meal.mealType,
          createdAt: meal.createdAt
        });
        successCount++;
        console.log(`✅ Imported: ${meal.name}`);
      } catch (error) {
        console.error(`❌ Error importing ${meal.name}:`, error);
      }
    }
    
    console.log(`✅ Successfully imported ${successCount} ${category} meals`);
    return successCount;
  } catch (error) {
    console.error(`Error importing ${category} meals:`, error);
    throw error;
  }
};

// Function to import meals by cuisine
export const importMealsByCuisine = async (cuisine) => {
  try {
    const meals = allComprehensiveMeals.filter(meal => meal.cuisine === cuisine);
    console.log(`Importing ${meals.length} ${cuisine} meals...`);
    
    let successCount = 0;
    for (const meal of meals) {
      try {
        await setDoc(doc(db, "meals", meal.id), {
          name: meal.name,
          description: meal.description,
          ingredients: meal.ingredients,
          category: meal.category,
          cuisine: meal.cuisine,
          dietary: meal.dietary,
          bodyType: meal.bodyType,
          mealType: meal.mealType,
          createdAt: meal.createdAt
        });
        successCount++;
        console.log(`✅ Imported: ${meal.name}`);
      } catch (error) {
        console.error(`❌ Error importing ${meal.name}:`, error);
      }
    }
    
    console.log(`✅ Successfully imported ${successCount} ${cuisine} meals`);
    return successCount;
  } catch (error) {
    console.error(`Error importing ${cuisine} meals:`, error);
    throw error;
  }
};

// Function to get meal statistics
export const getMealStatistics = () => {
  const stats = {
    total: allComprehensiveMeals.length,
    byCategory: {},
    byCuisine: {},
    byDietary: {},
    byBodyType: {},
    byMealType: {}
  };
  
  // Count by category
  allComprehensiveMeals.forEach(meal => {
    stats.byCategory[meal.category] = (stats.byCategory[meal.category] || 0) + 1;
    stats.byCuisine[meal.cuisine] = (stats.byCuisine[meal.cuisine] || 0) + 1;
    stats.byDietary[meal.dietary] = (stats.byDietary[meal.dietary] || 0) + 1;
    stats.byBodyType[meal.bodyType] = (stats.byBodyType[meal.bodyType] || 0) + 1;
    stats.byMealType[meal.mealType] = (stats.byMealType[meal.mealType] || 0) + 1;
  });
  
  return stats;
}; 