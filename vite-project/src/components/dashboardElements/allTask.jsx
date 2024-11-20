
import React from 'react'
import styles from './allTask.module.css'

const AllTask = ({ tasks, setTasks }) => {
    const handleCompleteClick = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = {
          ...updatedTasks[index],
          completed: true,
          active: false,
          newTask: false,
        };
      
        // Save updated tasks to localStorage
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      
        // Re-sync the state with the updated tasks
        setTasks(updatedTasks);
      };
  
    return (
      <div className={styles.container}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className={styles[`item${(index % 4) + 1}`]}>
              <h4>deadline <span> : </span> {task.date}</h4>
              <h1>{task.title}</h1>
              <h3>{task.description}</h3>
              <button className={styles.btnp} onClick={() => handleCompleteClick(index)}
              disabled={task.completed} // Disable the button if task is completed
            >
              {task.completed ? "Completed" : "Mark as done"} {/* Toggle button text */}
              </button>
            </div>
          ))
        ) : (
          <div>No tasks available.</div>
        )}
      </div>
    );
  };
  
  export default AllTask;
  
  

