import React from 'react';
import Match from './Match';

function MatchList({ matches }) {
  return (
    <div className="MatchList">
      {matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </div>
  );
}

export default MatchList;
