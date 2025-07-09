import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esto con tu nombre de Codespace
  const CODESPACE_URL = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities/';

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener actividades');
        return res.json();
      })
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando actividades...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Actividades</h2>
      <ul className="list-group">
        {activities.map((activity) => (
          <li key={activity.id} className="list-group-item">
            {activity.name} - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
