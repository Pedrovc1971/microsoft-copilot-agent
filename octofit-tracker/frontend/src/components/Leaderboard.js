import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esto con tu nombre de Codespace
  const CODESPACE_URL = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/leaderboard/';

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener leaderboard');
        return res.json();
      })
      .then((data) => {
        setLeaderboard(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando leaderboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaderboard.map((entry) => (
          <li key={entry.id} className="list-group-item">
            {entry.user} - {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
