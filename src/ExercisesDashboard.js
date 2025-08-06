import React, { useEffect, useState } from "react";
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { 
  locationOptions, 
  isExerciseSuitableForLocation, 
  allAvailableEquipment 
} from "./exerciseLocations";

export default function ExercisesDashboard() {
  const [exerciseTemplates, setExerciseTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);

  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [customEquipment, setCustomEquipment] = useState([]);
  const [formData, setFormData] = useState({
    templateId: '',
    name: '',
    type: 'strength',
    description: '',
    muscleGroups: '',
    equipment: '',
    difficulty: 'beginner',
    instructions: '',
    isActive: true
  });

  useEffect(() => {
    fetchExerciseTemplates();
  }, []);

  const fetchExerciseTemplates = async () => {
    try {
      const templatesSnapshot = await getDocs(collection(db, "exerciseTemplate"));
      const templatesData = templatesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setExerciseTemplates(templatesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exercise templates:", error);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      templateId: '',
      name: '',
      type: 'strength',
      description: '',
      muscleGroups: '',
      equipment: '',
      difficulty: 'beginner',
      instructions: '',
      isActive: true
    });
    setEditingExercise(null);
  };

  const openModal = (exercise = null) => {
    if (exercise) {
      setEditingExercise(exercise);
      setFormData({
        templateId: exercise.templateId || exercise.id || '',
        name: exercise.name || '',
        type: exercise.type || 'strength',
        description: exercise.description || '',
        muscleGroups: exercise.muscleGroups ? exercise.muscleGroups.join(', ') : '',
        equipment: exercise.equipment ? exercise.equipment.join(', ') : '',
        difficulty: exercise.difficulty || 'beginner',
        instructions: exercise.instructions || '',
        isActive: exercise.isActive !== false
      });
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const generateTemplateId = (name) => {
    if (!name) return '';
    
    // Convert name to lowercase and replace spaces/special chars with underscores
    let templateId = name.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .trim();
    
    // Add a random 3-digit number
    const randomNum = Math.floor(Math.random() * 900) + 100;
    templateId = `${templateId}_${randomNum}`;
    
    return templateId;
  };

  const handleNameChange = (name) => {
    const templateId = generateTemplateId(name);
    setFormData({
      ...formData,
      name: name,
      templateId: templateId
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let templateId = formData.templateId;
      
      // If no templateId provided, generate one from the name
      if (!templateId && formData.name) {
        templateId = generateTemplateId(formData.name);
      }
      
      if (!templateId) {
        alert("Please provide an exercise name");
        return;
      }

      const exerciseData = {
        templateId: templateId,
        name: formData.name,
        type: formData.type,
        description: formData.description,
        muscleGroups: formData.muscleGroups.split(',').map(group => group.trim()).filter(group => group),
        equipment: formData.equipment.split(',').map(item => item.trim()).filter(item => item),
        difficulty: formData.difficulty,
        instructions: formData.instructions,
        isActive: formData.isActive,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      if (editingExercise) {
        // Update existing exercise - use the original document ID
        await updateDoc(doc(db, "exerciseTemplate", editingExercise.id), exerciseData);
      } else {
        // Add new exercise - use templateId as document ID
        await setDoc(doc(db, "exerciseTemplate", templateId), exerciseData);
      }

      closeModal();
      fetchExerciseTemplates();
    } catch (error) {
      console.error("Error saving exercise:", error);
      alert("Error saving exercise: " + error.message);
    }
  };

  const handleDelete = async (exerciseId) => {
    if (window.confirm("Are you sure you want to delete this exercise?")) {
      try {
        await deleteDoc(doc(db, "exerciseTemplate", exerciseId));
        fetchExerciseTemplates();
      } catch (error) {
        console.error("Error deleting exercise:", error);
        alert("Error deleting exercise: " + error.message);
      }
    }
  };



  const filteredExercises = exerciseTemplates
    .filter(exercise => 
      selectedMuscleGroup === 'all' || 
      (exercise.muscleGroups && 
       exercise.muscleGroups.some(group => 
         group.toLowerCase().includes(selectedMuscleGroup.toLowerCase())
       ))
    )
    .filter(exercise =>
      searchTerm === '' ||
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (exercise.muscleGroups && exercise.muscleGroups.some(group => 
        group.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
      (exercise.equipment && exercise.equipment.some(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
      exercise.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(exercise => {
      if (selectedLocation === 'all') return true;
      
      if (selectedLocation === 'Custom') {
        // For custom equipment, check if all exercise equipment is in custom selection
        const exerciseEquip = exercise.equipment || [];
        return exerciseEquip.every(equip => 
          customEquipment.includes(equip.toLowerCase()) ||
          customEquipment.some(customEquip => customEquip.toLowerCase().includes(equip.toLowerCase()))
        );
      }
      
      // For predefined locations, use the helper function
      return isExerciseSuitableForLocation(exercise, selectedLocation);
    });

  if (loading) {
    return <div>Loading exercises...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Exercises Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => openModal()}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add New Exercise
          </button>
        </div>
      </div>



      {/* Search and Filter Section */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Search Bar */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Search Exercises:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, muscle group, equipment, or type..."
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Filter by Muscle Group */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Filter by Muscle Group:</label>
          <select
            value={selectedMuscleGroup}
            onChange={(e) => setSelectedMuscleGroup(e.target.value)}
            style={{
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '150px'
            }}
          >
            <option value="all">All Exercises</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="lats">Lats</option>
            <option value="rhomboids">Rhomboids</option>
            <option value="traps">Traps</option>
            <option value="erector spinae">Lower Back</option>
            <option value="shoulders">Shoulders</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="forearms">Forearms</option>
            <option value="quads">Quads</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="glutes">Glutes</option>
            <option value="calves">Calves</option>
            <option value="core">Core</option>
            <option value="abs">Abs</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        {/* Filter by Location */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Filter by Location:</label>
          <select
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
            style={{
              padding: '10px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '150px'
            }}
          >
            {locationOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div style={{ alignSelf: 'end', paddingBottom: '10px' }}>
          <span style={{ color: '#6c757d', fontSize: '14px' }}>
            Showing {filteredExercises.length} of {exerciseTemplates.length} exercises
          </span>
        </div>
      </div>

      {/* Custom Equipment Selection */}
      {selectedLocation === 'Custom' && (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', border: '1px solid #bbdefb' }}>
          <h3 style={{ marginBottom: '10px', color: '#1976d2' }}>Select Available Equipment:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
            {allAvailableEquipment.map(equipment => (
              <label key={equipment} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={customEquipment.includes(equipment)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCustomEquipment([...customEquipment, equipment]);
                    } else {
                      setCustomEquipment(customEquipment.filter(item => item !== equipment));
                    }
                  }}
                  style={{ margin: 0 }}
                />
                <span style={{ fontSize: '14px' }}>{equipment}</span>
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setCustomEquipment(allAvailableEquipment)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Select All
            </button>
            <button
              onClick={() => setCustomEquipment([])}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear All
            </button>
            <span style={{ alignSelf: 'center', color: '#666', fontSize: '14px' }}>
              {customEquipment.length} equipment selected
            </span>
          </div>
        </div>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Exercise Name</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Type</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Muscle Groups</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Difficulty</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Equipment</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExercises.map(template => (
              <tr key={template.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>
                  {template.name || 'N/A'}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  <span style={{ 
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {template.type || 'N/A'}
                  </span>
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {template.muscleGroups && template.muscleGroups.length > 0 ? (
                    template.muscleGroups.join(', ')
                  ) : (
                    <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Not specified</span>
                  )}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {template.difficulty || 'N/A'}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {template.equipment && template.equipment.length > 0 ? (
                    template.equipment.join(', ')
                  ) : (
                    <span style={{ color: '#6c757d', fontStyle: 'italic' }}>None</span>
                  )}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  <button 
                    onClick={() => openModal(template)}
                    style={{ 
                      padding: '5px 10px', 
                      backgroundColor: '#ffc107', 
                      color: 'black', 
                      border: 'none', 
                      borderRadius: '3px',
                      cursor: 'pointer',
                      marginRight: '5px'
                    }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(template.id)}
                    style={{ 
                      padding: '5px 10px', 
                      backgroundColor: '#dc3545', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '3px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <h2>{editingExercise ? 'Edit Exercise' : 'Add New Exercise'}</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Exercise Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="strength">Strength</option>
                  <option value="cardio">Cardio</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="balance">Balance</option>
                  <option value="plyometric">Plyometric</option>
                  <option value="yoga">Yoga</option>
                  <option value="pilates">Pilates</option>
                  <option value="hiit">HIIT</option>
                  <option value="endurance">Endurance</option>
                  <option value="powerlifting">Powerlifting</option>
                  <option value="olympic">Olympic</option>
                  <option value="calisthenics">Calisthenics</option>
                  <option value="sports">Sports</option>
                  <option value="rehabilitation">Rehabilitation</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Muscle Groups (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.muscleGroups}
                  onChange={(e) => setFormData({...formData, muscleGroups: e.target.value})}
                  placeholder="e.g., chest, triceps, shoulders"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Equipment (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.equipment}
                  onChange={(e) => setFormData({...formData, equipment: e.target.value})}
                  placeholder="e.g., dumbbells, barbell, bench"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Difficulty
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Instructions
                </label>
                <textarea
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  rows="4"
                  placeholder="Step-by-step instructions..."
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>



              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                    style={{ marginRight: '8px' }}
                  />
                  Active
                </label>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    padding: '10px 20px',
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
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {editingExercise ? 'Update Exercise' : 'Add Exercise'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 