import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText]=useState('');
  const handleTextChange=(event)=>{
    setText(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(text.length!=0){
    const TObj={
      id:generateId(),
      text:text,
      expiresAt:getNewExpirationTime()
    };
    props.addThought(TObj);
    setText('');
    //to clear the text from input field once the add button is clicked.
  }
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text} onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}