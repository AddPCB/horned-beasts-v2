import React, { useState } from "react";
import "../css/HornedBeast.css";

function HornedBeast({ beast, handleModal }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (!voted) {
      setVotes(votes + 1);
      setVoted(true);
    }
  };

  const handleClick = () => {
    handleModal(beast);
  };

  return (
    <figure className="HornedBeast" style={{ visibility: beast ? 'visible' : 'hidden' }}>
      {beast && (
        <>
          <h2>{beast.title}</h2>
          <img src={beast.imageUrl} alt={beast.title} onClick={handleClick} />
          <figcaption>{beast.description}</figcaption>
          <aside className="heart" onClick={handleVote}>❤️
            <span className="vote-count">
              <h3>Click</h3>
              {votes}
              <h4>to vote</h4>
            </span>
          </aside>
        </>
      )}
    </figure>
  );
}

export default HornedBeast;