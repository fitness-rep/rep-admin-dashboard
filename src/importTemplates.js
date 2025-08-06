import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { exercisePlanTemplates, mealPlanTemplates } from './templateData';

// Import system templates to Firebase
export const importSystemTemplates = async () => {
  try {
    console.log('Starting template import...');
    
    // Import exercise templates
    for (const [key, template] of Object.entries(exercisePlanTemplates)) {
      try {
        await addDoc(collection(db, "exercisePlanTemplates"), {
          ...template,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log(`✅ Imported exercise template: ${template.name}`);
      } catch (error) {
        console.error(`❌ Error importing exercise template ${template.name}:`, error);
      }
    }
    
    // Import meal templates
    for (const [key, template] of Object.entries(mealPlanTemplates)) {
      try {
        await addDoc(collection(db, "mealPlanTemplates"), {
          ...template,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log(`✅ Imported meal template: ${template.name}`);
      } catch (error) {
        console.error(`❌ Error importing meal template ${template.name}:`, error);
      }
    }
    
    console.log('🎉 Template import completed!');
  } catch (error) {
    console.error('❌ Error during template import:', error);
  }
};

// Clear all templates from Firebase
export const clearAllTemplates = async () => {
  try {
    console.log('Clearing all templates...');
    
    // Clear exercise templates
    const exerciseSnapshot = await getDocs(collection(db, "exercisePlanTemplates"));
    for (const doc of exerciseSnapshot.docs) {
      await deleteDoc(doc.ref);
    }
    console.log(`🗑️ Cleared ${exerciseSnapshot.docs.length} exercise templates`);
    
    // Clear meal templates
    const mealSnapshot = await getDocs(collection(db, "mealPlanTemplates"));
    for (const doc of mealSnapshot.docs) {
      await deleteDoc(doc.ref);
    }
    console.log(`🗑️ Cleared ${mealSnapshot.docs.length} meal templates`);
    
    console.log('✅ All templates cleared!');
  } catch (error) {
    console.error('❌ Error clearing templates:', error);
  }
};

// Check template status
export const checkTemplateStatus = async () => {
  try {
    console.log('Checking template status...');
    
    const exerciseSnapshot = await getDocs(collection(db, "exercisePlanTemplates"));
    const mealSnapshot = await getDocs(collection(db, "mealPlanTemplates"));
    
    console.log(`📊 Exercise templates: ${exerciseSnapshot.docs.length}`);
    console.log(`📊 Meal templates: ${mealSnapshot.docs.length}`);
    
    // Show template details
    exerciseSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`  - ${data.name} (${data.category})`);
    });
    
    mealSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`  - ${data.name} (${data.category})`);
    });
    
  } catch (error) {
    console.error('❌ Error checking template status:', error);
  }
};

// Fresh start - clear and reimport
export const freshStartTemplates = async () => {
  try {
    console.log('🔄 Starting fresh template import...');
    await clearAllTemplates();
    await importSystemTemplates();
    console.log('✅ Fresh start completed!');
  } catch (error) {
    console.error('❌ Error during fresh start:', error);
  }
}; 