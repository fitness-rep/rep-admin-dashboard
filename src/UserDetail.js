import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          setUser({ id: userDoc.id, ...userDoc.data() });
        } else {
          console.log("No such user!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>Loading user details...</div>;
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

      <h1>User Details</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Basic Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>User ID:</td>
              <td style={{ padding: '8px' }}>{user.uid}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Name:</td>
              <td style={{ padding: '8px' }}>{user.name || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Email:</td>
              <td style={{ padding: '8px' }}>{user.email || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Gender:</td>
              <td style={{ padding: '8px' }}>{user.gender || 'N/A'}</td>
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
        <h2>Fitness Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Fitness Goal:</td>
              <td style={{ padding: '8px' }}>{user.fitnessGoal || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Strength Experience:</td>
              <td style={{ padding: '8px' }}>{user.strengthExperience || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Experience Level:</td>
              <td style={{ padding: '8px' }}>{user.experienceLevel || 'N/A'}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Exercise Location:</td>
              <td style={{ padding: '8px' }}>{user.exerciseLocation || 'N/A'}</td>
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
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Food Preference:</td>
              <td style={{ padding: '8px' }}>{user.foodPreference || 'N/A'}</td>
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
        <h2>Health Information</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold', width: '200px' }}>Taking Medications:</td>
              <td style={{ padding: '8px' }}>
                {user.isTakingMedications ? 'Yes' : 'No'}
                {user.isTakingMedications && user.medications && ` (${user.medications})`}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Has Injuries:</td>
              <td style={{ padding: '8px' }}>
                {user.hasInjuries ? 'Yes' : 'No'}
                {user.hasInjuries && user.injuries && ` (${user.injuries})`}
              </td>
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
        <h2>Current Status</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Registration Date:</td>
              <td style={{ padding: '8px' }}>
                {user.registrationDate ? new Date(user.registrationDate.seconds * 1000).toLocaleDateString() : 'N/A'}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>Current Routine ID:</td>
              <td style={{ padding: '8px' }}>{user.currentRoutineId || 'No active routine'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 