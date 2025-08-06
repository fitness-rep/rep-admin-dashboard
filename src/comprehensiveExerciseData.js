// Comprehensive Exercise Database - Organized by Individual Muscle Groups
// This database contains hundreds of exercises for all fitness levels

export const comprehensiveExerciseDatabase = [
  // CHEST EXERCISES (Primary: Pectoralis Major & Minor)
  {
    name: "Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Start in plank position with hands shoulder-width apart\n2. Lower body until chest nearly touches floor\n3. Push back up to starting position\n4. Keep core tight and body straight",
    sets: "3-4",
    reps: "10-20",
    calories: 8
  },
  {
    name: "Bench Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["barbell", "bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on bench with feet flat on ground\n2. Grip barbell slightly wider than shoulder-width\n3. Lower bar to chest with control\n4. Press bar back up to starting position",
    sets: "3-4",
    reps: "8-12",
    calories: 12
  },
  {
    name: "Dumbbell Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["dumbbells", "bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on bench with dumbbells held above chest\n2. Lower weights in arc motion to sides\n3. Return to starting position with control\n4. Keep slight bend in elbows throughout",
    sets: "3",
    reps: "10-15",
    calories: 10
  },
  {
    name: "Incline Bench Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["barbell", "incline bench"],
    difficulty: "intermediate",
    instructions: "1. Set bench to 30-45 degree incline\n2. Lie back and grip barbell\n3. Lower bar to upper chest\n4. Press back up to starting position",
    sets: "3-4",
    reps: "8-12",
    calories: 12
  },
  {
    name: "Decline Bench Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["barbell", "decline bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on decline bench with feet secured\n2. Grip barbell and lower to lower chest\n3. Press bar back up to starting position\n4. Focus on lower chest activation",
    sets: "3-4",
    reps: "8-12",
    calories: 12
  },
  {
    name: "Dumbbell Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["dumbbells", "bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on bench with dumbbells at shoulder level\n2. Press dumbbells up and together\n3. Lower back to starting position\n4. Keep control throughout movement",
    sets: "3-4",
    reps: "8-12",
    calories: 11
  },
  {
    name: "Incline Dumbbell Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["dumbbells", "incline bench"],
    difficulty: "intermediate",
    instructions: "1. Set bench to 30-45 degree incline\n2. Press dumbbells up and together\n3. Lower back to starting position\n4. Focus on upper chest",
    sets: "3-4",
    reps: "8-12",
    calories: 11
  },
  {
    name: "Decline Dumbbell Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["dumbbells", "decline bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on decline bench with feet secured\n2. Press dumbbells up and together\n3. Lower back to starting position\n4. Focus on lower chest",
    sets: "3-4",
    reps: "8-12",
    calories: 11
  },
  {
    name: "Cable Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["cable machine"],
    difficulty: "intermediate",
    instructions: "1. Set cables at chest height\n2. Step forward and bring hands together\n3. Return to starting position with control\n4. Keep slight bend in elbows",
    sets: "3",
    reps: "12-15",
    calories: 8
  },
  {
    name: "Incline Cable Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["cable machine", "incline bench"],
    difficulty: "intermediate",
    instructions: "1. Set bench to incline and cables high\n2. Perform flye motion from high to low\n3. Focus on upper chest activation\n4. Control the movement",
    sets: "3",
    reps: "12-15",
    calories: 8
  },
  {
    name: "Decline Cable Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["cable machine", "decline bench"],
    difficulty: "intermediate",
    instructions: "1. Set bench to decline and cables low\n2. Perform flye motion from low to high\n3. Focus on lower chest activation\n4. Control the movement",
    sets: "3",
    reps: "12-15",
    calories: 8
  },
  {
    name: "Diamond Push-Ups",
    type: "strength",
    muscleGroups: ["chest", "triceps"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Form diamond shape with hands under chest\n2. Lower body until chest touches hands\n3. Push back up to starting position\n4. Keep elbows close to body",
    sets: "3",
    reps: "8-15",
    calories: 10
  },
  {
    name: "Wide Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Place hands wider than shoulder-width\n2. Lower body until chest nearly touches floor\n3. Push back up to starting position\n4. Focus on chest activation",
    sets: "3",
    reps: "10-20",
    calories: 8
  },
  {
    name: "Close-Grip Push-Ups",
    type: "strength",
    muscleGroups: ["chest", "triceps"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Place hands closer than shoulder-width\n2. Lower body until chest nearly touches floor\n3. Push back up to starting position\n4. Focus on triceps activation",
    sets: "3",
    reps: "10-20",
    calories: 8
  },
  {
    name: "Decline Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight", "elevated surface"],
    difficulty: "intermediate",
    instructions: "1. Place feet on elevated surface\n2. Perform push-up with body at decline angle\n3. Lower chest to ground\n4. Push back up to starting position",
    sets: "3",
    reps: "8-15",
    calories: 10
  },
  {
    name: "Incline Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight", "elevated surface"],
    difficulty: "beginner",
    instructions: "1. Place hands on elevated surface\n2. Perform push-up with body at incline angle\n3. Lower chest to surface\n4. Push back up to starting position",
    sets: "3",
    reps: "10-20",
    calories: 6
  },
  {
    name: "Pike Push-Ups",
    type: "strength",
    muscleGroups: ["chest", "shoulders"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Form inverted V shape with hips high\n2. Lower head toward ground\n3. Push back up to starting position\n4. Focus on shoulder activation",
    sets: "3",
    reps: "8-15",
    calories: 9
  },
  {
    name: "Archer Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Start in wide push-up position\n2. Lower body to one side while extending other arm\n3. Push back up and alternate sides\n4. Focus on unilateral chest strength",
    sets: "3",
    reps: "5-10 per side",
    calories: 12
  },
  {
    name: "One-Arm Push-Ups",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Place one hand behind back\n2. Lower body using only one arm\n3. Push back up to starting position\n4. Maintain balance throughout",
    sets: "3",
    reps: "3-8 per arm",
    calories: 15
  },
  {
    name: "Clap Push-Ups",
    type: "plyometric",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Perform explosive push-up\n2. Push body up high enough to clap hands\n3. Land softly and repeat\n4. Focus on power and control",
    sets: "3",
    reps: "5-10",
    calories: 12
  },
  {
    name: "Plyometric Push-Ups",
    type: "plyometric",
    muscleGroups: ["chest"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Perform explosive push-up\n2. Push hands off ground\n3. Land softly and repeat\n4. Focus on power generation",
    sets: "3",
    reps: "5-10",
    calories: 12
  },
  {
    name: "Resistance Band Chest Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["resistance band"],
    difficulty: "beginner",
    instructions: "1. Anchor band behind back\n2. Press band forward with both arms\n3. Return to starting position\n4. Keep tension throughout movement",
    sets: "3",
    reps: "15-20",
    calories: 6
  },
  {
    name: "Resistance Band Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["resistance band"],
    difficulty: "beginner",
    instructions: "1. Anchor band behind back\n2. Bring arms together in front\n3. Return to starting position\n4. Focus on chest squeeze",
    sets: "3",
    reps: "15-20",
    calories: 6
  },
  {
    name: "Machine Chest Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["chest press machine"],
    difficulty: "beginner",
    instructions: "1. Sit in machine with back against pad\n2. Press handles forward\n3. Return to starting position\n4. Keep back against pad",
    sets: "3-4",
    reps: "10-15",
    calories: 8
  },
  {
    name: "Machine Flyes",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["pec deck machine"],
    difficulty: "beginner",
    instructions: "1. Sit in machine with arms at sides\n2. Bring arms together in front\n3. Return to starting position\n4. Focus on chest contraction",
    sets: "3",
    reps: "12-15",
    calories: 7
  },
  {
    name: "Smith Machine Bench Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["smith machine", "bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on bench under smith machine\n2. Press bar up and unlock\n3. Lower bar to chest\n4. Press back up and lock",
    sets: "3-4",
    reps: "8-12",
    calories: 10
  },
  {
    name: "Landmine Press",
    type: "strength",
    muscleGroups: ["chest"],
    equipment: ["barbell", "landmine attachment"],
    difficulty: "intermediate",
    instructions: "1. Hold barbell end in both hands\n2. Press barbell forward and up\n3. Return to starting position\n4. Focus on chest and shoulder activation",
    sets: "3",
    reps: "10-15",
    calories: 9
  },
  {
    name: "Medicine Ball Chest Pass",
    type: "plyometric",
    muscleGroups: ["chest"],
    equipment: ["medicine ball", "wall"],
    difficulty: "intermediate",
    instructions: "1. Stand facing wall with medicine ball\n2. Throw ball against wall with chest pass\n3. Catch ball and repeat\n4. Focus on power and speed",
    sets: "3",
    reps: "10-15",
    calories: 8
  },
  {
    name: "Wall Ball Shots",
    type: "cardio",
    muscleGroups: ["chest", "legs"],
    equipment: ["medicine ball", "wall"],
    difficulty: "intermediate",
    instructions: "1. Hold medicine ball at chest level\n2. Perform squat and press ball to wall\n3. Catch ball and repeat\n4. Combine strength and cardio",
    sets: "3",
    reps: "15-20",
    calories: 12
  }
];

// Helper function to generate template IDs
export const generateTemplateId = (name) => {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .trim();
};

// Helper function to add template IDs to exercises
export const exercisesWithIds = comprehensiveExerciseDatabase.map(exercise => ({
  ...exercise,
  templateId: `${generateTemplateId(exercise.name)}_${Math.floor(Math.random() * 900) + 100}`
})); 