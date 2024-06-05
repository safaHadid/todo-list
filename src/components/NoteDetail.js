import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/note-detail.css';

const NoteDetail = ({ todos, setTodos }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const todo = todos[index];
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleSave = () => {
    const updatedTodos = todos.map((item, idx) => 
      idx === parseInt(index) ? editedTodo : item
    );
    setTodos(updatedTodos);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="NoteDetail">
      <div className="container">
        <h2>Edit Note</h2>
        <textarea 
          className="edit-textarea"
          value={editedTodo} 
          onChange={handleEdit} 
        />
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;