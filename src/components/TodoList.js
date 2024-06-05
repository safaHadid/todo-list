import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import '../styles/todo-list.css';

const TodoList = ({ todos, setTodos }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='TodoList'>    
      <div className='container'>
        <h3>Todo List</h3>
        <div className='input-and-button'>
          <input 
            type="text" 
            className="task-input" 
            placeholder="Enter your task" 
            value={task} 
            onChange={handleInputChange} 
          />
          <button 
            className="add-button" 
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <ListItem 
              key={index} 
              todo={todo} 
              index={index}
              onDelete={() => handleDeleteTodo(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;





