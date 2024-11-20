import React from 'react'
import Form from './AdminDashElements/Form'
import TaskList from './AdminDashElements/TaskList'
import Header from './AdminDashElements/Header'
import styles from './adminDash.module.css'


const AdminDash = ({ data, onLogout, tasks, onTaskCreate, onTaskComplete, onTaskRemove }) => {
  return (
    <>
    
    
    <div className={styles.bgI}>  
    <Header onLogout={onLogout} />
      <Form onCreateTask={onTaskCreate} /> {/* Pass task creation handler */}
      <TaskList
        tasks={tasks}
        onTaskComplete={onTaskComplete} // Pass task completion handler
        onTaskRemove={onTaskRemove}     // Pass task removal handler
      />
    </div>
    </>
  );
};

export default AdminDash;