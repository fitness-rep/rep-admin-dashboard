import React, { useState, useEffect } from 'react';
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function FoodsDashboard() {
  const [activeTab, setActiveTab] = useState('foods');
  const [foods, setFoods] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [editingMeal, setEditingMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedQuantity, setSelectedQuantity] = useState(100);
  
  // Meal filters
  const [mealCategoryFilter, setMealCategoryFilter] = useState('all');
  const [mealCuisineFilter, setMealCuisineFilter] = useState('all');
  const [mealDietaryFilter, setMealDietaryFilter] = useState('all');
  const [mealBodyTypeFilter, setMealBodyTypeFilter] = useState('all');

  // Food form state
  const [foodFormData, setFoodFormData] = useState({
    name: '',
    category: 'meats',
    protein: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    calories: 0,
    unit: 'g'
  });

  // Meal form state
  const [mealFormData, setMealFormData] = useState({
    name: '',
    description: '',
    ingredients: []
  });

  // Meal builder state
  const [mealSearchTerm, setMealSearchTerm] = useState('');
  const [selectedFoodQuantity, setSelectedFoodQuantity] = useState(100);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'meats', label: 'Meats' },
    { value: 'poultry', label: 'Poultry' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'grains', label: 'Grains' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'nuts_seeds', label: 'Nuts & Seeds' },
    { value: 'supplements', label: 'Supplements' },
    { value: 'indianFoods', label: 'Indian Foods' },
    { value: 'oils_fats', label: 'Oils & Fats' },
    { value: 'sweeteners', label: 'Sweeteners' }
  ];

  const mealCategories = [
    { value: 'all', label: 'All Meals' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'snack', label: 'Snacks' },
    { value: 'pre-workout', label: 'Pre-Workout' },
    { value: 'post-workout', label: 'Post-Workout' }
  ];

  const mealCuisines = [
    { value: 'all', label: 'All Cuisines' },
    { value: 'american', label: 'American' },
    { value: 'indian', label: 'Indian' },
    { value: 'italian', label: 'Italian' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'asian', label: 'Asian' },
    { value: 'mexican', label: 'Mexican' }
  ];

  const mealDietary = [
    { value: 'all', label: 'All Diets' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non-vegetarian', label: 'Non-Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' }
  ];

  const mealBodyTypes = [
    { value: 'all', label: 'All Body Types' },
    { value: 'muscle-gain', label: 'Muscle Gain' },
    { value: 'fat-loss', label: 'Fat Loss' },
    { value: 'maintenance', label: 'Maintenance' }
  ];

  const fetchFoods = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "foods"));
      const foodsData = [];
      querySnapshot.forEach((doc) => {
        foodsData.push({ id: doc.id, ...doc.data() });
      });
      setFoods(foodsData);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const fetchMeals = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "meals"));
      const mealsData = [];
      querySnapshot.forEach((doc) => {
        mealsData.push({ id: doc.id, ...doc.data() });
      });
      setMeals(mealsData);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchFoods(), fetchMeals()]);
      setLoading(false);
    };
    loadData();
  }, []);

  // Filter foods
  const filteredFoods = foods
    .filter(food => 
      selectedCategory === 'all' || food.category === selectedCategory
    )
    .filter(food =>
      searchTerm === '' ||
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Filter meals
  const filteredMeals = meals
    .filter(meal => 
      mealCategoryFilter === 'all' || meal.category === mealCategoryFilter
    )
    .filter(meal =>
      mealCuisineFilter === 'all' || meal.cuisine === mealCuisineFilter
    )
    .filter(meal =>
      mealDietaryFilter === 'all' || meal.dietary === mealDietaryFilter
    )
    .filter(meal =>
      mealBodyTypeFilter === 'all' || meal.bodyType === mealBodyTypeFilter
    )
    .filter(meal =>
      searchTerm === '' ||
      meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Remove duplicate meals function
  const removeDuplicateMeals = async () => {
    try {
      const mealNames = new Set();
      const uniqueMeals = [];
      const duplicateIds = [];

      meals.forEach(meal => {
        if (mealNames.has(meal.name)) {
          duplicateIds.push(meal.id);
        } else {
          mealNames.add(meal.name);
          uniqueMeals.push(meal);
        }
      });

      if (duplicateIds.length > 0) {
        for (const mealId of duplicateIds) {
          await deleteDoc(doc(db, "meals", mealId));
        }
        alert(`Removed ${duplicateIds.length} duplicate meals!`);
        fetchMeals();
      } else {
        alert('No duplicate meals found!');
      }
    } catch (error) {
      console.error("Error removing duplicate meals:", error);
      alert('Error removing duplicate meals');
    }
  };

  // Remove duplicate foods function
  const removeDuplicateFoods = async () => {
    try {
      const foodNames = new Set();
      const uniqueFoods = [];
      const duplicateIds = [];

      foods.forEach(food => {
        if (foodNames.has(food.name)) {
          duplicateIds.push(food.id);
        } else {
          foodNames.add(food.name);
          uniqueFoods.push(food);
        }
      });

      if (duplicateIds.length > 0) {
        for (const foodId of duplicateIds) {
          await deleteDoc(doc(db, "foods", foodId));
        }
        alert(`Removed ${duplicateIds.length} duplicate foods!`);
        fetchFoods();
      } else {
        alert('No duplicate foods found!');
      }
    } catch (error) {
      console.error("Error removing duplicate foods:", error);
      alert('Error removing duplicate foods');
    }
  };

  const handleSaveMeal = async () => {
    try {
      const mealData = {
        name: mealFormData.name,
        description: mealFormData.description,
        ingredients: mealFormData.ingredients,
        category: mealFormData.category || 'breakfast',
        cuisine: mealFormData.cuisine || 'american',
        dietary: mealFormData.dietary || 'vegetarian',
        bodyType: mealFormData.bodyType || 'muscle-gain',
        nutrition: calculateMealNutrition(mealFormData.ingredients)
      };

      if (editingMeal) {
        await updateDoc(doc(db, "meals", editingMeal.id), mealData);
        alert('Meal updated successfully!');
              } else {
          await addDoc(collection(db, "meals"), mealData);
          alert('Meal created successfully!');
        }

      setShowMealModal(false);
      setEditingMeal(null);
      setMealFormData({ name: '', description: '', ingredients: [] });
      fetchMeals();
    } catch (error) {
      console.error("Error saving meal:", error);
      alert('Error saving meal');
    }
  };

  const handleDeleteMeal = async (mealId) => {
    if (window.confirm('Are you sure you want to delete this meal?')) {
      try {
        await deleteDoc(doc(db, "meals", mealId));
        alert('Meal deleted successfully!');
        fetchMeals();
      } catch (error) {
        console.error("Error deleting meal:", error);
        alert('Error deleting meal');
      }
    }
  };

  const addIngredientToMeal = (food) => {
    const newIngredient = {
      foodId: food.name, // Using name as foodId for lookup
      quantity: selectedFoodQuantity
    };
    setMealFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, newIngredient]
    }));
  };

  const removeIngredientFromMeal = (index) => {
    setMealFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const calculateMealNutrition = (ingredients) => {
    return ingredients.reduce((acc, ingredient) => {
      // Handle food name mismatches
      let foodName = ingredient.foodId;
      if (foodName === "Protein Powder (Whey)") {
        foodName = "Whey Protein Powder";
      }
      
      const food = foods.find(f => f.foodId === foodName || f.id === foodName || f.name === foodName);
      if (food) {
        const multiplier = ingredient.quantity / 100;
        // The comprehensive food database stores per-100g values directly
        const per100gCalories = food.calories || 0;
        const per100gProtein = food.protein || 0;
        const per100gCarbs = food.carbs || 0;
        const per100gFats = food.fats || 0;

        return {
          calories: acc.calories + Math.round(per100gCalories * multiplier),
          protein: acc.protein + Math.round(per100gProtein * multiplier * 10) / 10,
          carbs: acc.carbs + Math.round(per100gCarbs * multiplier * 10) / 10,
          fats: acc.fats + Math.round(per100gFats * multiplier * 10) / 10
        };
      }
      return acc;
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Foods & Meals Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('foods')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'foods' ? '#007bff' : '#f8f9fa',
              color: activeTab === 'foods' ? 'white' : '#495057',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Foods ({foods.length})
          </button>
          <button
            onClick={() => setActiveTab('meals')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'meals' ? '#007bff' : '#f8f9fa',
              color: activeTab === 'meals' ? 'white' : '#495057',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Meals ({meals.length})
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search foods and meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '300px',
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
          {activeTab === 'foods' && (
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {activeTab === 'foods' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Foods</h2>
            <button
              onClick={removeDuplicateFoods}
              style={{
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Remove Duplicate Foods
            </button>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Quantity (g/ml):</label>
            <input
              type="number"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value) || 100)}
              min="1"
              style={{
                width: '80px',
                padding: '5px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
            <span style={{ marginLeft: '10px', color: '#666', fontSize: '12px' }}>
              Per {selectedQuantity}g/ml
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
            {filteredFoods.map(food => {
              // The comprehensive food database stores per-100g values directly
              const per100gCalories = food.calories || 0;
              const per100gProtein = food.protein || 0;
              const per100gCarbs = food.carbs || 0;
              const per100gFats = food.fats || 0;
              
              const multiplier = selectedQuantity / 100;
              const calculatedCalories = Math.round(per100gCalories * multiplier);
              const calculatedProtein = Math.round(per100gProtein * multiplier * 10) / 10;
              const calculatedCarbs = Math.round(per100gCarbs * multiplier * 10) / 10;
              const calculatedFats = Math.round(per100gFats * multiplier * 10) / 10;
              
              return (
                <div key={food.id} style={{
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  padding: '15px',
                  backgroundColor: 'white'
                }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>{food.name}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#666' }}>Category: {food.category}</p>
                  <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <div style={{ fontSize: '11px', color: '#666', marginBottom: '5px' }}>
                      Nutrition per {selectedQuantity}{food.unit || 'g'}:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', fontSize: '12px' }}>
                      <div style={{ fontWeight: 'bold', color: '#e74c3c' }}>Calories: {calculatedCalories}</div>
                      <div style={{ fontWeight: 'bold', color: '#3498db' }}>Protein: {calculatedProtein.toFixed(2)}g</div>
                      <div style={{ fontWeight: 'bold', color: '#f39c12' }}>Carbs: {calculatedCarbs.toFixed(2)}g</div>
                      <div style={{ fontWeight: 'bold', color: '#9b59b6' }}>Fats: {calculatedFats.toFixed(2)}g</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '10px', color: '#999' }}>
                    Base values (per 100g): {Math.round((food.calories || 0) * 100)} cal, {((food.protein || 0) * 100).toFixed(2)}g P, {((food.carbs || 0) * 100).toFixed(2)}g C, {((food.fats || 0) * 100).toFixed(2)}g F
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'meals' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Meals</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={removeDuplicateMeals}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Remove Duplicate Meals
              </button>
              <button
                onClick={() => setShowMealModal(true)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Create New Meal
              </button>
            </div>
          </div>

          {/* Meal Filters */}
          <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <select
              value={mealCategoryFilter}
              onChange={(e) => setMealCategoryFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {mealCategories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
              value={mealCuisineFilter}
              onChange={(e) => setMealCuisineFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {mealCuisines.map(cuisine => (
                <option key={cuisine.value} value={cuisine.value}>
                  {cuisine.label}
                </option>
              ))}
            </select>
            <select
              value={mealDietaryFilter}
              onChange={(e) => setMealDietaryFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {mealDietary.map(dietary => (
                <option key={dietary.value} value={dietary.value}>
                  {dietary.label}
                </option>
              ))}
            </select>
            <select
              value={mealBodyTypeFilter}
              onChange={(e) => setMealBodyTypeFilter(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {mealBodyTypes.map(bodyType => (
                <option key={bodyType.value} value={bodyType.value}>
                  {bodyType.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '15px' }}>
            {filteredMeals.map(meal => {
              const nutrition = meal.nutrition || calculateMealNutrition(meal.ingredients || []);
              return (
                <div key={meal.id} style={{
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  padding: '15px',
                  backgroundColor: 'white'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <h3 style={{ margin: '0', flex: '1' }}>{meal.name}</h3>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button
                        onClick={() => {
                          setEditingMeal(meal);
                          setMealFormData({
                            name: meal.name,
                            description: meal.description || '',
                            ingredients: meal.ingredients || [],
                            category: meal.category || 'breakfast',
                            cuisine: meal.cuisine || 'american',
                            dietary: meal.dietary || 'vegetarian',
                            bodyType: meal.bodyType || 'muscle-gain'
                          });
                          setShowMealModal(true);
                        }}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#007bff',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMeal(meal.id)}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  {meal.description && (
                    <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
                      {meal.description}
                    </p>
                  )}

                  {/* Meal Metadata Tags */}
                  <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    {meal.category && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '10px'
                      }}>
                        {meal.category}
                      </span>
                    )}
                    {meal.cuisine && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '10px'
                      }}>
                        {meal.cuisine}
                      </span>
                    )}
                    {meal.dietary && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#ffc107',
                        color: 'black',
                        borderRadius: '12px',
                        fontSize: '10px'
                      }}>
                        {meal.dietary}
                      </span>
                    )}
                    {meal.bodyType && (
                      <span style={{
                        padding: '2px 6px',
                        backgroundColor: '#6f42c1',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '10px'
                      }}>
                        {meal.bodyType}
                      </span>
                    )}
                  </div>

                  {/* Nutrition Summary */}
                  <div style={{ marginBottom: '10px', padding: '8px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                    <div style={{ fontSize: '11px', color: '#666', marginBottom: '5px' }}>
                      Nutrition Summary:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', fontSize: '12px' }}>
                      <div style={{ fontWeight: 'bold', color: '#e74c3c' }}>Calories: {nutrition.calories}</div>
                      <div style={{ fontWeight: 'bold', color: '#3498db' }}>Protein: {nutrition.protein.toFixed(2)}g</div>
                      <div style={{ fontWeight: 'bold', color: '#f39c12' }}>Carbs: {nutrition.carbs.toFixed(2)}g</div>
                      <div style={{ fontWeight: 'bold', color: '#9b59b6' }}>Fats: {nutrition.fats.toFixed(2)}g</div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', marginBottom: '5px' }}>
                      Ingredients:
                    </div>
                    <div style={{ fontSize: '12px' }}>
                      {meal.ingredients && meal.ingredients.length > 0 ? (
                        meal.ingredients.map((ingredient, index) => {
                          // Handle food name mismatches
                          let foodName = ingredient.foodId;
                          if (foodName === "Protein Powder (Whey)") {
                            foodName = "Whey Protein Powder";
                          }
                          
                          const food = foods.find(f => f.foodId === foodName || f.id === foodName || f.name === foodName);
                          return (
                            <div key={index} style={{ marginBottom: '2px' }}>
                              • {food ? food.name : 'Unknown food'} ({ingredient.quantity}g)
                            </div>
                          );
                        })
                      ) : (
                        <div style={{ color: '#999', fontStyle: 'italic' }}>No ingredients listed</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Meal Modal */}
      {showMealModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h2>{editingMeal ? 'Edit Meal' : 'Create New Meal'}</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Meal Name:</label>
              <input
                type="text"
                value={mealFormData.name}
                onChange={(e) => setMealFormData(prev => ({ ...prev, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
              <textarea
                value={mealFormData.description}
                onChange={(e) => setMealFormData(prev => ({ ...prev, description: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  minHeight: '60px'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
              <select
                value={mealFormData.category || 'breakfast'}
                onChange={(e) => setMealFormData(prev => ({ ...prev, category: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {mealCategories.filter(cat => cat.value !== 'all').map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Cuisine:</label>
              <select
                value={mealFormData.cuisine || 'american'}
                onChange={(e) => setMealFormData(prev => ({ ...prev, cuisine: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {mealCuisines.filter(cuisine => cuisine.value !== 'all').map(cuisine => (
                  <option key={cuisine.value} value={cuisine.value}>
                    {cuisine.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Dietary:</label>
              <select
                value={mealFormData.dietary || 'vegetarian'}
                onChange={(e) => setMealFormData(prev => ({ ...prev, dietary: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {mealDietary.filter(dietary => dietary.value !== 'all').map(dietary => (
                  <option key={dietary.value} value={dietary.value}>
                    {dietary.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Body Type:</label>
              <select
                value={mealFormData.bodyType || 'muscle-gain'}
                onChange={(e) => setMealFormData(prev => ({ ...prev, bodyType: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {mealBodyTypes.filter(bodyType => bodyType.value !== 'all').map(bodyType => (
                  <option key={bodyType.value} value={bodyType.value}>
                    {bodyType.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Add Ingredients:</label>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  placeholder="Search foods..."
                  value={mealSearchTerm}
                  onChange={(e) => setMealSearchTerm(e.target.value)}
                  style={{
                    flex: '1',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
                <input
                  type="number"
                  placeholder="Qty (g)"
                  value={selectedFoodQuantity}
                  onChange={(e) => setSelectedFoodQuantity(parseInt(e.target.value) || 100)}
                  style={{
                    width: '80px',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              {/* Food Search Results */}
              {foods
                .filter(food => 
                  food.name.toLowerCase().includes(mealSearchTerm.toLowerCase())
                )
                .slice(0, 10)
                .map(food => (
                  <div
                    key={food.id}
                    onClick={() => addIngredientToMeal(food)}
                    style={{
                      padding: '8px',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                      backgroundColor: '#f8f9fa'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                  >
                    {food.name} ({food.category})
                  </div>
                ))}
            </div>

            {/* Current Ingredients */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Current Ingredients:</label>
              {mealFormData.ingredients.length > 0 ? (
                mealFormData.ingredients.map((ingredient, index) => {
                  // Handle food name mismatches
                  let foodName = ingredient.foodId;
                  if (foodName === "Protein Powder (Whey)") {
                    foodName = "Whey Protein Powder";
                  }
                  
                  const food = foods.find(f => f.foodId === foodName || f.id === foodName || f.name === foodName);
                  return (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '4px',
                      marginBottom: '5px'
                    }}>
                      <div style={{ flex: '1' }}>
                        <span>{food ? food.name : 'Unknown food'}</span>
                        <input
                          type="number"
                          value={ingredient.quantity}
                          onChange={(e) => {
                            const newIngredients = [...mealFormData.ingredients];
                            newIngredients[index].quantity = parseInt(e.target.value) || 0;
                            setMealFormData(prev => ({ ...prev, ingredients: newIngredients }));
                          }}
                          style={{
                            width: '60px',
                            marginLeft: '10px',
                            padding: '2px 4px',
                            border: '1px solid #ddd',
                            borderRadius: '2px',
                            fontSize: '12px'
                          }}
                        />
                        <span style={{ marginLeft: '5px', fontSize: '12px' }}>g</span>
                      </div>
                      <button
                        onClick={() => removeIngredientFromMeal(index)}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })
              ) : (
                <div style={{ color: '#999', fontStyle: 'italic' }}>No ingredients added</div>
              )}
            </div>

            {/* Nutrition Summary */}
            {mealFormData.ingredients.length > 0 && (
              <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                  Nutrition Summary:
                </div>
                {(() => {
                  const nutrition = calculateMealNutrition(mealFormData.ingredients);
                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', fontSize: '12px' }}>
                      <div style={{ fontWeight: 'bold', color: '#e74c3c' }}>Calories: {nutrition.calories}</div>
                      <div style={{ fontWeight: 'bold', color: '#3498db' }}>Protein: {nutrition.protein}g</div>
                      <div style={{ fontWeight: 'bold', color: '#f39c12' }}>Carbs: {nutrition.carbs}g</div>
                      <div style={{ fontWeight: 'bold', color: '#9b59b6' }}>Fats: {nutrition.fats}g</div>
                    </div>
                  );
                })()}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowMealModal(false);
                  setEditingMeal(null);
                  setMealFormData({ name: '', description: '', ingredients: [] });
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveMeal}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {editingMeal ? 'Update Meal' : 'Create Meal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 