import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeigthborsClassifier
from sklearn.metrics import accuracy_score

#Cargar datos de ejemplo (se asume que ya tienes tus datos preprocesados)
data = pd.read_csv('football_data.csv')

x= data[['Equipo Local','Equipo Visitante','Goles local','Goles visitante','Tiros local','Tiros visitante','Posesion local','Posesion visitante']]
y= data['Resultado']

# Dividir datos en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

#Entrenar el modelo KNN
knn = KNeightborsClassifier(n_neightbors=5)
knn.fit(X_train, y_train)

# Evaluar el modelo
y_pred = knn.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print('Precision', accuracy)

#Funcion para predecir el resultado de un partudo nuevo
def predict_match(equipoLocal, equipoVisitante, golesLocal, golesVisitante, tirosLocal, tirosVisitante, posesionLocal, posesionVisitante ):
  #Preparar datos de entrada (formato similar a los datos de entrenamiento)
  data = pd.DataFrame({
    'Equipo local': [equipoLocal],
    'Equipo visitante': [equipoVisitante],
    'Goles local': [golesLocal],
    'Goles visitante': [golesVisitante],
    'Tiros local': [tirosLocal],
    'Tiros visitante': [tirosVisitante],
    'Posesion local': [posesionLocal],
    'Posesion visitante': [posesionVisitante]
  })

#Predecir resultado
prediction = knn.predict(data)
return prediction[0]

// Explicación:

// Se importan las librerías necesarias para el análisis de datos y machine learning.
// Se cargan los datos de ejemplo (reemplazar con tu conjunto de datos preprocesado).
// Se separan las variables características (X) y la variable objetivo (y).
// Se dividen los datos en entrenamiento y prueba.
// Se entrena el modelo KNN con un número específico de vecinos (n_neighbors=5).
// Se evalúa el modelo utilizando la métrica de precisión (accuracy_score).
// Se define una función predict_match que recibe las características de un partido nuevo y devuelve la predicción del resultado.
