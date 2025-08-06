import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import ExercisesDashboard from "./ExercisesDashboard";
import FoodsDashboard from "./FoodsDashboard";
import UserDetail from "./UserDetail";
import GoalDetail from "./GoalDetail";

function NavigationTabs() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      borderBottom: '1px solid #dee2e6',
      padding: '0 20px'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link 
          to="/"
          style={{ 
            padding: '15px 20px',
            textDecoration: 'none',
            color: isActive('/') ? '#007bff' : '#6c757d',
            borderBottom: isActive('/') ? '3px solid #007bff' : '3px solid transparent',
            fontWeight: isActive('/') ? 'bold' : 'normal',
            backgroundColor: isActive('/') ? 'white' : 'transparent'
          }}
        >
          Admin Dashboard
        </Link>
        <Link 
          to="/exercises"
          style={{ 
            padding: '15px 20px',
            textDecoration: 'none',
            color: isActive('/exercises') ? '#007bff' : '#6c757d',
            borderBottom: isActive('/exercises') ? '3px solid #007bff' : '3px solid transparent',
            fontWeight: isActive('/exercises') ? 'bold' : 'normal',
            backgroundColor: isActive('/exercises') ? 'white' : 'transparent'
          }}
        >
          Exercises
        </Link>
        <Link 
          to="/foods"
          style={{ 
            padding: '15px 20px',
            textDecoration: 'none',
            color: isActive('/foods') ? '#007bff' : '#6c757d',
            borderBottom: isActive('/foods') ? '3px solid #007bff' : '3px solid transparent',
            fontWeight: isActive('/foods') ? 'bold' : 'normal',
            backgroundColor: isActive('/foods') ? 'white' : 'transparent'
          }}
        >
          Foods
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) return <Login onLogin={() => {}} />;

  return (
    <Router>
      <div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: 'white',
          borderBottom: '1px solid #dee2e6'
        }}>
          <h2 style={{ margin: 0, color: '#333' }}>R.E.P Admin Panel</h2>
          <button 
            onClick={() => signOut(auth)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sign Out
          </button>
        </div>
        
        <NavigationTabs />
        
        <Routes>
          <Route path="/" element={<AdminDashboard user={user} />} />
          <Route path="/exercises" element={<ExercisesDashboard />} />
          <Route path="/foods" element={<FoodsDashboard />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/goal/:goalId" element={<GoalDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
