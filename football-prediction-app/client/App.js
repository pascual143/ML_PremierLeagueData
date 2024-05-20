import React, [ useState, useEffect ] from 'react'
import MatchList from './MatchList'

function App() {
  const [ matches, setMatches ] = useState([]);

  useEffect(() => {
    fetch('/api/matches')
    .then((response) => response.json())
    .then((data) => setMatches(data));
  }, []);

  return (
    <div className='App'>
      <h1>Predicciones de futbol</h1>
      <MatchList matches={matches} />
    </div>
  )
}

export default App;
