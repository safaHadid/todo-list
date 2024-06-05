import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import NoteDetail from './components/NoteDetail';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<TodoList todos={todos} setTodos={setTodos} />} 
        />
        <Route 
          path="/notes/:index" 
          element={<NoteDetail todos={todos} setTodos={setTodos} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
