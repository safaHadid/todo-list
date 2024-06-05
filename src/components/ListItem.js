import React, { useState } from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import '../styles/list-item.css';

const ListItem = ({ todo, index, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className='ListItem'>
      <FaCheck
        className="icon"
        onClick={toggleCompleted}
        style={{ 
          backgroundColor: completed ? '#135d52' : 'white',
          color: completed ? 'white' : 'black'
        }}
      />
      <li className="li-item" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <Link to={`/notes/${index}`} className="todo-link">
          {todo}
        </Link>
      </li>
      <div className='editAndDeleteIcons'>
        <Link to={`/notes/${index}`} className="todo-link">
          <FaEdit className="icon edit"/>
        </Link>
        <FaTrash className="icon delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default ListItem;