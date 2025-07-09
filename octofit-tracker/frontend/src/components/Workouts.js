import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza esto con tu nombre de Codespace
  const CODESPACE_URL = 'https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/workouts/';

  useEffect(() => {
    fetch(CODESPACE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener workouts');
        return res.json();
      })
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando workouts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout) => (
          <li key={workout.id} className="list-group-item">
            {workout.name} - {workout.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
