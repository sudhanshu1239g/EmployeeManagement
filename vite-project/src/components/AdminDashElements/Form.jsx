
import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react';

const Form = ({ onCreateTask }) => {
  // Initial task state
  const [task, setTask] = useState({
    title: "",
    date: "",
    assignee: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (task.title && task.date && task.assignee && task.category) {
      onCreateTask(task);  // Call the onCreateTask function from parent (App)
      
      // Reset the form fields to initial state after submission
      setTask({
        title: "",
        date: "",
        assignee: "",
        category: "",
        description: "",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Task Title</h2>
        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          value={task.title}
          onChange={handleChange}
          className={styles.btnp}
        />
        <h2>Date</h2>
        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
          className={styles.btnp}
        />
        <h2>Assign to</h2>
        <input
          type="text"
          name="assignee"
          placeholder="Employee name"
          value={task.assignee}
          onChange={handleChange}
          className={styles.btnp}
        />
        <h2>Category</h2>
        <input
          type="text"
          name="category"
          placeholder="Dev, Design, etc."
          value={task.category}
          onChange={handleChange}
          className={styles.btnp}
        />
        <h2>Description</h2>
        <textarea
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={handleChange}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Form;