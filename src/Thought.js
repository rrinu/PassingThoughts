import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Thought = ({ thought, removeThought }) => {
  const [completed, setCompleted] = useState(false);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();

    if (timeRemaining > 0) {
      const timeoutId = setTimeout(() => {
        removeThought(thought.id);
      }, timeRemaining);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [thought, removeThought]);

  return (
    <div className='Thought-whole'>
      <li className={`Thought ${completed ? 'completed' : ''}`}>
        <div className="checkbox" onClick={handleToggleComplete}>
        <div className={`circle ${completed ? 'completed' : ''}`}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <button
          aria-label="Remove thought"
          className="remove-button"
          onClick={handleRemoveClick}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <div className="text">
          <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {thought.text}
          </p>
        </div>
      </li>
    </div>
  );
}

export default Thought;
