const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Cargar modelo de ML
const model = require('../model_futbol.py'); // Ruta al archivo model_futbol.py

// Ruta para obtener la lista de partidos
app.get('/api/matches', (req, res) => {
  // Consultar base de datos o API externa para obtener datos de partidos
  const matches = [
    { id: 1, equipoLocal: 'Equipo A', equipoVisitante: 'Equipo B', fecha: '2024-05-20', hora: '18:00', resultado: 'Empate' },
    // ... más partidos
  ];

  // Generar predicciones para cada partido
  for (const match of matches) {
    // Predecir resultado usando el modelo ML
    const prediction = model.predict([/* Características del partido */]);
    match.prediccion = prediction;
  }

  res.json(matches);
});

// Ruta para obtener los detalles de un partido
app.get('/api/matches/:id', (req, res) => {
  const matchId = parseInt(req.params.id);
  // Consultar base de datos o API externa para obtener detalles del partido
  const match = {
    id: matchId,
    equipoLocal: 'Equipo A', // ... Completar con detalles del partido
    equipoVisitante: 'Equipo B',
    fecha: '2024-05-20',
    hora: '18:00',
    resultado: 'Empate', // ... Completar con resultado del partido
  };

  // Generar predicción para el partido específico
  const prediction = model.predict([/* Características del partido */]);
  match.prediccion = prediction;

  res.json(match);
});

app.listen(port, () => {
  console.log(`Server listening on
