
import React from 'react'
import styles from './taskNumberList.module.css'

const TaskNumberList = ({ tasks }) => {
    const newTaskCount = tasks.filter((task) => task.newTask && task.active).length;
    const completedTaskCount = tasks.filter((task) => task.completed).length;
    const acceptedTaskCount = tasks.filter((task) => task.active && !task.failed && !task.completed).length;
    const failedTaskCount = tasks.filter((task) => task.failed).length;
  
    return (
      <div className={styles.item}>
        <div className={styles.item1}>{newTaskCount} <br /> New Task</div>
        <div className={styles.item2}>{completedTaskCount} <br /> Completed Task</div>
        <div className={styles.item3}>{acceptedTaskCount} <br /> Accepted Task</div>
        <div className={styles.item4}>{failedTaskCount} <br /> Failed Task</div>
      </div>
    );
  };
  
  export default TaskNumberList;
  