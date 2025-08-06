import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function GoalDetail() {
  const { goalId } = useParams(); // This is actually the userId now
  const [user, setUser] = useState(null);
  const [userGoals, setUserGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoalData = async () => {
      try {
        // Fetch user data
        const userDoc = await getDoc(doc(db, "users", goalId));
        if (userDoc.exists()) {
          const userData = { id: userDoc.id, ...userDoc.data() };
          setUser(userData);

          // Fetch any goals associated with this user from the goals collection
          const goalsQuery = query(collection(db, "goals"), where("userId", "==", goalId));
          const goalsSnapshot = await getDocs(goalsQuery);
          const goalsData = goalsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setUserGoals(goalsData);
        } else {
          console.log("No such user!");
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

  if (!user) {
    return <div>User not found</div>;
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

      <h1>Goal Details for {user.name}</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>User Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Name:</td>
              <td style={{ padding: '8px' }}>{user.name || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Email:</td>
              <td style={{ padding: '8px' }}>{user.email || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Age:</td>
              <td style={{ padding: '8px' }}>{user.age || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Height:</td>
              <td style={{ padding: '8px' }}>{user.height} {user.heightUnit || 'cm'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Weight:</td>
              <td style={{ padding: '8px' }}>{user.weight} {user.weightUnit || 'kg'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Target Weight:</td>
              <td style={{ padding: '8px' }}>{user.targetWeight} {user.targetWeightUnit || 'kg'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Fitness Goal</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Selected Goal:</td>
              <td style={{ padding: '8px' }}>
                <span style={{ 
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  {user.fitnessGoal || 'Not set'}
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Experience Level:</td>
              <td style={{ padding: '8px' }}>{user.experienceLevel || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Workout Duration:</td>
              <td style={{ padding: '8px' }}>{user.workoutDuration || 'N/A'} minutes</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Training Window:</td>
              <td style={{ padding: '8px' }}>{user.trainingWindowStart || 'N/A'} - {user.trainingWindowEnd || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Fixed Schedule Days:</td>
              <td style={{ padding: '8px' }}>
                {user.fixedScheduleDays && user.fixedScheduleDays.length > 0 ? (
                  user.fixedScheduleDays.join(', ')
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Smart Schedule Workouts Per Week:</td>
              <td style={{ padding: '8px' }}>{user.smartScheduleWorkoutsPerWeek || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {userGoals.length > 0 ? (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2>Assigned Plans ({userGoals.length})</h2>
          {userGoals.map((goal, index) => (
            <div key={goal.id} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
              <h3>Plan {index + 1}</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Goal ID:</td>
                    <td style={{ padding: '8px' }}>{goal.id}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Type:</td>
                    <td style={{ padding: '8px' }}>{goal.type || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Status:</td>
                    <td style={{ padding: '8px' }}>
                      <span style={{ 
                        color: goal.isActive ? '#28a745' : '#dc3545',
                        fontWeight: 'bold'
                      }}>
                        {goal.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Routine ID:</td>
                    <td style={{ padding: '8px' }}>{goal.routineId || 'No routine assigned'}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 'bold' }}>Created:</td>
                    <td style={{ padding: '8px' }}>
                      {goal.createdAt ? new Date(goal.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ffeaa7'
        }}>
          <h2>No Plans Assigned</h2>
          <p>This user has not been assigned any exercise or meal plans yet.</p>
          <p>Click "Create/Modify Plan" in the admin dashboard to assign plans based on their fitness goal.</p>
        </div>
      )}

      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Nutrition Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Food Preference:</td>
              <td style={{ padding: '8px' }}>{user.foodPreference || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Dietary Restrictions:</td>
              <td style={{ padding: '8px' }}>
                {user.dietaryRestrictions && user.dietaryRestrictions.length > 0 ? (
                  user.dietaryRestrictions.join(', ')
                ) : (
                  'None'
                )}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Allergies:</td>
              <td style={{ padding: '8px' }}>
                {user.allergies && user.allergies.length > 0 ? (
                  user.allergies.join(', ')
                ) : (
                  'None'
                )}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Calorie Goal:</td>
              <td style={{ padding: '8px' }}>{user.calorieGoal || 'N/A'} calories</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Protein Goal:</td>
              <td style={{ padding: '8px' }}>{user.proteinGoal || 'N/A'}g</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Carb Goal:</td>
              <td style={{ padding: '8px' }}>{user.carbGoal || 'N/A'}g</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Fat Goal:</td>
              <td style={{ padding: '8px' }}>{user.fatGoal || 'N/A'}g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 