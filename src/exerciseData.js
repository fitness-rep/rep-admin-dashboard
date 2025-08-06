// Comprehensive Exercise Database
// GIFs sourced from GIPHY fitness exercise demonstrations

export const exerciseDatabase = [
  // CHEST EXERCISES
  {
    name: "Push-Ups",
    type: "strength",
    muscleGroups: ["chest", "triceps", "shoulders"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Start in a plank position with hands shoulder-width apart\n2. Lower your body until chest nearly touches the floor\n3. Push back up to starting position\n4. Keep your core tight and body in a straight line",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "10-20",
    calories: 8
  },
  {
    name: "Bench Press",
    type: "strength",
    muscleGroups: ["chest", "triceps", "shoulders"],
    equipment: ["barbell", "bench"],
    difficulty: "intermediate",
    instructions: "1. Lie on bench with feet flat on ground\n2. Grip barbell slightly wider than shoulder-width\n3. Lower bar to chest with control\n4. Press bar back up to starting position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
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
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "10-15",
    calories: 10
  },
  {
    name: "Incline Bench Press",
    type: "strength",
    muscleGroups: ["chest", "triceps", "shoulders"],
    equipment: ["barbell", "incline bench"],
    difficulty: "intermediate",
    instructions: "1. Set bench to 30-45 degree incline\n2. Lie back and grip barbell\n3. Lower bar to upper chest\n4. Press back up to starting position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "8-12",
    calories: 12
  },
  {
    name: "Decline Push-Ups",
    type: "strength",
    muscleGroups: ["chest", "triceps", "shoulders"],
    equipment: ["bodyweight", "elevated surface"],
    difficulty: "intermediate",
    instructions: "1. Place feet on elevated surface\n2. Perform push-up with body at decline angle\n3. Lower chest to ground\n4. Push back up to starting position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "8-15",
    calories: 10
  },

  // BACK EXERCISES
  {
    name: "Pull-Ups",
    type: "strength",
    muscleGroups: ["back", "biceps"],
    equipment: ["pull-up bar"],
    difficulty: "intermediate",
    instructions: "1. Hang from pull-up bar with hands shoulder-width apart\n2. Pull body up until chin clears bar\n3. Lower body with control\n4. Repeat movement",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "5-12",
    calories: 12
  },
  {
    name: "Bent-Over Rows",
    type: "strength",
    muscleGroups: ["back", "biceps"],
    equipment: ["barbell"],
    difficulty: "intermediate",
    instructions: "1. Stand with feet shoulder-width apart\n2. Bend at hips and knees, keeping back straight\n3. Pull barbell to lower chest\n4. Lower with control",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "8-12",
    calories: 10
  },
  {
    name: "Deadlifts",
    type: "strength",
    muscleGroups: ["back", "legs", "glutes"],
    equipment: ["barbell"],
    difficulty: "advanced",
    instructions: "1. Stand with feet hip-width apart\n2. Bend at hips and knees to grip bar\n3. Keep back straight and lift bar\n4. Stand up straight, then lower with control",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "5-8",
    calories: 15
  },
  {
    name: "Lat Pulldowns",
    type: "strength",
    muscleGroups: ["back", "biceps"],
    equipment: ["cable machine"],
    difficulty: "beginner",
    instructions: "1. Sit at lat pulldown machine\n2. Grip bar wider than shoulder-width\n3. Pull bar down to upper chest\n4. Return to starting position with control",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "10-15",
    calories: 8
  },
  {
    name: "Face Pulls",
    type: "strength",
    muscleGroups: ["back", "shoulders"],
    equipment: ["cable machine"],
    difficulty: "beginner",
    instructions: "1. Set cable at face height\n2. Pull rope toward face\n3. Keep elbows high and wide\n4. Squeeze shoulder blades together",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "12-15",
    calories: 6
  },

  // SHOULDER EXERCISES
  {
    name: "Overhead Press",
    type: "strength",
    muscleGroups: ["shoulders", "triceps"],
    equipment: ["barbell"],
    difficulty: "intermediate",
    instructions: "1. Hold barbell at shoulder level\n2. Press bar overhead\n3. Lower bar back to shoulders\n4. Keep core tight throughout",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "8-12",
    calories: 10
  },
  {
    name: "Lateral Raises",
    type: "strength",
    muscleGroups: ["shoulders"],
    equipment: ["dumbbells"],
    difficulty: "beginner",
    instructions: "1. Hold dumbbells at sides\n2. Raise arms to shoulder level\n3. Lower with control\n4. Keep slight bend in elbows",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "12-15",
    calories: 6
  },
  {
    name: "Front Raises",
    type: "strength",
    muscleGroups: ["shoulders"],
    equipment: ["dumbbells"],
    difficulty: "beginner",
    instructions: "1. Hold dumbbells in front of thighs\n2. Raise arms to shoulder level\n3. Lower with control\n4. Keep arms straight",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "12-15",
    calories: 6
  },
  {
    name: "Rear Delt Flyes",
    type: "strength",
    muscleGroups: ["shoulders", "back"],
    equipment: ["dumbbells"],
    difficulty: "beginner",
    instructions: "1. Bend at hips with dumbbells hanging\n2. Raise arms to sides\n3. Squeeze shoulder blades together\n4. Lower with control",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "12-15",
    calories: 6
  },
  {
    name: "Arnold Press",
    type: "strength",
    muscleGroups: ["shoulders"],
    equipment: ["dumbbells"],
    difficulty: "intermediate",
    instructions: "1. Start with dumbbells at shoulder level\n2. Rotate wrists and press overhead\n3. Reverse motion on way down\n4. Keep core engaged",
    sets: "3",
    reps: "8-12",
    calories: 8
  },

  // ARM EXERCISES
  {
    name: "Bicep Curls",
    type: "strength",
    muscleGroups: ["biceps"],
    equipment: ["dumbbells"],
    difficulty: "beginner",
    instructions: "1. Hold dumbbells at sides\n2. Curl weights toward shoulders\n3. Lower with control\n4. Keep elbows at sides",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "10-15",
    calories: 6
  },
  {
    name: "Tricep Dips",
    type: "strength",
    muscleGroups: ["triceps", "chest", "shoulders"],
    equipment: ["dip bars"],
    difficulty: "intermediate",
    instructions: "1. Support body on dip bars\n2. Lower body by bending elbows\n3. Push back up to starting position\n4. Keep body upright",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "8-15",
    calories: 10
  },
  {
    name: "Hammer Curls",
    type: "strength",
    muscleGroups: ["biceps", "forearms"],
    equipment: ["dumbbells"],
    difficulty: "beginner",
    instructions: "1. Hold dumbbells with palms facing each other\n2. Curl weights toward shoulders\n3. Lower with control\n4. Keep wrists neutral",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "10-15",
    calories: 6
  },
  {
    name: "Tricep Pushdowns",
    type: "strength",
    muscleGroups: ["triceps"],
    equipment: ["cable machine"],
    difficulty: "beginner",
    instructions: "1. Stand at cable machine\n2. Push bar down to thighs\n3. Return to starting position\n4. Keep elbows at sides",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "12-15",
    calories: 6
  },
  {
    name: "Preacher Curls",
    type: "strength",
    muscleGroups: ["biceps"],
    equipment: ["barbell", "preacher bench"],
    difficulty: "intermediate",
    instructions: "1. Sit at preacher bench\n2. Rest arms on pad\n3. Curl barbell toward shoulders\n4. Lower with control",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "8-12",
    calories: 6
  },

  // LEG EXERCISES
  {
    name: "Squats",
    type: "strength",
    muscleGroups: ["legs", "glutes", "core"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Stand with feet shoulder-width apart\n2. Lower body as if sitting back\n3. Keep knees behind toes\n4. Return to standing position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "12-20",
    calories: 12
  },
  {
    name: "Barbell Squats",
    type: "strength",
    muscleGroups: ["legs", "glutes", "core"],
    equipment: ["barbell"],
    difficulty: "intermediate",
    instructions: "1. Rest barbell on upper back\n2. Stand with feet shoulder-width apart\n3. Lower body with control\n4. Drive back up to standing",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "8-12",
    calories: 15
  },
  {
    name: "Lunges",
    type: "strength",
    muscleGroups: ["legs", "glutes"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Step forward with one leg\n2. Lower body until both knees are bent\n3. Push back to starting position\n4. Alternate legs",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "10-15 per leg",
    calories: 10
  },
  {
    name: "Leg Press",
    type: "strength",
    muscleGroups: ["legs", "glutes"],
    equipment: ["leg press machine"],
    difficulty: "beginner",
    instructions: "1. Sit in leg press machine\n2. Place feet on platform\n3. Press platform away from body\n4. Return to starting position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3-4",
    reps: "10-15",
    calories: 12
  },
  {
    name: "Romanian Deadlifts",
    type: "strength",
    muscleGroups: ["legs", "glutes", "back"],
    equipment: ["barbell"],
    difficulty: "intermediate",
    instructions: "1. Hold barbell in front of thighs\n2. Hinge at hips, keeping legs straight\n3. Lower bar along legs\n4. Return to standing position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "8-12",
    calories: 12
  },
  {
    name: "Calf Raises",
    type: "strength",
    muscleGroups: ["legs"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Stand on edge of step\n2. Raise heels as high as possible\n3. Lower heels below step level\n4. Repeat movement",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "15-20",
    calories: 4
  },

  // CORE EXERCISES
  {
    name: "Plank",
    type: "strength",
    muscleGroups: ["core", "shoulders"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Hold body in straight line\n2. Support on forearms and toes\n3. Keep core tight\n4. Hold position for time",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "30-60 seconds",
    calories: 6
  },
  {
    name: "Crunches",
    type: "strength",
    muscleGroups: ["core"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Lie on back with knees bent\n2. Lift shoulders off ground\n3. Lower back to starting position\n4. Keep lower back on ground",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "15-25",
    calories: 4
  },
  {
    name: "Russian Twists",
    type: "strength",
    muscleGroups: ["core"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Sit with knees bent and feet off ground\n2. Rotate torso from side to side\n3. Keep core engaged\n4. Add weight for difficulty",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "20-30",
    calories: 6
  },
  {
    name: "Mountain Climbers",
    type: "cardio",
    muscleGroups: ["core", "shoulders"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Start in plank position\n2. Drive knees toward chest alternately\n3. Keep core tight\n4. Move at controlled pace",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "30-60 seconds",
    calories: 8
  },
  {
    name: "Leg Raises",
    type: "strength",
    muscleGroups: ["core"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Lie on back with legs straight\n2. Lift legs to 90 degrees\n3. Lower legs with control\n4. Keep lower back pressed to ground",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "10-15",
    calories: 6
  },

  // CARDIO EXERCISES
  {
    name: "Running",
    type: "cardio",
    muscleGroups: ["legs", "core"],
    equipment: ["treadmill", "outdoor"],
    difficulty: "beginner",
    instructions: "1. Start at comfortable pace\n2. Maintain good posture\n3. Land midfoot\n4. Gradually increase intensity",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "1",
    reps: "20-60 minutes",
    calories: 600
  },
  {
    name: "Cycling",
    type: "cardio",
    muscleGroups: ["legs"],
    equipment: ["stationary bike", "road bike"],
    difficulty: "beginner",
    instructions: "1. Adjust seat height properly\n2. Maintain steady cadence\n3. Keep upper body relaxed\n4. Vary resistance levels",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "1",
    reps: "30-60 minutes",
    calories: 500
  },
  {
    name: "Jumping Jacks",
    type: "cardio",
    muscleGroups: ["legs", "shoulders"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Start standing with arms at sides\n2. Jump feet apart while raising arms\n3. Jump back to starting position\n4. Repeat at steady pace",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "30-60 seconds",
    calories: 8
  },
  {
    name: "Burpees",
    type: "cardio",
    muscleGroups: ["legs", "core", "chest"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Drop into squat position\n2. Kick feet back to plank\n3. Perform push-up\n4. Jump back to squat and jump up",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "10-20",
    calories: 12
  },
  {
    name: "High Knees",
    type: "cardio",
    muscleGroups: ["legs", "core"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Stand in place\n2. Drive knees toward chest alternately\n3. Pump arms naturally\n4. Maintain steady pace",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "3",
    reps: "30-60 seconds",
    calories: 8
  },
  {
    name: "Elliptical",
    type: "cardio",
    muscleGroups: ["legs", "arms"],
    equipment: ["elliptical machine"],
    difficulty: "beginner",
    instructions: "1. Step onto elliptical machine\n2. Maintain upright posture\n3. Use both arms and legs\n4. Vary resistance and incline",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "1",
    reps: "20-45 minutes",
    calories: 400
  },
  {
    name: "Rowing",
    type: "cardio",
    muscleGroups: ["legs", "back", "arms"],
    equipment: ["rowing machine"],
    difficulty: "intermediate",
    instructions: "1. Sit with feet strapped in\n2. Drive with legs first\n3. Lean back and pull with arms\n4. Return to starting position",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "1",
    reps: "15-30 minutes",
    calories: 500
  },
  {
    name: "Swimming",
    type: "cardio",
    muscleGroups: ["legs", "arms", "core"],
    equipment: ["pool"],
    difficulty: "intermediate",
    instructions: "1. Use proper stroke technique\n2. Maintain steady breathing\n3. Keep body streamlined\n4. Vary strokes for variety",
    gifUrl: "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif",
    sets: "1",
    reps: "20-45 minutes",
    calories: 600
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
export const exercisesWithIds = exerciseDatabase.map(exercise => ({
  ...exercise,
  templateId: `${generateTemplateId(exercise.name)}_${Math.floor(Math.random() * 900) + 100}`
})); 