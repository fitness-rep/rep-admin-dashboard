// Script to import comprehensive food database into Firebase
import { setDoc, doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { allComprehensiveFoods, generateFoodId, getFoodStatistics } from "./comprehensiveFoodDatabase";

export const importComprehensiveFoods = async () => {
  try {
    console.log('Starting comprehensive food import...');
    console.log(`Total foods to import: ${allComprehensiveFoods.length}`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const food of allComprehensiveFoods) {
      try {
        const foodId = generateFoodId(food.name);
        await setDoc(doc(db, "foods", foodId), {
          name: food.name,
          category: food.category,
          protein: food.protein,
          carbs: food.carbs,
          fats: food.fats,
          fiber: food.fiber,
          calories: food.calories,
          unit: food.unit,
          foodId: foodId
        });
        
        successCount++;
        console.log(`✅ Imported: ${food.name}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Error importing ${food.name}:`, error);
      }
    }
    
    console.log('=== IMPORT SUMMARY ===');
    console.log(`✅ Successfully imported: ${successCount} foods`);
    console.log(`❌ Failed to import: ${errorCount} foods`);
    console.log(`📊 Total processed: ${allComprehensiveFoods.length} foods`);
    
    // Log statistics
    const stats = getFoodStatistics();
    console.log('=== FOOD STATISTICS ===');
    console.log(`Total foods: ${stats.total}`);
    Object.entries(stats.byCategory).forEach(([category, count]) => {
      console.log(`${category}: ${count} foods`);
    });
    
    return { successCount, errorCount, total: allComprehensiveFoods.length, stats };
  } catch (error) {
    console.error('Error during comprehensive food import:', error);
    throw error;
  }
};

// Function to clear all existing foods (for fresh start)
export const clearAllFoods = async () => {
  try {
    console.log('Clearing all existing foods...');
    
    const foodsSnapshot = await getDocs(collection(db, "foods"));
    const deletePromises = [];
    
    foodsSnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    
    await Promise.all(deletePromises);
    
    console.log(`✅ Cleared ${foodsSnapshot.size} existing foods`);
    return foodsSnapshot.size;
  } catch (error) {
    console.error('Error clearing foods:', error);
    throw error;
  }
};

// Function to clear all existing meals (for fresh start)
export const clearAllMeals = async () => {
  try {
    console.log('Clearing all existing meals...');
    
    const mealsSnapshot = await getDocs(collection(db, "meals"));
    const deletePromises = [];
    
    mealsSnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    
    await Promise.all(deletePromises);
    
    console.log(`✅ Cleared ${mealsSnapshot.size} existing meals`);
    return mealsSnapshot.size;
  } catch (error) {
    console.error('Error clearing meals:', error);
    throw error;
  }
};

// Function to do complete fresh start
export const freshStart = async () => {
  try {
    console.log('=== STARTING FRESH START ===');
    
    // Clear existing data
    const clearedFoods = await clearAllFoods();
    const clearedMeals = await clearAllMeals();
    
    console.log(`Cleared ${clearedFoods} foods and ${clearedMeals} meals`);
    
    // Import comprehensive foods
    const importResult = await importComprehensiveFoods();
    
    console.log('=== FRESH START COMPLETE ===');
    console.log(`✅ Fresh start completed successfully!`);
    console.log(`📊 Imported ${importResult.successCount} foods`);
    
    return {
      clearedFoods,
      clearedMeals,
      importedFoods: importResult.successCount,
      stats: importResult.stats
    };
  } catch (error) {
    console.error('Error during fresh start:', error);
    throw error;
  }
};

// Function to check current database status
export const checkDatabaseStatus = async () => {
  try {
    console.log('=== CHECKING DATABASE STATUS ===');
    
    const foodsSnapshot = await getDocs(collection(db, "foods"));
    const mealsSnapshot = await getDocs(collection(db, "meals"));
    
    const foodsData = [];
    const mealsData = [];
    
    foodsSnapshot.forEach((doc) => {
      foodsData.push({ id: doc.id, ...doc.data() });
    });
    
    mealsSnapshot.forEach((doc) => {
      mealsData.push({ id: doc.id, ...doc.data() });
    });
    
    console.log(`📊 Current Database Status:`);
    console.log(`Foods: ${foodsData.length}`);
    console.log(`Meals: ${mealsData.length}`);
    
    // Check for duplicates
    const foodNames = foodsData.map(f => f.name);
    const uniqueFoodNames = new Set(foodNames);
    const duplicateFoods = foodNames.length - uniqueFoodNames.size;
    
    const mealNames = mealsData.map(m => m.name);
    const uniqueMealNames = new Set(mealNames);
    const duplicateMeals = mealNames.length - uniqueMealNames.size;
    
    console.log(`Duplicate foods: ${duplicateFoods}`);
    console.log(`Duplicate meals: ${duplicateMeals}`);
    
    return {
      foodsCount: foodsData.length,
      mealsCount: mealsData.length,
      duplicateFoods,
      duplicateMeals
    };
  } catch (error) {
    console.error('Error checking database status:', error);
    throw error;
  }
}; 