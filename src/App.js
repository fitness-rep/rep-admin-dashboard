import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) return <Login onLogin={() => {}} />;

  return (
    <div>
      <button onClick={() => signOut(auth)}>Sign Out</button>
      <AdminDashboard user={user} />
    </div>
  );

}

export default App;
