import React, {useState} from 'react';

const AddThoughtForm = ({ addThought }) => {
  const [text, setText]=useState('');
  const handleTextChange=(event)=>{
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addThought(text);
      setText('');
    }
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="Add a task"
        value={text} onChange={handleTextChange}
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

export default AddThoughtForm;