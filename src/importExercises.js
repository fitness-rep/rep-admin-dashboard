import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { allExercisesWithIds } from "./allExercises";
import { backExercises } from "./backExercises";
import { legExercises } from "./legExercises";
import { shoulderExercises } from "./shoulderExercises";
import { cardioExercises } from "./cardioExercises";

// Function to bulk import exercises
export const importExercises = async () => {
  try {
    console.log("Starting bulk import of exercises...");
    
    // Combine all exercises
    const allExercises = [
      ...allExercisesWithIds,
      ...backExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...legExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...shoulderExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...cardioExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      }))
    ];
    
    const importPromises = allExercises.map(async (exercise) => {
      const exerciseData = {
        templateId: exercise.templateId,
        name: exercise.name,
        type: exercise.type,
        description: `${exercise.name} - ${exercise.type} exercise targeting ${exercise.muscleGroups.join(', ')}`,
        muscleGroups: exercise.muscleGroups,
        equipment: exercise.equipment,
        difficulty: exercise.difficulty,
        instructions: exercise.instructions,
        sets: exercise.sets,
        reps: exercise.reps,
        calories: exercise.calories,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Use templateId as the document ID
      await setDoc(doc(db, "exerciseTemplate", exercise.templateId), exerciseData);
      console.log(`Imported: ${exercise.name}`);
    });

    await Promise.all(importPromises);
    console.log("✅ All exercises imported successfully!");
    
    return {
      success: true,
      count: allExercises.length,
      message: `Successfully imported ${allExercises.length} exercises`
    };
  } catch (error) {
    console.error("❌ Error importing exercises:", error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to import exercises by muscle group
export const importExercisesByMuscleGroup = async (muscleGroup) => {
  try {
    // Combine all exercises
    const allExercises = [
      ...allExercisesWithIds,
      ...backExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...legExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...shoulderExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      })),
      ...cardioExercises.map(exercise => ({
        ...exercise,
        templateId: `${exercise.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_')}_${Math.floor(Math.random() * 900) + 100}`
      }))
    ];
    
    const filteredExercises = allExercises.filter(exercise => 
      exercise.muscleGroups.includes(muscleGroup.toLowerCase())
    );

    console.log(`Starting import of ${muscleGroup} exercises...`);
    
    const importPromises = filteredExercises.map(async (exercise) => {
      const exerciseData = {
        templateId: exercise.templateId,
        name: exercise.name,
        type: exercise.type,
        description: `${exercise.name} - ${exercise.type} exercise targeting ${exercise.muscleGroups.join(', ')}`,
        muscleGroups: exercise.muscleGroups,
        equipment: exercise.equipment,
        difficulty: exercise.difficulty,
        instructions: exercise.instructions,
        sets: exercise.sets,
        reps: exercise.reps,
        calories: exercise.calories,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await setDoc(doc(db, "exerciseTemplate", exercise.templateId), exerciseData);
      console.log(`Imported: ${exercise.name}`);
    });

    await Promise.all(importPromises);
    console.log(`✅ All ${muscleGroup} exercises imported successfully!`);
    
    return {
      success: true,
      count: filteredExercises.length,
      message: `Successfully imported ${filteredExercises.length} ${muscleGroup} exercises`
    };
  } catch (error) {
    console.error(`❌ Error importing ${muscleGroup} exercises:`, error);
    return {
      success: false,
      error: error.message
    };
  }
}; 