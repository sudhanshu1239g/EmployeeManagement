import { useContext, useEffect, useState } from 'react'
import './App.css'
import LoginPage from './components/loginPage'
import Dashboard from './components/dashboard'
import AdminDash from './components/adminDash'
import { GetLocalStorage, SetLocalStorage } from './components/LocalStorage'
import { AuthContext } from './components/context/AuthProvider'
function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const authdata = useContext(AuthContext);

  useEffect(() => {
    // Initialize local storage if not already set
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      SetLocalStorage();  // Ensure this function is correctly setting data in localStorage
    }

    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);  // Set tasks from localStorage
  }, []);

  useEffect(() => {
    if (authdata) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  }, [authdata]);  // When authdata changes, check if user is logged in

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      const adminData = { role: "admin", email };
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (
      authdata &&
      authdata.employeeData.find((e) => e.email === email && e.password === password)
    ) {
      const loggedInEmployee = authdata.employeeData.find(
        (e) => e.email === email && e.password === password
      );
      setUser("employee");
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInEmployee));
    } else {
      alert("Invalid user credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: true,
      active: false,
      newTask: false,
    };

    // Update tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks); // Update state to re-render
  };

  const handleTaskRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    // Update tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks); // Update state to re-render
  };
  const handleTaskCreation = (newTask) => {
    // Ensure the task has the necessary fields for filtering
    const taskWithDefaultFields = {
      ...newTask,
      active: true,         // By default, the task is active
      newTask: true,        // New tasks should be marked as 'newTask'
      completed: false,     // Set to false initially
      failed: false,        // Set to false initially
    };
  
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, taskWithDefaultFields];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));  // Store updated tasks in localStorage
      return updatedTasks;
    });
  };

  return (
    <>
      {!user ? (
        <LoginPage handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDash
          data={authdata}
          onLogout={handleLogout}
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskRemove={handleTaskRemove}
          onTaskCreate={handleTaskCreation}
        />
      ) : (
        <Dashboard data={authdata} onLogout={handleLogout} tasks={tasks} />
      )}
    </>
  );
}

export default App;