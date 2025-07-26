import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import UserDetail from "./UserDetail";
import GoalDetail from "./GoalDetail";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) return <Login onLogin={() => {}} />;

  return (
    <Router>
      <div>
        <button onClick={() => signOut(auth)}>Sign Out</button>
        <Routes>
          <Route path="/" element={<AdminDashboard user={user} />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/goal/:goalId" element={<GoalDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
