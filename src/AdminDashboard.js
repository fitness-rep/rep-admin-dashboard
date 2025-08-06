import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import PlanCreationModal from "./PlanCreationModal";
import TemplateManagement from "./TemplateManagement";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeView, setActiveView] = useState('users'); // 'users' or 'templates'

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch all users
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
      console.log("Fetched users:", usersData.length);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Helper function to format fitness goal for display
  const formatFitnessGoal = (fitnessGoal) => {
    if (!fitnessGoal) return 'Not set';
    
    // Convert the goal to a simplified display format
    const goalMap = {
      'Fat Loss / Weight Reduction': 'Fat Loss',
      'Muscle Gain / Strength Building': 'Muscle Gain',
      'Body Recomposition (Lose fat & build muscle)': 'Body Recomposition',
      'General Health & Wellness': 'Health & Wellness'
    };
    
    return goalMap[fitnessGoal] || fitnessGoal;
  };

  const handleCreatePlan = (user) => {
    setSelectedUser(user);
    setShowPlanModal(true);
  };

  const handlePlanCreated = () => {
    fetchData(); // Refresh the data to show the new plan
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setActiveView('users')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: activeView === 'users' ? '#007bff' : '#f8f9fa',
              color: activeView === 'users' ? 'white' : '#495057',
              border: '1px solid #dee2e6',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Users
          </button>
          <button 
            onClick={() => setActiveView('templates')}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: activeView === 'templates' ? '#007bff' : '#f8f9fa',
              color: activeView === 'templates' ? 'white' : '#495057',
              border: '1px solid #dee2e6',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Templates
          </button>
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
      </div>

      {activeView === 'users' ? (
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Fitness Goal</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Last Paid On</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Next Payment Date</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Payment Plan</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.uid} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <Link 
                      to={`/user/${user.uid}`}
                      style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {user.name || 'N/A'}
                    </Link>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <Link 
                      to={`/goal/${user.uid}`}
                      style={{ 
                        backgroundColor: '#17a2b8',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                      }}
                    >
                      {formatFitnessGoal(user.fitnessGoal)}
                    </Link>
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {user.lastPaidOn ? (
                      new Date(user.lastPaidOn.seconds * 1000).toLocaleDateString()
                    ) : (
                      <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Not available</span>
                    )}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {user.nextPaymentDate ? (
                      <span style={{ 
                        color: new Date(user.nextPaymentDate.seconds * 1000) < new Date() ? '#dc3545' : '#28a745',
                        fontWeight: 'bold'
                      }}>
                        {new Date(user.nextPaymentDate.seconds * 1000).toLocaleDateString()}
                      </span>
                    ) : (
                      <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Not available</span>
                    )}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {user.paymentPlan ? (
                      <span style={{ 
                        backgroundColor: user.paymentPlan === 'three_month' ? '#17a2b8' : '#ffc107',
                        color: user.paymentPlan === 'three_month' ? 'white' : 'black',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {user.paymentPlan === 'three_month' ? '3 Month Plan' : '1 Month Plan'}
                      </span>
                    ) : (
                      <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Not set</span>
                    )}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <button 
                      onClick={() => handleCreatePlan(user)}
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
                      Create/Modify Plan
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ) : (
        <TemplateManagement />
      )}

      {showPlanModal && selectedUser && (
        <PlanCreationModal
          user={selectedUser}
          onClose={() => {
            setShowPlanModal(false);
            setSelectedUser(null);
          }}
          onPlanCreated={handlePlanCreated}
        />
      )}
    </div>
  );
}
