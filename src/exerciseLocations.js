// EXERCISE LOCATIONS AND EQUIPMENT MAPPING

// Equipment available at each location type
export const locationEquipment = {
  "Large Gym": [
    "bodyweight", "dumbbells", "barbell", "bench", "incline bench", "decline bench",
    "cable machine", "leg press machine", "leg extension machine", "leg curl machine",
    "shoulder press machine", "chest press machine", "row machine", "lat pulldown machine",
    "smith machine", "t-bar row machine", "reverse flye machine", "lateral raise machine",
    "preacher bench", "back extension bench", "pull-up bar", "dip bars", "gymnastic rings",
    "treadmill", "stationary bike", "elliptical machine", "stairmaster", "rowing machine",
    "arc trainer", "stair climber", "leg extension machine", "leg curl machine",
    "hammer strength machine", "landmine", "medicine ball", "resistance band",
    "weight plate", "jump rope", "foam roller", "pool", "climbing gear", "skis", "poles",
    "bicycle", "tennis racket", "tennis ball", "court", "basketball", "soccer ball",
    "volleyball", "boxing gloves", "punching bag", "walking poles", "flotation belt"
  ],
  
  "Small Gym": [
    "bodyweight", "dumbbells", "barbell", "bench", "incline bench", "decline bench",
    "cable machine", "pull-up bar", "dip bars", "treadmill", "stationary bike",
    "elliptical machine", "rowing machine", "medicine ball", "resistance band",
    "weight plate", "jump rope", "foam roller", "preacher bench", "back extension bench"
  ],
  
  "At Home": [
    "bodyweight", "dumbbells", "resistance band", "jump rope", "foam roller",
    "medicine ball", "weight plate", "bench", "pull-up bar"
  ],
  
  "Garage Gym": [
    "bodyweight", "dumbbells", "barbell", "bench", "incline bench", "decline bench",
    "pull-up bar", "dip bars", "cable machine", "stationary bike", "rowing machine",
    "medicine ball", "resistance band", "weight plate", "jump rope", "foam roller",
    "preacher bench", "back extension bench", "landmine", "gymnastic rings"
  ]
};

// Helper function to determine if an exercise is suitable for a location
export const isExerciseSuitableForLocation = (exercise, location) => {
  if (location === "Custom") return true; // Custom will be handled separately
  
  const locationEquip = locationEquipment[location] || [];
  const exerciseEquip = exercise.equipment || [];
  
  // Check if all required equipment for the exercise is available at the location
  return exerciseEquip.every(equip => 
    locationEquip.includes(equip.toLowerCase()) || 
    locationEquip.some(locEquip => locEquip.toLowerCase().includes(equip.toLowerCase()))
  );
};

// Helper function to get all suitable locations for an exercise
export const getSuitableLocationsForExercise = (exercise) => {
  const suitableLocations = [];
  const exerciseEquip = exercise.equipment || [];
  
  Object.keys(locationEquipment).forEach(location => {
    const locationEquip = locationEquipment[location];
    const isSuitable = exerciseEquip.every(equip => 
      locationEquip.includes(equip.toLowerCase()) || 
      locationEquip.some(locEquip => locEquip.toLowerCase().includes(equip.toLowerCase()))
    );
    
    if (isSuitable) {
      suitableLocations.push(location);
    }
  });
  
  return suitableLocations;
};

// All available equipment for custom selection
export const allAvailableEquipment = [
  "bodyweight", "dumbbells", "barbell", "bench", "incline bench", "decline bench",
  "cable machine", "leg press machine", "leg extension machine", "leg curl machine",
  "shoulder press machine", "chest press machine", "row machine", "lat pulldown machine",
  "smith machine", "t-bar row machine", "reverse flye machine", "lateral raise machine",
  "preacher bench", "back extension bench", "pull-up bar", "dip bars", "gymnastic rings",
  "treadmill", "stationary bike", "elliptical machine", "stairmaster", "rowing machine",
  "arc trainer", "stair climber", "hammer strength machine", "landmine", "medicine ball",
  "resistance band", "weight plate", "jump rope", "foam roller", "pool", "climbing gear",
  "skis", "poles", "bicycle", "tennis racket", "tennis ball", "court", "basketball",
  "soccer ball", "volleyball", "boxing gloves", "punching bag", "walking poles",
  "flotation belt", "assisted pull-up machine", "leg press machine", "leg extension machine",
  "leg curl machine", "chest press machine", "row machine", "lat pulldown machine",
  "shoulder press machine", "lateral raise machine", "reverse flye machine"
];

// Location options for the filter
export const locationOptions = [
  { value: "all", label: "All Locations" },
  { value: "Large Gym", label: "Large Gym" },
  { value: "Small Gym", label: "Small Gym" },
  { value: "At Home", label: "At Home" },
  { value: "Garage Gym", label: "Garage Gym" },
  { value: "Custom", label: "Custom Equipment" }
]; 