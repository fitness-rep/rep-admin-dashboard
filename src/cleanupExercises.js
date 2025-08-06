import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

// Function to remove duplicate exercises
export const removeDuplicateExercises = async () => {
  try {
    console.log("Starting duplicate removal process...");
    
    // Get all exercises from Firestore
    const querySnapshot = await getDocs(collection(db, "exerciseTemplate"));
    const exercises = [];
    
    querySnapshot.forEach((doc) => {
      exercises.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`Found ${exercises.length} total exercises`);
    
    // Find duplicates by name
    const seenNames = new Set();
    const duplicates = [];
    
    exercises.forEach(exercise => {
      if (seenNames.has(exercise.name)) {
        duplicates.push(exercise);
      } else {
        seenNames.add(exercise.name);
      }
    });
    
    console.log(`Found ${duplicates.length} duplicate exercises`);
    
    // Remove duplicates
    const deletePromises = duplicates.map(async (exercise) => {
      await deleteDoc(doc(db, "exerciseTemplate", exercise.id));
      console.log(`Deleted duplicate: ${exercise.name}`);
    });
    
    await Promise.all(deletePromises);
    
    console.log("✅ Duplicate removal complete!");
    
    return {
      success: true,
      removed: duplicates.length,
      remaining: exercises.length - duplicates.length,
      message: `Removed ${duplicates.length} duplicate exercises. ${exercises.length - duplicates.length} exercises remaining.`
    };
  } catch (error) {
    console.error("❌ Error removing duplicates:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to remove exercises by name
export const removeExercisesByName = async (exerciseNames) => {
  try {
    console.log("Starting removal of specific exercises...");
    
    // Get all exercises from Firestore
    const querySnapshot = await getDocs(collection(db, "exerciseTemplate"));
    const exercisesToRemove = [];
    
    querySnapshot.forEach((doc) => {
      const exercise = doc.data();
      if (exerciseNames.includes(exercise.name)) {
        exercisesToRemove.push({
          id: doc.id,
          ...exercise
        });
      }
    });
    
    console.log(`Found ${exercisesToRemove.length} exercises to remove`);
    
    // Remove exercises
    const deletePromises = exercisesToRemove.map(async (exercise) => {
      await deleteDoc(doc(db, "exerciseTemplate", exercise.id));
      console.log(`Removed: ${exercise.name}`);
    });
    
    await Promise.all(deletePromises);
    
    console.log("✅ Exercise removal complete!");
    
    return {
      success: true,
      removed: exercisesToRemove.length,
      message: `Removed ${exercisesToRemove.length} exercises.`
    };
  } catch (error) {
    console.error("❌ Error removing exercises:", error);
    return {
      success: false,
      error: error.message
    };
  }
}; 