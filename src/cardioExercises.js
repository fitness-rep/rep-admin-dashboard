// CARDIO EXERCISES (Primary: Cardiovascular System) - 50+ exercises

export const cardioExercises = [
  // RUNNING & JOGGING
  {
    name: "Running",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Start with a light warm-up\n2. Maintain proper running form\n3. Keep steady pace\n4. Focus on breathing rhythm",
    sets: "1",
    reps: "20-60 minutes",
    calories: 15
  },
  {
    name: "Jogging",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Start with a light warm-up\n2. Maintain comfortable pace\n3. Keep steady rhythm\n4. Focus on breathing",
    sets: "1",
    reps: "15-45 minutes",
    calories: 12
  },
  {
    name: "Sprint Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Sprint for 30 seconds\n2. Walk/jog for 90 seconds\n3. Repeat 8-12 times\n4. Focus on maximum effort",
    sets: "8-12",
    reps: "30 seconds sprint, 90 seconds rest",
    calories: 20
  },
  {
    name: "Tempo Running",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Warm up for 10 minutes\n2. Run at tempo pace for 20-30 minutes\n3. Cool down for 10 minutes\n4. Maintain challenging but sustainable pace",
    sets: "1",
    reps: "20-30 minutes",
    calories: 18
  },
  {
    name: "Long Distance Running",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Start with proper warm-up\n2. Maintain steady pace\n3. Stay hydrated\n4. Focus on endurance",
    sets: "1",
    reps: "60+ minutes",
    calories: 16
  },

  // CYCLING
  {
    name: "Cycling",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bicycle"],
    difficulty: "beginner",
    instructions: "1. Adjust seat height properly\n2. Maintain steady cadence\n3. Keep proper posture\n4. Focus on smooth pedaling",
    sets: "1",
    reps: "30-60 minutes",
    calories: 14
  },
  {
    name: "Indoor Cycling",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["stationary bike"],
    difficulty: "beginner",
    instructions: "1. Adjust seat and handlebars\n2. Maintain steady cadence\n3. Keep proper posture\n4. Focus on smooth pedaling",
    sets: "1",
    reps: "30-60 minutes",
    calories: 14
  },
  {
    name: "Cycling Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bicycle", "stationary bike"],
    difficulty: "intermediate",
    instructions: "1. Warm up for 10 minutes\n2. Cycle hard for 2 minutes\n3. Cycle easy for 2 minutes\n4. Repeat 10-15 times",
    sets: "10-15",
    reps: "2 minutes hard, 2 minutes easy",
    calories: 18
  },
  {
    name: "Hill Cycling",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bicycle"],
    difficulty: "advanced",
    instructions: "1. Find hilly route\n2. Maintain steady effort uphill\n3. Recover on downhills\n4. Focus on climbing technique",
    sets: "1",
    reps: "45-90 minutes",
    calories: 16
  },

  // SWIMMING
  {
    name: "Swimming",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "intermediate",
    instructions: "1. Start with proper warm-up\n2. Maintain good form\n3. Focus on breathing\n4. Keep steady pace",
    sets: "1",
    reps: "20-45 minutes",
    calories: 15
  },
  {
    name: "Freestyle Swimming",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper stroke form\n2. Focus on breathing rhythm\n3. Keep steady pace\n4. Use full body rotation",
    sets: "1",
    reps: "20-45 minutes",
    calories: 16
  },
  {
    name: "Breaststroke",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "beginner",
    instructions: "1. Maintain proper stroke form\n2. Focus on breathing timing\n3. Keep steady pace\n4. Use coordinated arm and leg movement",
    sets: "1",
    reps: "20-45 minutes",
    calories: 14
  },
  {
    name: "Backstroke",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper stroke form\n2. Focus on breathing rhythm\n3. Keep steady pace\n4. Use full body rotation",
    sets: "1",
    reps: "20-45 minutes",
    calories: 15
  },
  {
    name: "Butterfly Stroke",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "advanced",
    instructions: "1. Maintain proper stroke form\n2. Focus on breathing timing\n3. Keep steady pace\n4. Use coordinated dolphin kick",
    sets: "1",
    reps: "15-30 minutes",
    calories: 18
  },
  {
    name: "Swimming Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "advanced",
    instructions: "1. Swim hard for 50-100m\n2. Rest for 30-60 seconds\n3. Repeat 10-20 times\n4. Focus on maximum effort",
    sets: "10-20",
    reps: "50-100m hard, 30-60 seconds rest",
    calories: 20
  },

  // ROWING
  {
    name: "Rowing",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["rowing machine"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper form\n2. Use full range of motion\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-45 minutes",
    calories: 15
  },
  {
    name: "Rowing Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["rowing machine"],
    difficulty: "advanced",
    instructions: "1. Row hard for 1-2 minutes\n2. Row easy for 1-2 minutes\n3. Repeat 10-15 times\n4. Focus on maximum effort",
    sets: "10-15",
    reps: "1-2 minutes hard, 1-2 minutes easy",
    calories: 18
  },
  {
    name: "Rowing Sprints",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["rowing machine"],
    difficulty: "advanced",
    instructions: "1. Row maximum effort for 30 seconds\n2. Rest for 90 seconds\n3. Repeat 8-12 times\n4. Focus on power output",
    sets: "8-12",
    reps: "30 seconds max effort, 90 seconds rest",
    calories: 20
  },

  // ELLIPTICAL
  {
    name: "Elliptical Training",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["elliptical machine"],
    difficulty: "beginner",
    instructions: "1. Maintain proper posture\n2. Use full range of motion\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-45 minutes",
    calories: 12
  },
  {
    name: "Elliptical Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["elliptical machine"],
    difficulty: "intermediate",
    instructions: "1. Work hard for 2 minutes\n2. Recover for 2 minutes\n3. Repeat 10-15 times\n4. Focus on intensity",
    sets: "10-15",
    reps: "2 minutes hard, 2 minutes easy",
    calories: 16
  },

  // STAIRMASTER
  {
    name: "StairMaster",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["stairmaster"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper posture\n2. Use full step motion\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-45 minutes",
    calories: 15
  },
  {
    name: "StairMaster Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["stairmaster"],
    difficulty: "advanced",
    instructions: "1. Climb hard for 2 minutes\n2. Climb easy for 2 minutes\n3. Repeat 10-15 times\n4. Focus on intensity",
    sets: "10-15",
    reps: "2 minutes hard, 2 minutes easy",
    calories: 17
  },

  // JUMPING ROPE
  {
    name: "Jump Rope",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["jump rope"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper form\n2. Keep steady rhythm\n3. Focus on breathing\n4. Use proper rope length",
    sets: "1",
    reps: "10-30 minutes",
    calories: 16
  },
  {
    name: "Jump Rope Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["jump rope"],
    difficulty: "advanced",
    instructions: "1. Jump fast for 30 seconds\n2. Jump slow for 30 seconds\n3. Repeat 20-30 times\n4. Focus on speed",
    sets: "20-30",
    reps: "30 seconds fast, 30 seconds slow",
    calories: 18
  },
  {
    name: "Double Unders",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["jump rope"],
    difficulty: "advanced",
    instructions: "1. Jump higher than normal\n2. Spin rope twice per jump\n3. Maintain rhythm\n4. Focus on coordination",
    sets: "1",
    reps: "5-15 minutes",
    calories: 20
  },

  // HIGH INTENSITY INTERVAL TRAINING (HIIT)
  {
    name: "HIIT Workout",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Work hard for 30 seconds\n2. Rest for 30 seconds\n3. Repeat 10-20 times\n4. Focus on maximum effort",
    sets: "10-20",
    reps: "30 seconds work, 30 seconds rest",
    calories: 20
  },
  {
    name: "Tabata Training",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "advanced",
    instructions: "1. Work hard for 20 seconds\n2. Rest for 10 seconds\n3. Repeat 8 times per exercise\n4. Focus on maximum effort",
    sets: "8",
    reps: "20 seconds work, 10 seconds rest",
    calories: 22
  },
  {
    name: "Circuit Training",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight", "dumbbells"],
    difficulty: "intermediate",
    instructions: "1. Perform 5-10 exercises\n2. Move quickly between exercises\n3. Rest 1-2 minutes between rounds\n4. Complete 3-5 rounds",
    sets: "3-5",
    reps: "5-10 exercises per round",
    calories: 18
  },

  // DANCE & AEROBICS
  {
    name: "Zumba",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Follow dance moves\n2. Keep moving throughout\n3. Focus on rhythm\n4. Have fun while exercising",
    sets: "1",
    reps: "45-60 minutes",
    calories: 12
  },
  {
    name: "Aerobic Dance",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Follow choreographed moves\n2. Keep steady pace\n3. Focus on coordination\n4. Maintain energy throughout",
    sets: "1",
    reps: "30-60 minutes",
    calories: 11
  },
  {
    name: "Hip Hop Dance",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    instructions: "1. Follow dance moves\n2. Keep rhythm and timing\n3. Focus on coordination\n4. Maintain energy throughout",
    sets: "1",
    reps: "30-60 minutes",
    calories: 13
  },

  // SPORTS
  {
    name: "Basketball",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["basketball", "court"],
    difficulty: "intermediate",
    instructions: "1. Play full court game\n2. Maintain constant movement\n3. Focus on teamwork\n4. Keep intensity high",
    sets: "1",
    reps: "30-60 minutes",
    calories: 16
  },
  {
    name: "Soccer",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["soccer ball", "field"],
    difficulty: "intermediate",
    instructions: "1. Play full field game\n2. Maintain constant movement\n3. Focus on teamwork\n4. Keep intensity high",
    sets: "1",
    reps: "45-90 minutes",
    calories: 15
  },
  {
    name: "Tennis",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["tennis racket", "tennis ball", "court"],
    difficulty: "intermediate",
    instructions: "1. Play singles or doubles\n2. Maintain constant movement\n3. Focus on technique\n4. Keep intensity high",
    sets: "1",
    reps: "30-90 minutes",
    calories: 14
  },
  {
    name: "Racquetball",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["racquetball racket", "ball", "court"],
    difficulty: "intermediate",
    instructions: "1. Play singles or doubles\n2. Maintain constant movement\n3. Focus on quick reactions\n4. Keep intensity high",
    sets: "1",
    reps: "30-60 minutes",
    calories: 16
  },
  {
    name: "Volleyball",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["volleyball", "net", "court"],
    difficulty: "intermediate",
    instructions: "1. Play full game\n2. Maintain constant movement\n3. Focus on teamwork\n4. Keep intensity high",
    sets: "1",
    reps: "45-90 minutes",
    calories: 13
  },

  // MARTIAL ARTS
  {
    name: "Kickboxing",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight", "punching bag"],
    difficulty: "intermediate",
    instructions: "1. Perform punching and kicking combinations\n2. Maintain constant movement\n3. Focus on technique\n4. Keep intensity high",
    sets: "1",
    reps: "30-60 minutes",
    calories: 17
  },
  {
    name: "Boxing",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["boxing gloves", "punching bag"],
    difficulty: "intermediate",
    instructions: "1. Perform punching combinations\n2. Maintain footwork\n3. Focus on technique\n4. Keep intensity high",
    sets: "1",
    reps: "30-60 minutes",
    calories: 16
  },
  {
    name: "Muay Thai",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight", "punching bag"],
    difficulty: "advanced",
    instructions: "1. Perform punching, kicking, and knee combinations\n2. Maintain constant movement\n3. Focus on technique\n4. Keep intensity high",
    sets: "1",
    reps: "30-60 minutes",
    calories: 18
  },

  // OUTDOOR ACTIVITIES
  {
    name: "Hiking",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Choose appropriate trail\n2. Maintain steady pace\n3. Stay hydrated\n4. Focus on endurance",
    sets: "1",
    reps: "1-4 hours",
    calories: 12
  },
  {
    name: "Rock Climbing",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["climbing gear"],
    difficulty: "advanced",
    instructions: "1. Use proper safety equipment\n2. Maintain steady pace\n3. Focus on technique\n4. Build endurance gradually",
    sets: "1",
    reps: "1-3 hours",
    calories: 15
  },
  {
    name: "Cross Country Skiing",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["skis", "poles"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper technique\n2. Keep steady pace\n3. Focus on coordination\n4. Build endurance gradually",
    sets: "1",
    reps: "30-90 minutes",
    calories: 16
  },
  {
    name: "Rowing (Outdoor)",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["rowing boat", "oars"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper technique\n2. Keep steady pace\n3. Focus on coordination\n4. Build endurance gradually",
    sets: "1",
    reps: "30-90 minutes",
    calories: 15
  },

  // MACHINE CARDIO
  {
    name: "Treadmill Running",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["treadmill"],
    difficulty: "beginner",
    instructions: "1. Start with warm-up\n2. Maintain proper form\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-60 minutes",
    calories: 15
  },
  {
    name: "Treadmill Walking",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["treadmill"],
    difficulty: "beginner",
    instructions: "1. Start with warm-up\n2. Maintain proper form\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "30-90 minutes",
    calories: 8
  },
  {
    name: "Treadmill Intervals",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["treadmill"],
    difficulty: "intermediate",
    instructions: "1. Warm up for 10 minutes\n2. Run hard for 2 minutes\n3. Walk for 2 minutes\n4. Repeat 10-15 times",
    sets: "10-15",
    reps: "2 minutes hard, 2 minutes easy",
    calories: 18
  },
  {
    name: "Stair Climber",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["stair climber"],
    difficulty: "intermediate",
    instructions: "1. Maintain proper posture\n2. Use full step motion\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-45 minutes",
    calories: 15
  },
  {
    name: "Arc Trainer",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["arc trainer"],
    difficulty: "beginner",
    instructions: "1. Maintain proper posture\n2. Use full range of motion\n3. Keep steady pace\n4. Focus on breathing",
    sets: "1",
    reps: "20-45 minutes",
    calories: 13
  },

  // LOW IMPACT CARDIO
  {
    name: "Walking",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Maintain proper posture\n2. Keep steady pace\n3. Focus on breathing\n4. Use full stride",
    sets: "1",
    reps: "30-90 minutes",
    calories: 6
  },
  {
    name: "Power Walking",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["bodyweight"],
    difficulty: "beginner",
    instructions: "1. Maintain proper posture\n2. Keep brisk pace\n3. Focus on breathing\n4. Use full stride",
    sets: "1",
    reps: "30-60 minutes",
    calories: 8
  },
  {
    name: "Nordic Walking",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["walking poles"],
    difficulty: "beginner",
    instructions: "1. Use poles for propulsion\n2. Maintain proper form\n3. Keep steady pace\n4. Focus on coordination",
    sets: "1",
    reps: "30-90 minutes",
    calories: 10
  },
  {
    name: "Water Aerobics",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool"],
    difficulty: "beginner",
    instructions: "1. Follow instructor's moves\n2. Keep moving throughout\n3. Focus on coordination\n4. Maintain energy throughout",
    sets: "1",
    reps: "45-60 minutes",
    calories: 9
  },
  {
    name: "Aqua Jogging",
    type: "cardio",
    muscleGroups: ["cardio"],
    equipment: ["pool", "flotation belt"],
    difficulty: "beginner",
    instructions: "1. Use flotation belt\n2. Maintain running motion\n3. Keep steady pace\n4. Focus on form",
    sets: "1",
    reps: "20-45 minutes",
    calories: 11
  }
]; 