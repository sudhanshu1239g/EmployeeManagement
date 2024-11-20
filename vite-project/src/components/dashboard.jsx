
import React from 'react'
import Header from './dashboardElements/header'
import TaskNumberList from './dashboardElements/taskNumberList'
import AllTask from './dashboardElements/allTask'
import styles from './dashboard.module.css'

const Dashboard = ({ data, onLogout, tasks, setTasks }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userTasks = tasks.filter(
    (task) => task.assignee === loggedInUser.firstName
  );

  return (
    <>
      <Header data={data} onLogout={onLogout} />
      <div className={styles.backgroundStyle}>

        <TaskNumberList tasks={userTasks} />

      </div>
      <AllTask tasks={userTasks} setTasks={setTasks} />
    </>

  );
};

export default Dashboard;