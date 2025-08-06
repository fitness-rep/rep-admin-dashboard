// Pre-built Exercise Plan Templates with Dynamic Day Selection
export const exercisePlanTemplates = {
  // Weight Loss Templates
  'weight-loss-beginner': {
    id: 'weight-loss-beginner',
    name: 'Weight Loss - Beginner',
    goal: 'Fat Loss / Weight Reduction',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly weight loss workout plan focusing on fat burning and building basic strength',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Single-leg Deadlifts', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Jump Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Side Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Donkey Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Single-leg Deadlifts', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Jump Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Side Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Donkey Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Push (Chest/Shoulders/Triceps)',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Close-grip Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Pull (Back/Biceps)',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Single-leg Deadlifts', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Jump Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Side Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Donkey Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stair Climbing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Recovery',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Dead Bug', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Decline Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Diamond Push-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Arms',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Active Recovery',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Light Yoga', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 }
          ]
        }
      ]
    }
  },
  'weight-loss-intermediate': {
    id: 'weight-loss-intermediate',
    name: 'Weight Loss - Intermediate',
    goal: 'Fat Loss / Weight Reduction',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate weight loss plan with higher intensity and more complex movements',
    defaultDays: 4,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'HIIT Cardio',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'Jump Squats', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Strength Training',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body & Core',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'HIIT Cardio',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Push (Chest/Shoulders/Triceps)',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Pull (Back/Biceps)',
          exercises: [
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs & Core',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 45 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'HIIT Cardio',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 45 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'HIIT Cardio',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Back',
          exercises: [
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Shoulders & Arms',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Recovery',
          exercises: [
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 45 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 30 }
          ]
        }
      ]
    }
  },
  'weight-loss-advanced': {
    id: 'weight-loss-advanced',
    name: 'Weight Loss - Advanced',
    goal: 'Fat Loss / Weight Reduction',
    level: 'advanced',
    category: 'system',
    description: 'Advanced weight loss plan with high-intensity training and complex movements',
    defaultDays: 5,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Advanced HIIT',
          exercises: [
            { name: 'Burpee Pull-ups', type: 'bodyweight', sets: 5, reps: 12, duration: 0, rest: 30 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Sprint Intervals', type: 'cardio', sets: 6, reps: 0, duration: 30, rest: 60 },
            { name: 'Plyometric Push-ups', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Advanced Strength',
          exercises: [
            { name: 'Clean & Press', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Snatch', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 120 },
            { name: 'Turkish Get-ups', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Advanced Lower Body & Core',
          exercises: [
            { name: 'Pistol Squats', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Single-leg Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'L-sit Hold', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Dragon Flags', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Advanced HIIT',
          exercises: [
            { name: 'Burpee Pull-ups', type: 'bodyweight', sets: 5, reps: 12, duration: 0, rest: 30 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Sprint Intervals', type: 'cardio', sets: 6, reps: 0, duration: 30, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Advanced Push',
          exercises: [
            { name: 'Clean & Press', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Plyometric Push-ups', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 45 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Advanced Pull',
          exercises: [
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Snatch', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 120 },
            { name: 'Turkish Get-ups', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Advanced Legs & Core',
          exercises: [
            { name: 'Pistol Squats', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Single-leg Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'L-sit Hold', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Advanced HIIT',
          exercises: [
            { name: 'Burpee Pull-ups', type: 'bodyweight', sets: 5, reps: 12, duration: 0, rest: 30 },
            { name: 'Sprint Intervals', type: 'cardio', sets: 6, reps: 0, duration: 30, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Advanced Chest & Triceps',
          exercises: [
            { name: 'Clean & Press', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Plyometric Push-ups', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Advanced Back & Biceps',
          exercises: [
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Snatch', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Advanced Legs',
          exercises: [
            { name: 'Pistol Squats', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Single-leg Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Advanced Core & Recovery',
          exercises: [
            { name: 'L-sit Hold', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Dragon Flags', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Advanced HIIT',
          exercises: [
            { name: 'Burpee Pull-ups', type: 'bodyweight', sets: 5, reps: 12, duration: 0, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Advanced Chest',
          exercises: [
            { name: 'Clean & Press', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Plyometric Push-ups', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Advanced Back',
          exercises: [
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Snatch', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Advanced Legs',
          exercises: [
            { name: 'Pistol Squats', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Single-leg Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Advanced Core',
          exercises: [
            { name: 'L-sit Hold', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Dragon Flags', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Active Recovery',
          exercises: [
            { name: 'Box Jumps', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Turkish Get-ups', type: 'strength', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        }
      ]
    }
  },
  'muscle-gain-beginner': {
    id: 'muscle-gain-beginner',
    name: 'Muscle Gain - Beginner',
    goal: 'Muscle Gain / Strength Building',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly muscle building plan focusing on compound movements and progressive overload',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Push (Chest/Shoulders/Triceps)',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Pull (Back/Biceps)',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body & Core',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 5, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Arms',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Active Recovery',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 30 }
          ]
        }
      ]
    }
  },
  'muscle-gain-intermediate': {
    id: 'muscle-gain-intermediate',
    name: 'Muscle Gain - Intermediate',
    goal: 'Muscle Gain / Strength Building',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate muscle building plan with progressive overload and advanced techniques',
    defaultDays: 4,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 150 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs & Shoulders',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 150 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Shoulders & Arms',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 150 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Triceps',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Arms & Core',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 150 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Recovery',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        }
      ]
    }
  },
  'muscle-gain-advanced': {
    id: 'muscle-gain-advanced',
    name: 'Muscle Gain - Advanced',
    goal: 'Muscle Gain / Strength Building',
    level: 'advanced',
    category: 'system',
    description: 'Advanced muscle building plan with high volume and advanced techniques',
    defaultDays: 5,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Decline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 5, duration: 0, rest: 150 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs & Shoulders',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 5, duration: 0, rest: 150 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Shoulders & Arms',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 60 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 5, duration: 0, rest: 150 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Triceps',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Arms & Core',
          exercises: [
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 5, duration: 0, rest: 150 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Overhead Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 120 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Arms',
          exercises: [
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Recovery',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        }
      ]
    }
  },
  'body-recomp-beginner': {
    id: 'body-recomp-beginner',
    name: 'Body Recomposition - Beginner',
    goal: 'Body Recomposition (Lose fat & build muscle)',
    level: 'beginner',
    category: 'system',
    description: 'Beginner body recomposition plan balancing fat loss and muscle building',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body & Flexibility',
          exercises: [
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Core',
          exercises: [
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body & Arms',
          exercises: [
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Core',
          exercises: [
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Lunges', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Arms & Recovery',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 }
          ]
        }
      ]
    }
  },

  // Muscle Gain Templates
  'muscle-gain-beginner': {
    id: 'muscle-gain-beginner',
    name: 'Muscle Gain - Beginner',
    goal: 'Muscle Gain / Strength Building',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly muscle building workout plan focusing on compound movements',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body Endurance',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body',
          exercises: [
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        }
      ]
    }
  },

  'muscle-gain-intermediate': {
    id: 'muscle-gain-intermediate',
    name: 'Muscle Gain - Intermediate',
    goal: 'Muscle Gain / Strength Building',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate muscle building workout plan with increased volume and intensity',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body Endurance',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Squats', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Dips', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 90, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 60 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Decline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Recovery',
          exercises: [
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 90, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stair Climbing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Decline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Dumbbell Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Decline Dumbbell Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Machine Chest Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Single-arm Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Face Pulls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Arnold Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Reverse Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Military Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'muscle-gain-advanced': {
    id: 'muscle-gain-advanced',
    name: 'Muscle Gain - Advanced',
    goal: 'Muscle Gain / Strength Building',
    level: 'advanced',
    category: 'system',
    description: 'Advanced muscle building workout plan with high volume and intensity',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Power',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body Endurance',
          exercises: [
            { name: 'Weighted Push-ups', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Squats', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 5, reps: 0, duration: 90, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hip Thrusts', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Decline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Cable Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 120 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 60 },
            { name: 'Front Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Shrugs', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Recovery',
          exercises: [
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 5, reps: 0, duration: 90, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stair Climbing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Decline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Cable Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Incline Dumbbell Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Decline Dumbbell Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Machine Chest Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Seated Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Single-arm Dumbbell Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Face Pulls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Front Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Shrugs', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Arnold Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Reverse Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Cable Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Military Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Side Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 60, rest: 90 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'body-recomp-beginner': {
    id: 'body-recomp-beginner',
    name: 'Body Recomposition - Beginner',
    goal: 'Body Recomposition (Lose fat & build muscle)',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly body recomposition plan focusing on fat loss and muscle building',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Single-leg Deadlifts', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Jump Squats', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Side Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Donkey Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Close-grip Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Decline Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Recovery',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Decline Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Cable Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 },
            { name: 'Close-grip Push-ups', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Machine Chest Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Pull-ups', type: 'bodyweight', sets: 3, reps: 6, duration: 0, rest: 90 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Cable Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Single-arm Dumbbell Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Face Pulls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Arnold Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Reverse Flyes', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Lateral Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Military Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Cable Tricep Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 },
            { name: 'Leg Press', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'body-recomp-intermediate': {
    id: 'body-recomp-intermediate',
    name: 'Body Recomposition - Intermediate',
    goal: 'Body Recomposition (Lose fat & build muscle)',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate body recomposition plan with balanced strength and cardio',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 180 },
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 60, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 60 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Core',
          exercises: [
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1500, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 45 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 60, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 60 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 90 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 120 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Decline Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Cable Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 120 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Face Pulls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 60, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 60 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Recovery',
          exercises: [
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 45 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stair Climbing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Decline Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 120 },
            { name: 'Cable Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 90 },
            { name: 'Incline Dumbbell Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Decline Dumbbell Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Machine Chest Press', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 4, reps: 6, duration: 0, rest: 120 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Seated Cable Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Single-arm Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Face Pulls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Front Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Upright Rows', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Shrugs', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Arnold Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 },
            { name: 'Reverse Flyes', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Lateral Raises', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Military Press', type: 'strength', sets: 3, reps: 8, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Tricep Extensions', type: 'strength', sets: 3, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 60, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 30, duration: 0, rest: 60 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 60 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 90 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'body-recomp-advanced': {
    id: 'body-recomp-advanced',
    name: 'Body Recomposition - Advanced',
    goal: 'Body Recomposition (Lose fat & build muscle)',
    level: 'advanced',
    category: 'system',
    description: 'Advanced body recomposition plan with high intensity and complex movements',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Power',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Full Body Hypertrophy',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Full Body Endurance',
          exercises: [
            { name: 'Weighted Push-ups', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Squats', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 5, reps: 0, duration: 90, rest: 60 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Incline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hip Thrusts', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Chest & Triceps',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Decline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Cable Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 120 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back & Biceps',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bicep Curls', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders & Core',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 60 },
            { name: 'Front Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Shrugs', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Cardio & Recovery',
          exercises: [
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Burpees', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Box Jumps', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 120 },
            { name: 'High Knees', type: 'cardio', sets: 5, reps: 0, duration: 90, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stair Climbing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Chest',
          exercises: [
            { name: 'Bench Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Incline Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 180 },
            { name: 'Decline Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Dumbbell Flyes', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Cable Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 120 },
            { name: 'Weighted Push-ups', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Incline Dumbbell Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Decline Dumbbell Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 180 },
            { name: 'Machine Chest Press', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Weighted Dips', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Back',
          exercises: [
            { name: 'Deadlifts', type: 'strength', sets: 5, reps: 6, duration: 0, rest: 180 },
            { name: 'Weighted Pull-ups', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Bent Over Rows', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Lat Pulldowns', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'T-bar Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Dumbbell Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Seated Cable Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Single-arm Dumbbell Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Face Pulls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Shoulders',
          exercises: [
            { name: 'Shoulder Press', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Lateral Raises', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Rear Delt Flyes', type: 'strength', sets: 5, reps: 15, duration: 0, rest: 90 },
            { name: 'Front Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Upright Rows', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Shrugs', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Arnold Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 },
            { name: 'Reverse Flyes', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Cable Lateral Raises', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Military Press', type: 'strength', sets: 4, reps: 8, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Arms',
          exercises: [
            { name: 'Bicep Curls', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 90 },
            { name: 'Weighted Dips', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 90 },
            { name: 'Hammer Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Skull Crushers', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Preacher Curls', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Close-grip Bench', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Concentration Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Overhead Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Cable Curls', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Cable Tricep Extensions', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Legs',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 180 },
            { name: 'Lunges', type: 'strength', sets: 5, reps: 12, duration: 0, rest: 120 },
            { name: 'Romanian Deadlifts', type: 'strength', sets: 5, reps: 8, duration: 0, rest: 120 },
            { name: 'Weighted Calf Raises', type: 'strength', sets: 5, reps: 20, duration: 0, rest: 90 },
            { name: 'Leg Press', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Step-ups', type: 'strength', sets: 5, reps: 10, duration: 0, rest: 120 },
            { name: 'Leg Extensions', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Leg Curls', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 90 },
            { name: 'Hip Thrusts', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Seated Calf Raises', type: 'strength', sets: 4, reps: 20, duration: 0, rest: 90 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Core & Cardio',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 90, rest: 90 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 5, reps: 40, duration: 0, rest: 60 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 5, reps: 15, duration: 0, rest: 60 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 5, reps: 30, duration: 0, rest: 60 },
            { name: 'Side Plank', type: 'bodyweight', sets: 5, reps: 0, duration: 60, rest: 90 },
            { name: 'Running', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Cycling', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Rowing', type: 'cardio', sets: 1, reps: 0, duration: 600, rest: 60 },
            { name: 'Elliptical', type: 'cardio', sets: 1, reps: 0, duration: 900, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'health-wellness-beginner': {
    id: 'health-wellness-beginner',
    name: 'Health & Wellness - Beginner',
    goal: 'Health & Wellness / General Fitness',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly health and wellness plan focusing on overall fitness and well-being',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Bodyweight Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Walking Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 1, reps: 0, duration: 60, rest: 0 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Arm Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 20, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Bodyweight Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Walking Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 20, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Upper Body & Mobility',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body & Balance',
          exercises: [
            { name: 'Bodyweight Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Walking Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core & Stability',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 20, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Bodyweight Squats', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Walking Lunges', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Glute Bridges', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 20, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Balance & Mobility',
          exercises: [
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'health-wellness-intermediate': {
    id: 'health-wellness-intermediate',
    name: 'Health & Wellness - Intermediate',
    goal: 'Health & Wellness / General Fitness',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate health and wellness plan with balanced strength, cardio, and flexibility',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Glute Bridges', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 1, reps: 0, duration: 60, rest: 0 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Arm Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 2, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Upper Body & Mobility',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body & Balance',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core & Stability',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 3, reps: 10, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 3, reps: 12, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Lunges', type: 'strength', sets: 3, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 3, reps: 15, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 3, reps: 0, duration: 30, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 3, reps: 20, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 3, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 3, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 3, reps: 8, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 3, reps: 25, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Balance & Mobility',
          exercises: [
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 3, reps: 0, duration: 45, rest: 60 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  },

  'health-wellness-advanced': {
    id: 'health-wellness-advanced',
    name: 'Health & Wellness - Advanced',
    goal: 'Health & Wellness / General Fitness',
    level: 'advanced',
    category: 'system',
    description: 'Advanced health and wellness plan with comprehensive fitness and mobility training',
    defaultDays: 3,
    dayOptions: {
      3: [
        {
          dayName: 'Monday',
          focus: 'Full Body Strength',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 10, duration: 0, rest: 120 },
            { name: 'Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Glute Bridges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 1, reps: 0, duration: 60, rest: 0 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 60 },
            { name: 'Arm Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 3, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      4: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Core & Balance',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      5: [
        {
          dayName: 'Monday',
          focus: 'Upper Body & Mobility',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body & Balance',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core & Stability',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio & Mobility',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ],
      6: [
        {
          dayName: 'Monday',
          focus: 'Upper Body',
          exercises: [
            { name: 'Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Incline Push-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Wall Push-ups', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Tricep Dips', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Superman', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Bird Dog', type: 'bodyweight', sets: 4, reps: 15, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Tuesday',
          focus: 'Lower Body',
          exercises: [
            { name: 'Squats', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 120 },
            { name: 'Lunges', type: 'strength', sets: 4, reps: 12, duration: 0, rest: 90 },
            { name: 'Glute Bridges', type: 'strength', sets: 4, reps: 15, duration: 0, rest: 60 },
            { name: 'Wall Sit', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Step-ups', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 60 },
            { name: 'Calf Raises', type: 'strength', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Wednesday',
          focus: 'Core',
          exercises: [
            { name: 'Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Russian Twists', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Leg Raises', type: 'bodyweight', sets: 4, reps: 20, duration: 0, rest: 45 },
            { name: 'Bicycle Crunches', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Side Plank', type: 'bodyweight', sets: 4, reps: 0, duration: 45, rest: 60 },
            { name: 'Flutter Kicks', type: 'bodyweight', sets: 4, reps: 25, duration: 0, rest: 45 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Thursday',
          focus: 'Cardio',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1800, rest: 60 },
            { name: 'Jumping Jacks', type: 'cardio', sets: 4, reps: 0, duration: 60, rest: 30 },
            { name: 'High Knees', type: 'cardio', sets: 4, reps: 0, duration: 45, rest: 30 },
            { name: 'Burpees', type: 'bodyweight', sets: 4, reps: 10, duration: 0, rest: 60 },
            { name: 'Mountain Climbers', type: 'bodyweight', sets: 4, reps: 30, duration: 0, rest: 45 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 }
          ]
        },
        {
          dayName: 'Friday',
          focus: 'Balance & Mobility',
          exercises: [
            { name: 'Single Leg Balance', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Heel-to-Toe Walk', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Standing on One Leg', type: 'bodyweight', sets: 4, reps: 0, duration: 60, rest: 60 },
            { name: 'Arm Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Shoulder Rolls', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Neck Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Wrist Stretches', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Hip Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Ankle Circles', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 120, rest: 0 }
          ]
        },
        {
          dayName: 'Saturday',
          focus: 'Recovery & Stretching',
          exercises: [
            { name: 'Walking', type: 'cardio', sets: 1, reps: 0, duration: 1200, rest: 60 },
            { name: 'Stretching', type: 'flexibility', sets: 1, reps: 0, duration: 600, rest: 0 },
            { name: 'Deep Breathing', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 },
            { name: 'Cat-Cow Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Child\'s Pose', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Cobra Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Butterfly Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Hamstring Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Quad Stretch', type: 'flexibility', sets: 4, reps: 0, duration: 30, rest: 30 },
            { name: 'Meditation', type: 'flexibility', sets: 1, reps: 0, duration: 300, rest: 0 }
          ]
        }
      ]
    }
  }
};

// Pre-built Meal Plan Templates
export const mealPlanTemplates = {
  'weight-loss-beginner': {
    id: 'weight-loss-beginner',
    name: 'Weight Loss - Beginner',
    goal: 'Fat Loss / Weight Reduction',
    level: 'beginner',
    category: 'system',
    description: 'Beginner-friendly meal plan focusing on healthy eating habits and portion control',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Egg whites", quantity: "6 large (180g)", calories: 102, protein: 21, carbs: 2, fats: 0 },
            { name: "Oatmeal", quantity: "1/2 cup dry (40g)", calories: 150, protein: 5, carbs: 27, fats: 3 },
            { name: "Blueberries", quantity: "1/2 cup (74g)", calories: 42, protein: 1, carbs: 11, fats: 0 },
            { name: "Almond milk", quantity: "1/2 cup (120ml)", calories: 15, protein: 1, carbs: 1, fats: 1 }
          ], 
          description: "High protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1 cup (245g)", calories: 130, protein: 22, carbs: 9, fats: 0 },
            { name: "Strawberries", quantity: "1 cup (152g)", calories: 49, protein: 1, carbs: 12, fats: 0 },
            { name: "Chia seeds", quantity: "1 tbsp (12g)", calories: 58, protein: 2, carbs: 5, fats: 4 },
            { name: "Honey", quantity: "1 tsp (7g)", calories: 21, protein: 0, carbs: 6, fats: 0 }
          ], 
          description: "Low carb breakfast" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1 scoop (30g)", calories: 120, protein: 24, carbs: 3, fats: 1 },
            { name: "Banana", quantity: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fats: 0 },
            { name: "Spinach", quantity: "1 cup (30g)", calories: 7, protein: 1, carbs: 1, fats: 0 },
            { name: "Almond milk", quantity: "1 cup (240ml)", calories: 30, protein: 1, carbs: 1, fats: 2 }
          ], 
          description: "Protein smoothie" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Egg whites", quantity: "4 large (120g)", calories: 68, protein: 14, carbs: 1, fats: 0 },
            { name: "Spinach", quantity: "1 cup (30g)", calories: 7, protein: 1, carbs: 1, fats: 0 },
            { name: "Mushrooms", quantity: "1/2 cup (35g)", calories: 8, protein: 1, carbs: 1, fats: 0 },
            { name: "Whole grain toast", quantity: "1 slice (28g)", calories: 80, protein: 4, carbs: 15, fats: 1 }
          ], 
          description: "Egg whites with vegetables" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "4 oz (113g)", calories: 165, protein: 31, carbs: 0, fats: 4 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Brown rice", quantity: "1/3 cup cooked (65g)", calories: 72, protein: 2, carbs: 15, fats: 1 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Lean protein with vegetables" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Tuna", quantity: "3 oz (85g)", calories: 100, protein: 22, carbs: 0, fats: 1 },
            { name: "Cherry tomatoes", quantity: "1/2 cup (75g)", calories: 13, protein: 1, carbs: 3, fats: 0 },
            { name: "Balsamic vinegar", quantity: "1 tbsp (15ml)", calories: 14, protein: 0, carbs: 3, fats: 0 }
          ], 
          description: "Salad with protein" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken soup", quantity: "1 cup (240ml)", calories: 120, protein: 15, carbs: 8, fats: 4 },
            { name: "Whole grain crackers", quantity: "6 pieces (30g)", calories: 120, protein: 3, carbs: 20, fats: 4 },
            { name: "Carrots", quantity: "1/2 cup (64g)", calories: 26, protein: 1, carbs: 6, fats: 0 }
          ], 
          description: "Soup with lean meat" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Grilled chicken", quantity: "4 oz (113g)", calories: 165, protein: 31, carbs: 0, fats: 4 },
            { name: "Quinoa", quantity: "1/3 cup cooked (62g)", calories: 74, protein: 3, carbs: 14, fats: 1 },
            { name: "Bell peppers", quantity: "1/2 cup (75g)", calories: 19, protein: 1, carbs: 4, fats: 0 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Grilled chicken with quinoa" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Salmon", quantity: "4 oz (113g)", calories: 206, protein: 23, carbs: 0, fats: 12 },
            { name: "Asparagus", quantity: "1 cup (134g)", calories: 27, protein: 3, carbs: 5, fats: 0 },
            { name: "Sweet potato", quantity: "1/2 medium (60g)", calories: 52, protein: 1, carbs: 12, fats: 0 }
          ], 
          description: "Light protein dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Tofu", quantity: "4 oz (113g)", calories: 88, protein: 10, carbs: 2, fats: 5 },
            { name: "Mixed vegetables", quantity: "1 cup (150g)", calories: 50, protein: 3, carbs: 10, fats: 0 },
            { name: "Brown rice", quantity: "1/3 cup cooked (65g)", calories: 72, protein: 2, carbs: 15, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Vegetable stir-fry" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Cod", quantity: "4 oz (113g)", calories: 96, protein: 21, carbs: 0, fats: 1 },
            { name: "Green beans", quantity: "1 cup (125g)", calories: 31, protein: 2, carbs: 7, fats: 0 },
            { name: "Cauliflower rice", quantity: "1 cup (107g)", calories: 25, protein: 2, carbs: 5, fats: 0 }
          ], 
          description: "Fish with vegetables" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Lean beef", quantity: "3 oz (85g)", calories: 150, protein: 25, carbs: 0, fats: 6 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cucumber", quantity: "1/2 cup (52g)", calories: 8, protein: 0, carbs: 2, fats: 0 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Lean beef with salad" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 1600,
    targetProtein: 120,
    targetCarbs: 120,
    targetFats: 60
  },

  'weight-loss-intermediate': {
    id: 'weight-loss-intermediate',
    name: 'Weight Loss - Intermediate',
    goal: 'Fat Loss / Weight Reduction',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate meal plan with balanced macronutrients and meal timing',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "2 whole (100g)", calories: 140, protein: 12, carbs: 1, fats: 10 },
            { name: "Oatmeal", quantity: "3/4 cup dry (60g)", calories: 225, protein: 8, carbs: 40, fats: 4 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 },
            { name: "Banana", quantity: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fats: 0 }
          ], 
          description: "Protein-rich breakfast bowl" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/4 cup (30g)", calories: 185, protein: 4, carbs: 4, fats: 18 }
          ], 
          description: "Low glycemic breakfast" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1.5 scoops (45g)", calories: 180, protein: 36, carbs: 5, fats: 2 },
            { name: "Spinach", quantity: "2 cups (60g)", calories: 14, protein: 2, carbs: 2, fats: 0 },
            { name: "Frozen berries", quantity: "1 cup (140g)", calories: 80, protein: 1, carbs: 20, fats: 0 },
            { name: "Almond milk", quantity: "1.5 cups (360ml)", calories: 45, protein: 2, carbs: 2, fats: 3 }
          ], 
          description: "Fiber-rich smoothie" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Greek yogurt", quantity: "1 cup (245g)", calories: 130, protein: 22, carbs: 9, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Granola", quantity: "1/4 cup (30g)", calories: 120, protein: 3, carbs: 20, fats: 4 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Greek yogurt with berries" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "5 oz (142g)", calories: 207, protein: 39, carbs: 0, fats: 5 },
            { name: "Brown rice", quantity: "1/2 cup cooked (98g)", calories: 108, protein: 3, carbs: 23, fats: 1 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tsp (6.8g)", calories: 60, protein: 0, carbs: 0, fats: 7 }
          ], 
          description: "Lean protein with complex carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed greens", quantity: "3 cups (90g)", calories: 23, protein: 3, carbs: 5, fats: 0 },
            { name: "Grilled chicken", quantity: "4 oz (113g)", calories: 165, protein: 31, carbs: 0, fats: 4 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Feta cheese", quantity: "1/4 cup (38g)", calories: 100, protein: 5, carbs: 2, fats: 8 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Mediterranean salad" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Turkey breast", quantity: "4 oz (113g)", calories: 140, protein: 28, carbs: 0, fats: 3 },
            { name: "Whole grain tortilla", quantity: "1 large (50g)", calories: 120, protein: 4, carbs: 20, fats: 3 },
            { name: "Mixed vegetables", quantity: "1 cup (150g)", calories: 50, protein: 3, carbs: 10, fats: 0 },
            { name: "Avocado", quantity: "1/4 medium (34g)", calories: 57, protein: 1, carbs: 3, fats: 5 }
          ], 
          description: "Protein-packed wrap" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Quinoa", quantity: "1/2 cup cooked (93g)", calories: 111, protein: 4, carbs: 20, fats: 2 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Chickpeas", quantity: "1/2 cup (82g)", calories: 134, protein: 7, carbs: 22, fats: 2 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Quinoa bowl with vegetables" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Salmon", quantity: "5 oz (142g)", calories: 258, protein: 33, carbs: 0, fats: 15 },
            { name: "Asparagus", quantity: "1.5 cups (201g)", calories: 41, protein: 5, carbs: 8, fats: 0 },
            { name: "Sweet potato", quantity: "1/2 medium (60g)", calories: 52, protein: 1, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Light protein with vegetables" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "4 oz (113g)", calories: 200, protein: 33, carbs: 0, fats: 8 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "1/3 cup cooked (65g)", calories: 72, protein: 2, carbs: 15, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Stir-fry with lean meat" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Cod", quantity: "5 oz (142g)", calories: 120, protein: 26, carbs: 0, fats: 1 },
            { name: "Quinoa", quantity: "1/2 cup cooked (93g)", calories: 111, protein: 4, carbs: 20, fats: 2 },
            { name: "Green beans", quantity: "1.5 cups (188g)", calories: 47, protein: 3, carbs: 11, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Baked fish with quinoa" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "5 oz (142g)", calories: 175, protein: 35, carbs: 0, fats: 4 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Turkey with sweet potato" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 1800,
    targetProtein: 140,
    targetCarbs: 140,
    targetFats: 70
  },

  'weight-loss-advanced': {
    id: 'weight-loss-advanced',
    name: 'Weight Loss - Advanced',
    goal: 'Fat Loss / Weight Reduction',
    level: 'advanced',
    category: 'system',
    description: 'Advanced meal plan with precise macronutrient tracking and meal timing',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "3 whole (150g)", calories: 210, protein: 18, carbs: 2, fats: 15 },
            { name: "Oatmeal", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Almonds", quantity: "1/3 cup (48g)", calories: 275, protein: 10, carbs: 9, fats: 24 },
            { name: "Blueberries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 }
          ], 
          description: "High-protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Avocado", quantity: "1/2 medium (68g)", calories: 114, protein: 1, carbs: 6, fats: 10 },
            { name: "Spinach", quantity: "2 cups (60g)", calories: 14, protein: 2, carbs: 2, fats: 0 },
            { name: "Coconut oil", quantity: "1 tbsp (13.6g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Ketogenic breakfast" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "2 scoops (60g)", calories: 240, protein: 48, carbs: 6, fats: 2 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almond butter", quantity: "2 tbsp (32g)", calories: 190, protein: 7, carbs: 6, fats: 16 },
            { name: "Almond milk", quantity: "2 cups (480ml)", calories: 60, protein: 2, carbs: 2, fats: 4 }
          ], 
          description: "Intermittent fasting breakfast" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Whey protein powder", quantity: "1.5 scoops (45g)", calories: 180, protein: 36, carbs: 5, fats: 2 },
            { name: "MCT oil", quantity: "1 tbsp (14g)", calories: 120, protein: 0, carbs: 0, fats: 14 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 }
          ], 
          description: "Protein shake with healthy fats" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "6 oz (170g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Broccoli", quantity: "2 cups (182g)", calories: 62, protein: 6, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "2 tsp (9g)", calories: 80, protein: 0, carbs: 0, fats: 9 }
          ], 
          description: "Precision nutrition lunch" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Salmon", quantity: "5 oz (142g)", calories: 258, protein: 33, carbs: 0, fats: 15 },
            { name: "Quinoa", quantity: "2/3 cup cooked (124g)", calories: 148, protein: 6, carbs: 27, fats: 3 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Avocado", quantity: "1/4 medium (34g)", calories: 57, protein: 1, carbs: 3, fats: 5 }
          ], 
          description: "Macro-balanced meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Green beans", quantity: "2 cups (250g)", calories: 62, protein: 4, carbs: 14, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Protein-focused plate" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "6 oz (170g)", calories: 210, protein: 42, carbs: 0, fats: 5 },
            { name: "Cauliflower rice", quantity: "2 cups (214g)", calories: 50, protein: 4, carbs: 10, fats: 0 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Coconut oil", quantity: "1 tbsp (13.6g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Low-carb high-protein meal" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Cod", quantity: "6 oz (170g)", calories: 144, protein: 31, carbs: 0, fats: 1 },
            { name: "Asparagus", quantity: "2 cups (268g)", calories: 54, protein: 6, carbs: 10, fats: 0 },
            { name: "Cauliflower rice", quantity: "1.5 cups (161g)", calories: 38, protein: 3, carbs: 8, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Light protein dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed vegetables", quantity: "3 cups (450g)", calories: 150, protein: 9, carbs: 30, fats: 0 },
            { name: "Tofu", quantity: "6 oz (170g)", calories: 132, protein: 15, carbs: 3, fats: 8 },
            { name: "Quinoa", quantity: "1/3 cup cooked (62g)", calories: 74, protein: 3, carbs: 14, fats: 1 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Vegetable-heavy meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "5 oz (142g)", calories: 207, protein: 39, carbs: 0, fats: 5 },
            { name: "Spinach", quantity: "3 cups (90g)", calories: 23, protein: 3, carbs: 5, fats: 0 },
            { name: "Kale", quantity: "2 cups (134g)", calories: 33, protein: 4, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean protein with greens" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Vegetable soup", quantity: "2 cups (480ml)", calories: 120, protein: 8, carbs: 20, fats: 4 },
            { name: "Whole grain bread", quantity: "1 slice (28g)", calories: 80, protein: 4, carbs: 15, fats: 1 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Olive oil", quantity: "1 tsp (4.5g)", calories: 40, protein: 0, carbs: 0, fats: 5 }
          ], 
          description: "Soup-based dinner" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2000,
    targetProtein: 160,
    targetCarbs: 160,
    targetFats: 80
  },

  'muscle-gain-beginner': {
    id: 'muscle-gain-beginner',
    name: 'Muscle Gain - Beginner',
    goal: 'Muscle Gain / Strength Building',
    level: 'beginner',
    category: 'system',
    description: 'Beginner meal plan for muscle building with adequate protein and calories',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Oatmeal", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 }
          ], 
          description: "Protein-rich breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Whey protein powder", quantity: "2 scoops (60g)", calories: 240, protein: 48, carbs: 6, fats: 2 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Peanut butter", quantity: "2 tbsp (32g)", calories: 190, protein: 8, carbs: 6, fats: 16 },
            { name: "Whole milk", quantity: "2 cups (480ml)", calories: 240, protein: 16, carbs: 24, fats: 10 }
          ], 
          description: "High-calorie smoothie" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Eggs", quantity: "3 whole (150g)", calories: 210, protein: 18, carbs: 2, fats: 15 },
            { name: "Whole grain bread", quantity: "2 slices (56g)", calories: 160, protein: 8, carbs: 30, fats: 2 },
            { name: "Avocado", quantity: "1/2 medium (68g)", calories: 114, protein: 1, carbs: 6, fats: 10 },
            { name: "Orange juice", quantity: "1 cup (240ml)", calories: 110, protein: 2, carbs: 26, fats: 0 }
          ], 
          description: "Eggs with whole grains" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Greek yogurt with nuts" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "6 oz (170g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Protein with complex carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "White rice", quantity: "1 cup cooked (158g)", calories: 205, protein: 4, carbs: 45, fats: 0 },
            { name: "Mixed vegetables", quantity: "1 cup (150g)", calories: 50, protein: 3, carbs: 10, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean meat with rice" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "6 oz (170g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Sweet potato", quantity: "1 large (180g)", calories: 162, protein: 4, carbs: 37, fats: 0 },
            { name: "Green beans", quantity: "1 cup (125g)", calories: 31, protein: 2, carbs: 7, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Chicken with sweet potato" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "6 oz (170g)", calories: 309, protein: 40, carbs: 0, fats: 18 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Asparagus", quantity: "1 cup (134g)", calories: 27, protein: 3, carbs: 5, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Fish with quinoa" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Lean beef", quantity: "8 oz (227g)", calories: 400, protein: 67, carbs: 0, fats: 16 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Protein-rich dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean beef with vegetables" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "8 oz (227g)", calories: 412, protein: 53, carbs: 0, fats: 24 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Green beans", quantity: "1.5 cups (188g)", calories: 47, protein: 3, carbs: 11, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Salmon with brown rice" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "8 oz (227g)", calories: 280, protein: 56, carbs: 0, fats: 6 },
            { name: "Whole wheat pasta", quantity: "1 cup cooked (151g)", calories: 174, protein: 7, carbs: 37, fats: 1 },
            { name: "Mixed vegetables", quantity: "1 cup (150g)", calories: 50, protein: 3, carbs: 10, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Turkey with pasta" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2200,
    targetProtein: 160,
    targetCarbs: 200,
    targetFats: 80
  },

  'muscle-gain-intermediate': {
    id: 'muscle-gain-intermediate',
    name: 'Muscle Gain - Intermediate',
    goal: 'Muscle Gain / Strength Building',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate meal plan with strategic nutrient timing for muscle growth',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "5 whole (250g)", calories: 350, protein: 30, carbs: 2, fats: 25 },
            { name: "Oatmeal", quantity: "1.5 cups dry (120g)", calories: 450, protein: 15, carbs: 81, fats: 8 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almonds", quantity: "1/3 cup (48g)", calories: 275, protein: 10, carbs: 9, fats: 24 }
          ], 
          description: "High-protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Whey protein powder", quantity: "2.5 scoops (75g)", calories: 300, protein: 60, carbs: 8, fats: 3 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Peanut butter", quantity: "3 tbsp (48g)", calories: 285, protein: 12, carbs: 9, fats: 24 },
            { name: "Whole milk", quantity: "2.5 cups (600ml)", calories: 300, protein: 20, carbs: 30, fats: 12 }
          ], 
          description: "Calorie-dense smoothie" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Protein pancake mix", quantity: "1 cup (120g)", calories: 400, protein: 30, carbs: 60, fats: 8 },
            { name: "Eggs", quantity: "2 whole (100g)", calories: 140, protein: 12, carbs: 1, fats: 10 },
            { name: "Maple syrup", quantity: "2 tbsp (40g)", calories: 120, protein: 0, carbs: 30, fats: 0 },
            { name: "Butter", quantity: "1 tbsp (14g)", calories: 100, protein: 0, carbs: 0, fats: 11 }
          ], 
          description: "Protein pancakes" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Oatmeal", quantity: "1.5 cups dry (120g)", calories: 450, protein: 15, carbs: 81, fats: 8 },
            { name: "Whey protein powder", quantity: "1 scoop (30g)", calories: 120, protein: 24, carbs: 3, fats: 1 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/4 cup (30g)", calories: 185, protein: 4, carbs: 4, fats: 18 }
          ], 
          description: "Oatmeal with protein" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "8 oz (227g)", calories: 331, protein: 62, carbs: 0, fats: 8 },
            { name: "Brown rice", quantity: "1.5 cups cooked (293g)", calories: 324, protein: 8, carbs: 68, fats: 3 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Protein with healthy carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "8 oz (227g)", calories: 400, protein: 67, carbs: 0, fats: 16 },
            { name: "Sweet potato", quantity: "1.5 large (270g)", calories: 243, protein: 6, carbs: 56, fats: 0 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean meat with complex carbs" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "8 oz (227g)", calories: 331, protein: 62, carbs: 0, fats: 8 },
            { name: "White rice", quantity: "1.5 cups cooked (237g)", calories: 308, protein: 6, carbs: 68, fats: 0 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Chicken with rice and vegetables" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "8 oz (227g)", calories: 412, protein: 53, carbs: 0, fats: 24 },
            { name: "Sweet potato", quantity: "1 large (180g)", calories: 162, protein: 4, carbs: 37, fats: 0 },
            { name: "Green beans", quantity: "1.5 cups (188g)", calories: 47, protein: 3, carbs: 11, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Fish with sweet potato" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Lean beef", quantity: "10 oz (284g)", calories: 500, protein: 84, carbs: 0, fats: 20 },
            { name: "Brown rice", quantity: "1.5 cups cooked (293g)", calories: 324, protein: 8, carbs: 68, fats: 3 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Protein-rich dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "8 oz (227g)", calories: 400, protein: 67, carbs: 0, fats: 16 },
            { name: "Quinoa", quantity: "1.5 cups cooked (278g)", calories: 333, protein: 12, carbs: 59, fats: 6 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean beef with quinoa" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "10 oz (284g)", calories: 515, protein: 66, carbs: 0, fats: 30 },
            { name: "Brown rice", quantity: "1.5 cups cooked (293g)", calories: 324, protein: 8, carbs: 68, fats: 3 },
            { name: "Green beans", quantity: "2 cups (250g)", calories: 62, protein: 4, carbs: 14, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Salmon with brown rice" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "10 oz (284g)", calories: 350, protein: 70, carbs: 0, fats: 8 },
            { name: "Whole wheat pasta", quantity: "1.5 cups cooked (227g)", calories: 261, protein: 11, carbs: 56, fats: 2 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Turkey with pasta" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2500,
    targetProtein: 180,
    targetCarbs: 250,
    targetFats: 90
  },

  'muscle-gain-advanced': {
    id: 'muscle-gain-advanced',
    name: 'Muscle Gain - Advanced',
    goal: 'Muscle Gain / Strength Building',
    level: 'advanced',
    category: 'system',
    description: 'Advanced meal plan with precise macronutrient ratios and timing for maximum muscle growth',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "6 whole (300g)", calories: 420, protein: 36, carbs: 2, fats: 30 },
            { name: "Oatmeal", quantity: "2 cups dry (160g)", calories: 600, protein: 20, carbs: 108, fats: 10 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almonds", quantity: "1/2 cup (72g)", calories: 550, protein: 20, carbs: 18, fats: 48 }
          ], 
          description: "High-protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Whey protein powder", quantity: "3 scoops (90g)", calories: 360, protein: 72, carbs: 9, fats: 3 },
            { name: "Oats", quantity: "1.5 cups dry (120g)", calories: 450, protein: 15, carbs: 81, fats: 8 },
            { name: "Peanut butter", quantity: "4 tbsp (64g)", calories: 380, protein: 16, carbs: 12, fats: 32 },
            { name: "Whole milk", quantity: "3 cups (720ml)", calories: 360, protein: 24, carbs: 36, fats: 15 }
          ], 
          description: "Calorie-dense meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "2 scoops (60g)", calories: 240, protein: 48, carbs: 6, fats: 2 },
            { name: "Oats", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almond milk", quantity: "2 cups (480ml)", calories: 60, protein: 2, carbs: 2, fats: 4 }
          ], 
          description: "Protein shake with oats" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Whole grain bread", quantity: "3 slices (84g)", calories: 240, protein: 12, carbs: 45, fats: 3 },
            { name: "Avocado", quantity: "1 medium (136g)", calories: 228, protein: 3, carbs: 12, fats: 21 },
            { name: "Orange juice", quantity: "1.5 cups (360ml)", calories: 165, protein: 3, carbs: 39, fats: 0 }
          ], 
          description: "Eggs with avocado toast" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "10 oz (284g)", calories: 414, protein: 78, carbs: 0, fats: 10 },
            { name: "Brown rice", quantity: "2 cups cooked (390g)", calories: 432, protein: 10, carbs: 90, fats: 4 },
            { name: "Broccoli", quantity: "2 cups (182g)", calories: 62, protein: 6, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Protein with complex carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "10 oz (284g)", calories: 500, protein: 84, carbs: 0, fats: 20 },
            { name: "White rice", quantity: "2 cups cooked (316g)", calories: 410, protein: 8, carbs: 90, fats: 0 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean meat with rice" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "10 oz (284g)", calories: 414, protein: 78, carbs: 0, fats: 10 },
            { name: "Sweet potato", quantity: "2 large (360g)", calories: 324, protein: 8, carbs: 74, fats: 0 },
            { name: "Green beans", quantity: "2 cups (250g)", calories: 62, protein: 4, carbs: 14, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Chicken with sweet potato" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "10 oz (284g)", calories: 515, protein: 66, carbs: 0, fats: 30 },
            { name: "Quinoa", quantity: "2 cups cooked (370g)", calories: 444, protein: 16, carbs: 78, fats: 8 },
            { name: "Asparagus", quantity: "2 cups (268g)", calories: 54, protein: 6, carbs: 10, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Fish with quinoa" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Lean beef", quantity: "12 oz (340g)", calories: 600, protein: 101, carbs: 0, fats: 24 },
            { name: "Brown rice", quantity: "2 cups cooked (390g)", calories: 432, protein: 10, carbs: 90, fats: 4 },
            { name: "Mixed vegetables", quantity: "2.5 cups (375g)", calories: 125, protein: 8, carbs: 25, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Protein-rich dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "10 oz (284g)", calories: 500, protein: 84, carbs: 0, fats: 20 },
            { name: "Sweet potato", quantity: "1.5 large (270g)", calories: 243, protein: 6, carbs: 56, fats: 0 },
            { name: "Broccoli", quantity: "2 cups (182g)", calories: 62, protein: 6, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean beef with vegetables" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "12 oz (340g)", calories: 618, protein: 79, carbs: 0, fats: 36 },
            { name: "Brown rice", quantity: "2 cups cooked (390g)", calories: 432, protein: 10, carbs: 90, fats: 4 },
            { name: "Green beans", quantity: "2.5 cups (313g)", calories: 78, protein: 5, carbs: 18, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Salmon with brown rice" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "12 oz (340g)", calories: 420, protein: 84, carbs: 0, fats: 10 },
            { name: "Whole wheat pasta", quantity: "2 cups cooked (302g)", calories: 348, protein: 14, carbs: 74, fats: 3 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Turkey with pasta" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2800,
    targetProtein: 200,
    targetCarbs: 300,
    targetFats: 100
  },

  'body-recomp-beginner': {
    id: 'body-recomp-beginner',
    name: 'Body Recomposition - Beginner',
    goal: 'Body Recomposition',
    level: 'beginner',
    category: 'system',
    description: 'Beginner meal plan for simultaneous fat loss and muscle gain',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "3 whole (150g)", calories: 210, protein: 18, carbs: 2, fats: 15 },
            { name: "Oatmeal", quantity: "3/4 cup dry (60g)", calories: 225, protein: 8, carbs: 40, fats: 4 },
            { name: "Banana", quantity: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fats: 0 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 }
          ], 
          description: "Balanced protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Granola", quantity: "1/3 cup (40g)", calories: 160, protein: 4, carbs: 27, fats: 5 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Moderate carb breakfast" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1.5 scoops (45g)", calories: 180, protein: 36, carbs: 5, fats: 2 },
            { name: "Banana", quantity: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fats: 0 },
            { name: "Spinach", quantity: "1 cup (30g)", calories: 7, protein: 1, carbs: 1, fats: 0 },
            { name: "Almond milk", quantity: "1.5 cups (360ml)", calories: 45, protein: 2, carbs: 2, fats: 3 }
          ], 
          description: "Protein smoothie" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Eggs", quantity: "2 whole (100g)", calories: 140, protein: 12, carbs: 1, fats: 10 },
            { name: "Whole grain bread", quantity: "2 slices (56g)", calories: 160, protein: 8, carbs: 30, fats: 2 },
            { name: "Avocado", quantity: "1/4 medium (34g)", calories: 57, protein: 1, carbs: 3, fats: 5 },
            { name: "Orange juice", quantity: "1 cup (240ml)", calories: 110, protein: 2, carbs: 26, fats: 0 }
          ], 
          description: "Eggs with whole grain toast" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "6 oz (170g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "1/2 cup cooked (98g)", calories: 108, protein: 3, carbs: 23, fats: 1 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Protein with vegetables" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "5 oz (142g)", calories: 250, protein: 42, carbs: 0, fats: 10 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean meat with quinoa" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "5 oz (142g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Chicken salad" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "5 oz (142g)", calories: 258, protein: 33, carbs: 0, fats: 15 },
            { name: "Brown rice", quantity: "1/2 cup cooked (98g)", calories: 108, protein: 3, carbs: 23, fats: 1 },
            { name: "Green beans", quantity: "1 cup (125g)", calories: 31, protein: 2, carbs: 7, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Fish with brown rice" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Cod", quantity: "6 oz (170g)", calories: 144, protein: 31, carbs: 0, fats: 1 },
            { name: "Asparagus", quantity: "1.5 cups (201g)", calories: 41, protein: 5, carbs: 8, fats: 0 },
            { name: "Cauliflower rice", quantity: "1 cup (107g)", calories: 25, protein: 2, carbs: 5, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Light protein dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Tofu", quantity: "6 oz (170g)", calories: 132, protein: 15, carbs: 3, fats: 8 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "1/3 cup cooked (65g)", calories: 72, protein: 2, carbs: 15, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Vegetable stir-fry" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Lean beef", quantity: "4 oz (113g)", calories: 200, protein: 33, carbs: 0, fats: 8 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cucumber", quantity: "1/2 cup (52g)", calories: 8, protein: 0, carbs: 2, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean beef with salad" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "5 oz (142g)", calories: 175, protein: 35, carbs: 0, fats: 4 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1/2 medium (60g)", calories: 52, protein: 1, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Turkey with vegetables" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2000,
    targetProtein: 150,
    targetCarbs: 180,
    targetFats: 70
  },

  'body-recomp-intermediate': {
    id: 'body-recomp-intermediate',
    name: 'Body Recomposition - Intermediate',
    goal: 'Body Recomposition',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate meal plan with strategic nutrient timing for body recomposition',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Oatmeal", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almonds", quantity: "1/3 cup (48g)", calories: 275, protein: 10, carbs: 9, fats: 24 }
          ], 
          description: "Protein-rich breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Balanced macronutrients" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1.5 scoops (45g)", calories: 180, protein: 36, carbs: 5, fats: 2 },
            { name: "Oats", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Banana", quantity: "1 medium (118g)", calories: 105, protein: 1, carbs: 27, fats: 0 },
            { name: "Almond milk", quantity: "1.5 cups (360ml)", calories: 45, protein: 2, carbs: 2, fats: 3 }
          ], 
          description: "Protein smoothie with oats" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Greek yogurt", quantity: "1 cup (245g)", calories: 130, protein: 22, carbs: 9, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Greek yogurt with berries" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "7 oz (198g)", calories: 289, protein: 54, carbs: 0, fats: 7 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Protein with complex carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean meat with vegetables" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "7 oz (198g)", calories: 289, protein: 54, carbs: 0, fats: 7 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Mixed vegetables", quantity: "1.5 cups (225g)", calories: 75, protein: 5, carbs: 15, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Chicken with quinoa" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "6 oz (170g)", calories: 309, protein: 40, carbs: 0, fats: 18 },
            { name: "Sweet potato", quantity: "1 large (180g)", calories: 162, protein: 4, carbs: 37, fats: 0 },
            { name: "Green beans", quantity: "1.5 cups (188g)", calories: 47, protein: 3, carbs: 11, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Fish with sweet potato" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Lean beef", quantity: "8 oz (227g)", calories: 400, protein: 67, carbs: 0, fats: 16 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Protein-rich dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Broccoli", quantity: "1.5 cups (137g)", calories: 47, protein: 5, carbs: 9, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean beef with vegetables" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "8 oz (227g)", calories: 412, protein: 53, carbs: 0, fats: 24 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Green beans", quantity: "1.5 cups (188g)", calories: 47, protein: 3, carbs: 11, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Salmon with brown rice" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "7 oz (198g)", calories: 245, protein: 49, carbs: 0, fats: 6 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Turkey with salad" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2200,
    targetProtein: 170,
    targetCarbs: 200,
    targetFats: 80
  },

  'body-recomp-advanced': {
    id: 'body-recomp-advanced',
    name: 'Body Recomposition - Advanced',
    goal: 'Body Recomposition',
    level: 'advanced',
    category: 'system',
    description: 'Advanced meal plan with precise macronutrient cycling for optimal body recomposition',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "5 whole (250g)", calories: 350, protein: 30, carbs: 2, fats: 25 },
            { name: "Oatmeal", quantity: "1.25 cups dry (100g)", calories: 375, protein: 12, carbs: 68, fats: 6 },
            { name: "Banana", quantity: "1 large (136g)", calories: 121, protein: 1, carbs: 31, fats: 0 },
            { name: "Almonds", quantity: "1/3 cup (48g)", calories: 275, protein: 10, carbs: 9, fats: 24 }
          ], 
          description: "High-protein breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "2 cups (490g)", calories: 260, protein: 44, carbs: 18, fats: 0 },
            { name: "Mixed berries", quantity: "1.5 cups (222g)", calories: 128, protein: 2, carbs: 32, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Macro-balanced meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "2 scoops (60g)", calories: 240, protein: 48, carbs: 6, fats: 2 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 },
            { name: "Almond milk", quantity: "2 cups (480ml)", calories: 60, protein: 2, carbs: 2, fats: 4 }
          ], 
          description: "Protein shake with healthy fats" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Avocado", quantity: "1/2 medium (68g)", calories: 114, protein: 1, carbs: 6, fats: 10 },
            { name: "Whole grain bread", quantity: "2 slices (56g)", calories: 160, protein: 8, carbs: 30, fats: 2 },
            { name: "Orange juice", quantity: "1 cup (240ml)", calories: 110, protein: 2, carbs: 26, fats: 0 }
          ], 
          description: "Eggs with avocado" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "8 oz (227g)", calories: 331, protein: 62, carbs: 0, fats: 8 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Broccoli", quantity: "2 cups (182g)", calories: 62, protein: 6, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Protein with complex carbs" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "7 oz (198g)", calories: 350, protein: 58, carbs: 0, fats: 14 },
            { name: "Quinoa", quantity: "1.5 cups cooked (278g)", calories: 333, protein: 12, carbs: 59, fats: 6 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean meat with quinoa" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Chicken breast", quantity: "8 oz (227g)", calories: 331, protein: 62, carbs: 0, fats: 8 },
            { name: "Sweet potato", quantity: "1.5 large (270g)", calories: 243, protein: 6, carbs: 56, fats: 0 },
            { name: "Green beans", quantity: "2 cups (250g)", calories: 62, protein: 4, carbs: 14, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Chicken with sweet potato" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "7 oz (198g)", calories: 360, protein: 46, carbs: 0, fats: 21 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Asparagus", quantity: "2 cups (268g)", calories: 54, protein: 6, carbs: 10, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Fish with brown rice" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Lean beef", quantity: "9 oz (255g)", calories: 450, protein: 76, carbs: 0, fats: 18 },
            { name: "Brown rice", quantity: "1 cup cooked (195g)", calories: 216, protein: 5, carbs: 45, fats: 2 },
            { name: "Mixed vegetables", quantity: "2.5 cups (375g)", calories: 125, protein: 8, carbs: 25, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Protein-rich dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "7 oz (198g)", calories: 350, protein: 58, carbs: 0, fats: 14 },
            { name: "Sweet potato", quantity: "1.5 large (270g)", calories: 243, protein: 6, carbs: 56, fats: 0 },
            { name: "Broccoli", quantity: "2 cups (182g)", calories: 62, protein: 6, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean beef with vegetables" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "9 oz (255g)", calories: 463, protein: 59, carbs: 0, fats: 27 },
            { name: "Quinoa", quantity: "1.5 cups cooked (278g)", calories: 333, protein: 12, carbs: 59, fats: 6 },
            { name: "Green beans", quantity: "2 cups (250g)", calories: 62, protein: 4, carbs: 14, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Salmon with quinoa" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Turkey breast", quantity: "8 oz (227g)", calories: 280, protein: 56, carbs: 0, fats: 8 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Turkey with salad" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2400,
    targetProtein: 190,
    targetCarbs: 220,
    targetFats: 90
  },

  'health-wellness-beginner': {
    id: 'health-wellness-beginner',
    name: 'Health & Wellness - Beginner',
    goal: 'Health & Wellness',
    level: 'beginner',
    category: 'system',
    description: 'Beginner meal plan focusing on overall health and balanced nutrition',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "2 whole (100g)", calories: 140, protein: 12, carbs: 1, fats: 10 },
            { name: "Oatmeal", quantity: "1/2 cup dry (40g)", calories: 150, protein: 5, carbs: 27, fats: 3 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 }
          ], 
          description: "Balanced breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Whole grain bread", quantity: "2 slices (56g)", calories: 160, protein: 8, carbs: 30, fats: 2 },
            { name: "Avocado", quantity: "1/4 medium (34g)", calories: 57, protein: 1, carbs: 3, fats: 5 },
            { name: "Eggs", quantity: "1 whole (50g)", calories: 70, protein: 6, carbs: 1, fats: 5 },
            { name: "Orange juice", quantity: "1 cup (240ml)", calories: 110, protein: 2, carbs: 26, fats: 0 }
          ], 
          description: "Whole grain breakfast" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Greek yogurt", quantity: "1 cup (245g)", calories: 130, protein: 22, carbs: 9, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 },
            { name: "Granola", quantity: "1/4 cup (30g)", calories: 120, protein: 3, carbs: 20, fats: 4 }
          ], 
          description: "Fruit and yogurt" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Oatmeal", quantity: "1/2 cup dry (40g)", calories: 150, protein: 5, carbs: 27, fats: 3 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Oatmeal with berries" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "5 oz (142g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "1/2 cup cooked (98g)", calories: 108, protein: 3, carbs: 23, fats: 1 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Balanced lunch" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Cucumber", quantity: "1 cup (104g)", calories: 16, protein: 1, carbs: 4, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Vegetable-rich meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Lean beef", quantity: "4 oz (113g)", calories: 200, protein: 33, carbs: 0, fats: 8 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean protein with grains" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "5 oz (142g)", calories: 258, protein: 33, carbs: 0, fats: 15 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1/2 medium (60g)", calories: 52, protein: 1, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Mediterranean-style meal" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Cod", quantity: "5 oz (142g)", calories: 120, protein: 26, carbs: 0, fats: 1 },
            { name: "Asparagus", quantity: "1 cup (134g)", calories: 27, protein: 3, carbs: 5, fats: 0 },
            { name: "Cauliflower rice", quantity: "1 cup (107g)", calories: 25, protein: 2, carbs: 5, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Light balanced dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed vegetables", quantity: "2.5 cups (375g)", calories: 125, protein: 8, carbs: 25, fats: 0 },
            { name: "Tofu", quantity: "4 oz (113g)", calories: 88, protein: 10, carbs: 2, fats: 5 },
            { name: "Brown rice", quantity: "1/3 cup cooked (65g)", calories: 72, protein: 2, carbs: 15, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Vegetable stir-fry" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "5 oz (142g)", calories: 258, protein: 33, carbs: 0, fats: 15 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1/2 medium (60g)", calories: 52, protein: 1, carbs: 12, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Grilled fish with vegetables" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Lean beef", quantity: "4 oz (113g)", calories: 200, protein: 33, carbs: 0, fats: 8 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1 tbsp (13.5g)", calories: 120, protein: 0, carbs: 0, fats: 14 }
          ], 
          description: "Lean meat with salad" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 1800,
    targetProtein: 120,
    targetCarbs: 180,
    targetFats: 70
  },

  'health-wellness-intermediate': {
    id: 'health-wellness-intermediate',
    name: 'Health & Wellness - Intermediate',
    goal: 'Health & Wellness',
    level: 'intermediate',
    category: 'system',
    description: 'Intermediate meal plan with focus on nutrient density and variety',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "3 whole (150g)", calories: 210, protein: 18, carbs: 2, fats: 15 },
            { name: "Oatmeal", quantity: "3/4 cup dry (60g)", calories: 225, protein: 8, carbs: 40, fats: 4 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Almonds", quantity: "1/4 cup (36g)", calories: 206, protein: 8, carbs: 7, fats: 18 }
          ], 
          description: "Nutrient-dense breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Protein-rich meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1 scoop (30g)", calories: 120, protein: 24, carbs: 3, fats: 1 },
            { name: "Spinach", quantity: "1 cup (30g)", calories: 7, protein: 1, carbs: 1, fats: 0 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 },
            { name: "Almond milk", quantity: "1.5 cups (360ml)", calories: 45, protein: 2, carbs: 2, fats: 3 }
          ], 
          description: "Fiber-rich smoothie" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Greek yogurt", quantity: "1 cup (245g)", calories: 130, protein: 22, carbs: 9, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Greek yogurt with nuts" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "6 oz (170g)", calories: 248, protein: 47, carbs: 0, fats: 6 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Balanced protein meal" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Cucumber", quantity: "1 cup (104g)", calories: 16, protein: 1, carbs: 4, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Vegetable-rich plate" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Lean beef", quantity: "5 oz (142g)", calories: 250, protein: 42, carbs: 0, fats: 10 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Broccoli", quantity: "1 cup (91g)", calories: 31, protein: 3, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean meat with quinoa" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "6 oz (170g)", calories: 309, protein: 40, carbs: 0, fats: 18 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Fish with vegetables" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Cod", quantity: "6 oz (170g)", calories: 144, protein: 31, carbs: 0, fats: 1 },
            { name: "Asparagus", quantity: "1.5 cups (201g)", calories: 41, protein: 5, carbs: 8, fats: 0 },
            { name: "Cauliflower rice", quantity: "1 cup (107g)", calories: 25, protein: 2, carbs: 5, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Light protein dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed vegetables", quantity: "2.5 cups (375g)", calories: 125, protein: 8, carbs: 25, fats: 0 },
            { name: "Tofu", quantity: "5 oz (142g)", calories: 110, protein: 13, carbs: 3, fats: 6 },
            { name: "Brown rice", quantity: "1/2 cup cooked (98g)", calories: 108, protein: 3, carbs: 23, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Vegetable-heavy meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Turkey breast", quantity: "5 oz (142g)", calories: 175, protein: 35, carbs: 0, fats: 4 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "1.5 tbsp (20g)", calories: 180, protein: 0, carbs: 0, fats: 20 }
          ], 
          description: "Lean protein with greens" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Chicken soup", quantity: "1.5 cups (360ml)", calories: 180, protein: 23, carbs: 12, fats: 6 },
            { name: "Whole grain crackers", quantity: "8 pieces (40g)", calories: 160, protein: 4, carbs: 27, fats: 5 },
            { name: "Carrots", quantity: "1 cup (128g)", calories: 52, protein: 2, carbs: 12, fats: 0 }
          ], 
          description: "Soup-based dinner" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2000,
    targetProtein: 140,
    targetCarbs: 200,
    targetFats: 80
  },

  'health-wellness-advanced': {
    id: 'health-wellness-advanced',
    name: 'Health & Wellness - Advanced',
    goal: 'Health & Wellness',
    level: 'advanced',
    category: 'system',
    description: 'Advanced meal plan with optimal nutrient timing and variety for peak health',
    mealOptions: {
      breakfast: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Eggs", quantity: "4 whole (200g)", calories: 280, protein: 24, carbs: 2, fats: 20 },
            { name: "Oatmeal", quantity: "1 cup dry (80g)", calories: 300, protein: 10, carbs: 54, fats: 5 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Almonds", quantity: "1/3 cup (48g)", calories: 275, protein: 10, carbs: 9, fats: 24 }
          ], 
          description: "Optimal nutrition breakfast" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Greek yogurt", quantity: "1.5 cups (368g)", calories: 195, protein: 33, carbs: 14, fats: 0 },
            { name: "Mixed berries", quantity: "1 cup (148g)", calories: 85, protein: 1, carbs: 21, fats: 0 },
            { name: "Walnuts", quantity: "1/3 cup (40g)", calories: 247, protein: 6, carbs: 5, fats: 24 },
            { name: "Honey", quantity: "1 tbsp (21g)", calories: 64, protein: 0, carbs: 17, fats: 0 }
          ], 
          description: "Anti-inflammatory meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Whey protein powder", quantity: "1.5 scoops (45g)", calories: 180, protein: 36, carbs: 5, fats: 2 },
            { name: "Spinach", quantity: "1 cup (30g)", calories: 7, protein: 1, carbs: 1, fats: 0 },
            { name: "Chia seeds", quantity: "2 tbsp (24g)", calories: 116, protein: 4, carbs: 10, fats: 8 },
            { name: "Almond milk", quantity: "1.5 cups (360ml)", calories: 45, protein: 2, carbs: 2, fats: 3 }
          ], 
          description: "Gut-healthy smoothie" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Eggs", quantity: "3 whole (150g)", calories: 210, protein: 18, carbs: 2, fats: 15 },
            { name: "Avocado", quantity: "1/2 medium (68g)", calories: 114, protein: 1, carbs: 6, fats: 10 },
            { name: "Whole grain bread", quantity: "2 slices (56g)", calories: 160, protein: 8, carbs: 30, fats: 2 },
            { name: "Orange juice", quantity: "1 cup (240ml)", calories: 110, protein: 2, carbs: 26, fats: 0 }
          ], 
          description: "Protein with healthy fats" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your breakfast", isCustom: true }
      ],
      lunch: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Chicken breast", quantity: "7 oz (198g)", calories: 289, protein: 54, carbs: 0, fats: 7 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Nutrient-dense lunch" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Lean beef", quantity: "6 oz (170g)", calories: 300, protein: 50, carbs: 0, fats: 12 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Balanced macronutrients" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Salmon", quantity: "7 oz (198g)", calories: 360, protein: 46, carbs: 0, fats: 21 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1 large (180g)", calories: 162, protein: 4, carbs: 37, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean protein with vegetables" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "6 oz (170g)", calories: 309, protein: 40, carbs: 0, fats: 18 },
            { name: "Quinoa", quantity: "1 cup cooked (185g)", calories: 222, protein: 8, carbs: 39, fats: 4 },
            { name: "Asparagus", quantity: "1.5 cups (201g)", calories: 41, protein: 5, carbs: 8, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Fish with quinoa" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your lunch", isCustom: true }
      ],
      dinner: [
        { 
          id: 1, 
          name: "Option 1", 
          foods: [
            { name: "Cod", quantity: "7 oz (198g)", calories: 168, protein: 36, carbs: 0, fats: 1 },
            { name: "Asparagus", quantity: "2 cups (268g)", calories: 54, protein: 6, carbs: 10, fats: 0 },
            { name: "Cauliflower rice", quantity: "1 cup (107g)", calories: 25, protein: 2, carbs: 5, fats: 0 },
            { name: "Lemon juice", quantity: "1 tbsp (15ml)", calories: 4, protein: 0, carbs: 1, fats: 0 }
          ], 
          description: "Light balanced dinner" 
        },
        { 
          id: 2, 
          name: "Option 2", 
          foods: [
            { name: "Mixed vegetables", quantity: "3 cups (450g)", calories: 150, protein: 10, carbs: 30, fats: 0 },
            { name: "Tofu", quantity: "6 oz (170g)", calories: 132, protein: 15, carbs: 3, fats: 8 },
            { name: "Brown rice", quantity: "2/3 cup cooked (130g)", calories: 144, protein: 4, carbs: 30, fats: 1 },
            { name: "Soy sauce", quantity: "1 tbsp (15ml)", calories: 8, protein: 1, carbs: 1, fats: 0 }
          ], 
          description: "Vegetable-rich meal" 
        },
        { 
          id: 3, 
          name: "Option 3", 
          foods: [
            { name: "Turkey breast", quantity: "6 oz (170g)", calories: 210, protein: 42, carbs: 0, fats: 5 },
            { name: "Mixed greens", quantity: "2 cups (60g)", calories: 15, protein: 2, carbs: 3, fats: 0 },
            { name: "Cherry tomatoes", quantity: "1 cup (149g)", calories: 27, protein: 1, carbs: 6, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Lean protein with greens" 
        },
        { 
          id: 4, 
          name: "Option 4", 
          foods: [
            { name: "Salmon", quantity: "6 oz (170g)", calories: 309, protein: 40, carbs: 0, fats: 18 },
            { name: "Mixed vegetables", quantity: "2 cups (300g)", calories: 100, protein: 6, carbs: 20, fats: 0 },
            { name: "Sweet potato", quantity: "1 medium (114g)", calories: 103, protein: 2, carbs: 24, fats: 0 },
            { name: "Olive oil", quantity: "2 tbsp (27g)", calories: 240, protein: 0, carbs: 0, fats: 27 }
          ], 
          description: "Anti-inflammatory dinner" 
        },
        { id: 5, name: "Create Your Own", foods: [], description: "Customize your dinner", isCustom: true }
      ]
    },
    targetCalories: 2200,
    targetProtein: 160,
    targetCarbs: 220,
    targetFats: 90
  }
};

// Helper functions
export const getTemplatesByGoal = (goal, level = null) => {
  const templates = [];
  
  Object.values(exercisePlanTemplates).forEach(template => {
    if (template.goal === goal && (!level || template.level === level)) {
      templates.push(template);
    }
  });
  
  return templates;
};

export const getAllTemplates = () => {
  return {
    exercise: Object.values(exercisePlanTemplates),
    meal: Object.values(mealPlanTemplates)
  };
}; 