// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { endsWith } from 'firebase/firestore/pipelines';
import { useParams } from 'react-router';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [ value, setValue] = useState ([

    {
      id: 1,
      name: `nome`,
    }
  ])
  const { id } = useParams();
console.log(id)
  // Read data in real-time using onSnapshot
  useEffect(() => {
    const q = query(collection(db, 'todos', id), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData = [];
      querySnapshot.forEach((doc) => {
        todosData.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosData);
    });

    

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // Add data to Firestore
  const addTodo = async (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    try {
      await addDoc(collection(db, 'todos'), {
        text: newTodo,
        createdAt: new Date(),
      });
      setNewTodo('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  //eliminar dato
  const eliminar = async (todo) => {
    setTodos((prev) => prev.filter((e) => e.id != todo.id))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
 
        
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}  <button tipe="submit" onClick={() => eliminar(todo)}>eliminar</button></li> 
        
        ))}
      </ul>
    </div>
  );
}
