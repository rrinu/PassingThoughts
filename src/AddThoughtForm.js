import React, {useState} from 'react';

const AddThoughtForm = ({ addThought }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      addThought(text, dueDate);
      setText('');
      setDueDate('');
    }
  };
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="Add a task"
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="date"
        className="date-input"
        value={dueDate}
        onChange={handleDateChange}
        min={getTodayDate()} 
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

export default AddThoughtForm;