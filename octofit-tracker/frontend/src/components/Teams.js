import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esto con tu nombre de Codespace
  const CODESPACE_URL = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/teams/';

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener equipos');
        return res.json();
      })
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando equipos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Equipos</h2>
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team.id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
