
import React from 'react'
import styles from './TaskList.module.css'

const TaskList = ({ tasks, onTaskComplete, onTaskRemove }) => {
    return (
      <div className={styles.container}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              key={index}
              className={styles[`item${(index % 5) + 1}`]}
            >
              <h2>
                {task.assignee} <span>{task.title}</span>
              </h2>
              <p>{task.date}</p>
              <p>{task.description}</p>
              <p>Category: {task.category}</p>
  
              {/* Complete button */}
              <button
                onClick={() => onTaskComplete(index)}
                disabled={task.completed} // Disable if the task is already completed
              >
                {task.completed ? "Completed" : "Complete"}
              </button>
  
              {/* Remove button */}
              <button className={styles.remove}onClick={() => onTaskRemove(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No tasks created yet.</p>
        )}
      </div>
    );
  };
  
  export default TaskList;
