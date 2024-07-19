import React from 'react';
import AddThoughtForm from './AddThoughtForm';
import Thought from './Thought';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ProfessionalThoughts = ({ thoughts, addThought, removeThought, clearAllThoughts }) => {
  return (
    <div className="App">
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought}
            removeThought={removeThought} />
          ))}
        </ul>
        {thoughts.length > 0 && (
          <button className="clear-all-button" onClick={clearAllThoughts}>
            <FontAwesomeIcon icon={faTrashAlt} /> Clear All Thoughts</button>
        )}
      </main>
    </div>
  );
}


export default ProfessionalThoughts;
