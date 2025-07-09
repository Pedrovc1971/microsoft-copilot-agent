import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esto con tu nombre de Codespace
  const CODESPACE_URL = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/users/';

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener usuarios');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Usuarios</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
