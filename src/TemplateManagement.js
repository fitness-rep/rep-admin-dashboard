import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { exercisePlanTemplates, mealPlanTemplates, getAllTemplates } from './templateData';
import { importSystemTemplates, clearAllTemplates, checkTemplateStatus, freshStartTemplates } from './importTemplates';

export default function TemplateManagement() {
  const [activeTab, setActiveTab] = useState('exercise');
  const [templates, setTemplates] = useState({ exercise: [], meal: [] });
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [importStatus, setImportStatus] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showTemplateDetail, setShowTemplateDetail] = useState(false);
  const [deletingTemplate, setDeletingTemplate] = useState(false);
  const [selectedTemplateDays, setSelectedTemplateDays] = useState(3);

  // Form state for creating/editing templates
  const [templateForm, setTemplateForm] = useState({
    name: '',
    goal: '',
    level: 'beginner',
    category: 'custom',
    description: '',
    type: 'exercise', // or 'meal'
    numberOfDays: 3 // Dynamic day selection
  });

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      
      // Load system templates
      const allTemplates = getAllTemplates();
      
      // Load custom templates from Firebase
      const exerciseSnapshot = await getDocs(collection(db, "exercisePlanTemplates"));
      const mealSnapshot = await getDocs(collection(db, "mealPlanTemplates"));
      
      const customExerciseTemplates = exerciseSnapshot.docs.map(doc => ({
        id: doc.id,
        firebaseId: doc.id, // Store Firebase ID separately
        ...doc.data(),
        category: 'custom'
      }));
      
      const customMealTemplates = mealSnapshot.docs.map(doc => ({
        id: doc.id,
        firebaseId: doc.id, // Store Firebase ID separately
        ...doc.data(),
        category: 'custom'
      }));

      const finalTemplates = {
        exercise: [...Object.values(exercisePlanTemplates), ...customExerciseTemplates],
        meal: [...Object.values(mealPlanTemplates), ...customMealTemplates]
      };

      setTemplates(finalTemplates);
    } catch (error) {
      console.error('Error loading templates:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to generate dynamic workout splits
  const generateWorkoutSplit = (numberOfDays, goal, level) => {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const splits = {
      3: [
        { dayName: 'Monday', focus: 'Upper Body', exercises: [] },
        { dayName: 'Wednesday', focus: 'Lower Body', exercises: [] },
        { dayName: 'Friday', focus: 'Full Body', exercises: [] }
      ],
      4: [
        { dayName: 'Monday', focus: 'Push (Chest/Shoulders/Triceps)', exercises: [] },
        { dayName: 'Tuesday', focus: 'Pull (Back/Biceps)', exercises: [] },
        { dayName: 'Thursday', focus: 'Legs', exercises: [] },
        { dayName: 'Friday', focus: 'Cardio & Core', exercises: [] }
      ],
      5: [
        { dayName: 'Monday', focus: 'Chest & Triceps', exercises: [] },
        { dayName: 'Tuesday', focus: 'Back & Biceps', exercises: [] },
        { dayName: 'Wednesday', focus: 'Shoulders & Core', exercises: [] },
        { dayName: 'Thursday', focus: 'Legs', exercises: [] },
        { dayName: 'Friday', focus: 'Cardio & Flexibility', exercises: [] }
      ],
      6: [
        { dayName: 'Monday', focus: 'Chest', exercises: [] },
        { dayName: 'Tuesday', focus: 'Back', exercises: [] },
        { dayName: 'Wednesday', focus: 'Shoulders & Arms', exercises: [] },
        { dayName: 'Thursday', focus: 'Legs', exercises: [] },
        { dayName: 'Friday', focus: 'Core & Cardio', exercises: [] },
        { dayName: 'Saturday', focus: 'Active Recovery', exercises: [] }
      ]
    };

    return splits[numberOfDays] || splits[3];
  };

  const handleCreateTemplate = async () => {
    try {
      let templateData = {
        ...templateForm,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      if (templateForm.type === 'exercise') {
        // Generate dynamic workout split
        const days = generateWorkoutSplit(templateForm.numberOfDays, templateForm.goal, templateForm.level);
        templateData = {
          ...templateData,
          days: days
        };
        await addDoc(collection(db, "exercisePlanTemplates"), templateData);
      } else {
        await addDoc(collection(db, "mealPlanTemplates"), templateData);
      }

      setShowCreateModal(false);
      setTemplateForm({
        name: '',
        goal: '',
        level: 'beginner',
        category: 'custom',
        description: '',
        type: 'exercise',
        numberOfDays: 3
      });
      loadTemplates();
    } catch (error) {
      console.error('Error creating template:', error);
    }
  };

  const handleDeleteTemplate = async (template) => {
    if (template.category === 'system') {
      alert('System templates cannot be deleted');
      return;
    }

    if (window.confirm(`Are you sure you want to delete "${template.name}"?`)) {
      try {
        setDeletingTemplate(true);
        
        // Use the Firebase ID for deletion
        const templateId = template.firebaseId || template.id;
        console.log('Deleting template:', templateId, 'from collection:', activeTab === 'exercise' ? 'exercisePlanTemplates' : 'mealPlanTemplates');
        console.log('Template details:', template);
        
        if (activeTab === 'exercise') {
          await deleteDoc(doc(db, "exercisePlanTemplates", templateId));
        } else {
          await deleteDoc(doc(db, "mealPlanTemplates", templateId));
        }
        
        console.log('Template deleted successfully');
        alert('Template deleted successfully!');
        await loadTemplates();
      } catch (error) {
        console.error('Error deleting template:', error);
        alert(`Error deleting template: ${error.message}`);
      } finally {
        setDeletingTemplate(false);
      }
    }
  };

  const handleClearAllDuplicates = async () => {
    if (window.confirm('This will delete ALL custom templates. Are you sure?')) {
      try {
        setDeletingTemplate(true);
        
        // Get all custom templates
        const exerciseSnapshot = await getDocs(collection(db, "exercisePlanTemplates"));
        const mealSnapshot = await getDocs(collection(db, "mealPlanTemplates"));
        
        // Delete all exercise templates
        for (const doc of exerciseSnapshot.docs) {
          await deleteDoc(doc.ref);
        }
        
        // Delete all meal templates
        for (const doc of mealSnapshot.docs) {
          await deleteDoc(doc.ref);
        }
        
        alert('All custom templates cleared!');
        await loadTemplates();
      } catch (error) {
        console.error('Error clearing templates:', error);
        alert(`Error clearing templates: ${error.message}`);
      } finally {
        setDeletingTemplate(false);
      }
    }
  };

  const getFilteredTemplates = () => {
    let filtered = templates[activeTab];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(template => template.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(template => 
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.goal.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading templates...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Template Management</h1>
        <p>Manage exercise and meal plan templates for quick plan creation.</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('exercise')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'exercise' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'exercise' ? 'white' : '#495057',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Exercise Templates ({templates.exercise.length})
        </button>
        <button
          onClick={() => setActiveTab('meal')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'meal' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'meal' ? 'white' : '#495057',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Meal Templates ({templates.meal.length})
        </button>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search templates..."
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
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <option value="all">All Categories</option>
            <option value="system">System Templates</option>
            <option value="custom">Custom Templates</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowCreateModal(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Create New Template
          </button>
        </div>
      </div>

      {/* Import Status */}
      {importStatus && (
        <div style={{
          padding: '10px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {importStatus}
        </div>
      )}

      {/* Templates Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
        {getFilteredTemplates().map((template) => (
          <div 
            key={template.id} 
            onClick={() => {
              setSelectedTemplate(template);
              setSelectedTemplateDays(3); // Reset to default 3 days
              setShowTemplateDetail(true);
            }}
            style={{
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: template.category === 'system' ? '#f8f9fa' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ':hover': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transform: 'translateY(-2px)'
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{template.name}</h3>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{
                    padding: '2px 8px',
                    backgroundColor: template.category === 'system' ? '#007bff' : '#28a745',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {template.category}
                  </span>
                  <span style={{
                    padding: '2px 8px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {template.level}
                  </span>
                  <span style={{
                    padding: '2px 8px',
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {template.goal}
                  </span>
                  {activeTab === 'exercise' && (
                    <span style={{
                      padding: '2px 8px',
                      backgroundColor: '#fd7e14',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      {template.defaultDays || template.days?.length || 0} days
                    </span>
                  )}
                </div>
              </div>
              {template.category === 'custom' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleDeleteTemplate(template);
                  }}
                  disabled={deletingTemplate}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: deletingTemplate ? '#6c757d' : '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: deletingTemplate ? 'not-allowed' : 'pointer',
                    fontSize: '12px'
                  }}
                >
                  {deletingTemplate ? '...' : 'Delete'}
                </button>
              )}
            </div>
            
            <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>
              {template.description}
            </p>

            {template.type === 'exercise' && template.days && (
              <div style={{ marginBottom: '10px' }}>
                <strong>Workout Days:</strong> {template.days.length} days
                <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                  {template.days.map(day => day.focus).join(', ')}
                </div>
              </div>
            )}

            {template.type === 'meal' && template.mealOptions && (
              <div style={{ marginBottom: '10px' }}>
                <strong>Meal Types:</strong> {Object.keys(template.mealOptions).length} types
                <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                  {Object.keys(template.mealOptions).map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', ')}
                </div>
              </div>
            )}

            <div style={{ fontSize: '12px', color: '#999' }}>
              Created: {template.createdAt ? new Date(template.createdAt.toDate()).toLocaleDateString() : 'System'}
            </div>
          </div>
        ))}
      </div>

      {/* Create Template Modal */}
      {showCreateModal && (
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
            padding: '30px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h2>Create New Template</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Template Type:</label>
              <select
                value={templateForm.type}
                onChange={(e) => setTemplateForm(prev => ({ ...prev, type: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                <option value="exercise">Exercise Plan Template</option>
                <option value="meal">Meal Plan Template</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Template Name:</label>
              <input
                type="text"
                value={templateForm.name}
                onChange={(e) => setTemplateForm(prev => ({ ...prev, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Goal:</label>
              <select
                value={templateForm.goal}
                onChange={(e) => setTemplateForm(prev => ({ ...prev, goal: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                <option value="">Select Goal</option>
                <option value="Fat Loss / Weight Reduction">Fat Loss / Weight Reduction</option>
                <option value="Muscle Gain / Strength Building">Muscle Gain / Strength Building</option>
                <option value="Body Recomposition (Lose fat & build muscle)">Body Recomposition</option>
                <option value="General Health & Wellness">General Health & Wellness</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Level:</label>
              <select
                value={templateForm.level}
                onChange={(e) => setTemplateForm(prev => ({ ...prev, level: e.target.value }))}
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

            {templateForm.type === 'exercise' && (
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Number of Workout Days:</label>
                <select
                  value={templateForm.numberOfDays}
                  onChange={(e) => setTemplateForm(prev => ({ ...prev, numberOfDays: parseInt(e.target.value) }))}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value={3}>3 Days</option>
                  <option value={4}>4 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={6}>6 Days</option>
                </select>
              </div>
            )}

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
              <textarea
                value={templateForm.description}
                onChange={(e) => setTemplateForm(prev => ({ ...prev, description: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  minHeight: '80px'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowCreateModal(false)}
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
                onClick={handleCreateTemplate}
                disabled={!templateForm.name || !templateForm.goal}
                style={{
                  padding: '8px 16px',
                  backgroundColor: templateForm.name && templateForm.goal ? '#28a745' : '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: templateForm.name && templateForm.goal ? 'pointer' : 'not-allowed'
                }}
              >
                Create Template
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Template Detail Modal */}
      {showTemplateDetail && selectedTemplate && (
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
            padding: '30px',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>{selectedTemplate.name}</h2>
              <button
                onClick={() => setShowTemplateDetail(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: selectedTemplate.category === 'system' ? '#007bff' : '#28a745',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '14px'
                }}>
                  {selectedTemplate.category}
                </span>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '14px'
                }}>
                  {selectedTemplate.level}
                </span>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '14px'
                }}>
                  {selectedTemplate.goal}
                </span>
              </div>
              <p style={{ color: '#666', fontSize: '16px' }}>{selectedTemplate.description}</p>
              
              {/* Day Selection for Exercise Templates */}
              {activeTab === 'exercise' && selectedTemplate.dayOptions && (
                <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Select Number of Workout Days:</h4>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {[3, 4, 5, 6].map((days) => (
                      <label key={days} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="templateDays"
                          value={days}
                          checked={selectedTemplateDays === days}
                          onChange={(e) => setSelectedTemplateDays(parseInt(e.target.value))}
                          style={{ marginRight: '8px' }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{days} Days</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Exercise Template Details */}
            {activeTab === 'exercise' && (selectedTemplate.days || selectedTemplate.dayOptions) && (
              <div>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>Workout Plan ({selectedTemplateDays} Days)</h3>
                {(selectedTemplate.days || selectedTemplate.dayOptions?.[selectedTemplateDays] || []).map((day, dayIndex) => (
                  <div key={dayIndex} style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '15px',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#007bff' }}>
                      {day.dayName} - {day.focus}
                    </h4>
                    <div style={{ display: 'grid', gap: '10px' }}>
                      {day.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} style={{
                          backgroundColor: 'white',
                          padding: '15px',
                          borderRadius: '6px',
                          border: '1px solid #dee2e6'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <strong style={{ color: '#333' }}>{exercise.name}</strong>
                            <span style={{
                              padding: '2px 8px',
                              backgroundColor: exercise.type === 'cardio' ? '#28a745' : 
                                               exercise.type === 'strength' ? '#007bff' : '#ffc107',
                              color: 'white',
                              borderRadius: '12px',
                              fontSize: '12px'
                            }}>
                              {exercise.type}
                            </span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px', fontSize: '14px' }}>
                            {exercise.sets > 0 && (
                              <div><strong>Sets:</strong> {exercise.sets}</div>
                            )}
                            {exercise.reps > 0 && (
                              <div><strong>Reps:</strong> {exercise.reps}</div>
                            )}
                            {exercise.duration > 0 && (
                              <div><strong>Duration:</strong> {exercise.duration}s</div>
                            )}
                            {exercise.rest > 0 && (
                              <div><strong>Rest:</strong> {exercise.rest}s</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Meal Template Details */}
            {activeTab === 'meal' && selectedTemplate.mealOptions && (
              <div>
                <h3 style={{ marginBottom: '15px', color: '#333' }}>Meal Plan</h3>
                
                {/* Target Macros */}
                <div style={{
                  backgroundColor: '#e9ecef',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Daily Targets</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                    <div><strong>Calories:</strong> {selectedTemplate.targetCalories}</div>
                    <div><strong>Protein:</strong> {selectedTemplate.targetProtein}g</div>
                    <div><strong>Carbs:</strong> {selectedTemplate.targetCarbs}g</div>
                    <div><strong>Fats:</strong> {selectedTemplate.targetFats}g</div>
                  </div>
                </div>

                {/* Meal Options */}
                {Object.entries(selectedTemplate.mealOptions).map(([mealType, options]) => (
                  <div key={mealType} style={{
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '15px',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#007bff', textTransform: 'capitalize' }}>
                      {mealType}
                    </h4>
                    <div style={{ display: 'grid', gap: '10px' }}>
                      {options.map((option) => (
                        <div key={option.id} style={{
                          backgroundColor: 'white',
                          padding: '15px',
                          borderRadius: '6px',
                          border: '1px solid #dee2e6'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <strong style={{ color: '#333' }}>{option.name}</strong>
                            {option.isCustom && (
                              <span style={{
                                padding: '2px 8px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                borderRadius: '12px',
                                fontSize: '12px'
                              }}>
                                Custom
                              </span>
                            )}
                          </div>
                          <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>{option.description}</p>
                          
                          {/* Display Food Items with Quantities */}
                          {option.foods && option.foods.length > 0 && (
                            <div style={{ marginTop: '10px' }}>
                              <h5 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '14px' }}>Food Items:</h5>
                              <div style={{ display: 'grid', gap: '8px' }}>
                                {option.foods.map((food, foodIndex) => (
                                  <div key={foodIndex} style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: '1px solid #e9ecef'
                                  }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                      <strong style={{ color: '#333', fontSize: '13px' }}>{food.name}</strong>
                                      <span style={{ color: '#007bff', fontSize: '12px', fontWeight: 'bold' }}>
                                        {food.quantity}
                                      </span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '5px', fontSize: '11px', color: '#666' }}>
                                      <div><strong>Calories:</strong> {food.calories}</div>
                                      <div><strong>Protein:</strong> {food.protein}g</div>
                                      <div><strong>Carbs:</strong> {food.carbs}g</div>
                                      <div><strong>Fats:</strong> {food.fats}g</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 