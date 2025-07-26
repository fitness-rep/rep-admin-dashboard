import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function GoalDetail() {
  const { goalId } = useParams();
  const [goal, setGoal] = useState(null);
  const [routine, setRoutine] = useState(null);
  const [exercisePlan, setExercisePlan] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoalData = async () => {
      try {
        // Fetch goal
        const goalDoc = await getDoc(doc(db, "goals", goalId));
        if (goalDoc.exists()) {
          const goalData = { id: goalDoc.id, ...goalDoc.data() };
          setGoal(goalData);

          // Fetch routine if goal has one
          if (goalData.routineId) {
            const routineDoc = await getDoc(doc(db, "routines", goalData.routineId));
            if (routineDoc.exists()) {
              const routineData = { id: routineDoc.id, ...routineDoc.data() };
              setRoutine(routineData);

              // Fetch exercise plan
              if (routineData.exercisePlanId) {
                const exercisePlanDoc = await getDoc(doc(db, "exercisePlans", routineData.exercisePlanId));
                if (exercisePlanDoc.exists()) {
                  setExercisePlan({ id: exercisePlanDoc.id, ...exercisePlanDoc.data() });
                }
              }

              // Fetch meal plan
              if (routineData.mealPlanId) {
                const mealPlanDoc = await getDoc(doc(db, "mealPlans", routineData.mealPlanId));
                if (mealPlanDoc.exists()) {
                  setMealPlan({ id: mealPlanDoc.id, ...mealPlanDoc.data() });
                }
              }
            }
          }
        } else {
          console.log("No such goal!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching goal data:", error);
        setLoading(false);
      }
    };

    fetchGoalData();
  }, [goalId]);

  if (loading) {
    return <div>Loading goal details...</div>;
  }

  if (!goal) {
    return <div>Goal not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link 
          to="/"
          style={{ 
            color: '#007bff', 
            textDecoration: 'none',
            marginRight: '20px'
          }}
        >
          ← Back to Dashboard
        </Link>
      </div>

      <h1>Goal Details</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Goal Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Goal ID:</td>
              <td style={{ padding: '8px' }}>{goal.goalId}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>User ID:</td>
              <td style={{ padding: '8px' }}>{goal.userId}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Type:</td>
              <td style={{ padding: '8px' }}>{goal.type || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Description:</td>
              <td style={{ padding: '8px' }}>{goal.description || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Target Value:</td>
              <td style={{ padding: '8px' }}>
                {goal.targetValue ? `${goal.targetValue} ${goal.targetUnit || ''}` : 'N/A'}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Duration (Weeks):</td>
              <td style={{ padding: '8px' }}>{goal.durationWeeks || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Target Per Week:</td>
              <td style={{ padding: '8px' }}>{goal.targetPerWeek || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Progress:</td>
              <td style={{ padding: '8px' }}>{goal.progress || 0}%</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Status:</td>
              <td style={{ padding: '8px' }}>
                <span style={{ 
                  color: goal.isActive ? 'green' : 'red',
                  fontWeight: 'bold'
                }}>
                  {goal.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Start Date:</td>
              <td style={{ padding: '8px' }}>
                {goal.startDate ? new Date(goal.startDate.seconds * 1000).toLocaleDateString() : 'N/A'}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>End Date:</td>
              <td style={{ padding: '8px' }}>
                {goal.endDate ? new Date(goal.endDate.seconds * 1000).toLocaleDateString() : 'N/A'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {routine && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2>Routine Information</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Routine ID:</td>
                <td style={{ padding: '8px' }}>{routine.documentId}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Name:</td>
                <td style={{ padding: '8px' }}>{routine.name || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Description:</td>
                <td style={{ padding: '8px' }}>{routine.description || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Exercise Plan ID:</td>
                <td style={{ padding: '8px' }}>{routine.exercisePlanId || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Meal Plan ID:</td>
                <td style={{ padding: '8px' }}>{routine.mealPlanId || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Current Day:</td>
                <td style={{ padding: '8px' }}>{routine.currentDay || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Status:</td>
                <td style={{ padding: '8px' }}>
                  <span style={{ 
                    color: routine.isActive ? 'green' : 'red',
                    fontWeight: 'bold'
                  }}>
                    {routine.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {exercisePlan && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2>Exercise Plan Information</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Exercise Plan ID:</td>
                <td style={{ padding: '8px' }}>{exercisePlan.documentId}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Description:</td>
                <td style={{ padding: '8px' }}>{exercisePlan.description || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Created By:</td>
                <td style={{ padding: '8px' }}>{exercisePlan.createdBy || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Number of Exercises:</td>
                <td style={{ padding: '8px' }}>{exercisePlan.exercises ? exercisePlan.exercises.length : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {mealPlan && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2>Meal Plan Information</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Meal Plan ID:</td>
                <td style={{ padding: '8px' }}>{mealPlan.documentId}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Description:</td>
                <td style={{ padding: '8px' }}>{mealPlan.description || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Created By:</td>
                <td style={{ padding: '8px' }}>{mealPlan.createdBy || 'N/A'}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>Number of Meals:</td>
                <td style={{ padding: '8px' }}>{mealPlan.meals ? mealPlan.meals.length : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {!routine && (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #ffeaa7'
        }}>
          <h3>No Routine Assigned</h3>
          <p>This goal does not have an associated routine yet.</p>
        </div>
      )}
    </div>
  );
} 