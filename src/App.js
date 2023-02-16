import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';
import image from "./images/thinking-girl.png"
import './style.css'

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for you to write your thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 1 hour.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought=(thought)=>{
    setThoughts(prev=>[thought, ...prev]);
  }

const removeThought = (thoughtIdToRemove) => {
  setThoughts((thoughts) =>
    thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
  );
};

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought}
            removeThought={removeThought} />
          ))}
        </ul>
        <img src={image} alt="thinking girl"/>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));