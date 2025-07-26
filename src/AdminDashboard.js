import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db, auth } from "./firebase";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Debug: Check current user
        const currentUser = auth.currentUser;
        console.log("Current user:", currentUser?.uid);
        
        if (currentUser) {
          // Try to fetch the current user's document to check isAdmin
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            console.log("Current user document:", userDoc.data());
            console.log("isAdmin field:", userDoc.data().isAdmin);
          } else {
            console.log("Current user document not found");
          }
        }

        // Fetch all users
        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);

        // Fetch all active goals from the goals collection
        const goalsQuery = query(collection(db, "goals"), where("isActive", "==", true));
        const goalsSnapshot = await getDocs(goalsQuery);
        const goalsData = goalsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setGoals(goalsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to get active goal for a user from the goals collection
  const getActiveGoal = (userId) => {
    return goals.find(goal => goal.userId === userId);
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Admin Dashboard</h1>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Create New User
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>User ID</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Is Active</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Active Goal ID</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Goal Description</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              const activeGoal = getActiveGoal(user.uid);
              return (
                <tr key={user.uid} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <Link 
                      to={`/user/${user.uid}`}
                      style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                      {user.uid}
                    </Link>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.name || 'N/A'}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.email || 'N/A'}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <span style={{ 
                      color: user.isActive !== false ? 'green' : 'red',
                      fontWeight: 'bold'
                    }}>
                      {user.isActive !== false ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {activeGoal ? (
                      <Link 
                        to={`/goal/${activeGoal.goalId}`}
                        style={{ color: '#007bff', textDecoration: 'none' }}
                      >
                        {activeGoal.goalId}
                      </Link>
                    ) : (
                      'No active goal'
                    )}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {activeGoal ? activeGoal.description : 'N/A'}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <button 
                      style={{ 
                        padding: '5px 10px', 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '3px',
                        cursor: 'pointer',
                        marginRight: '5px'
                      }}
                    >
                      Create/Modify Goal
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
