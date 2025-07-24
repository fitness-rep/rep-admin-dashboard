import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "users"))
      .then(snapshot => {
        setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name} ({u.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
}
