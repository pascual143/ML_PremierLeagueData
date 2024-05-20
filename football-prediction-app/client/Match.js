import React from 'react';

function Match({ match }) {
  return (
    <div className="Match">
      <h2>{match.equipoLocal} vs {match.equipoVisitante}</h2>
      <p>Fecha: {match.fecha}</p>
      <p>Hora: {match.hora}</p>
      <p>Predicción: {match.prediccion}</p>
      {/* Análisis más profundo de las predicciones del ML */}
    </div>
  );
}

export default Match;
