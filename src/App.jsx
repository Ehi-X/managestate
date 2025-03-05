import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskName || !taskDescription) return;

    if (editingTask !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTask ? { ...task, name: taskName, description: taskDescription } : task
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      setTasks([...tasks, { name: taskName, description: taskDescription, completed: false }]);
    }

    setTaskName("");
    setTaskDescription("");
  };

  const handleEditTask = (index) => {
    setEditingTask(index);
    setTaskName(tasks[index].name);
    setTaskDescription(tasks[index].description);
  };

  const handleDeleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const handleToggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div className="container mx-auto p-6 max-w-md bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">To-Do List</h1>
      <TaskForm
        taskName={taskName}
        taskDescription={taskDescription}
        setTaskName={setTaskName}
        setTaskDescription={setTaskDescription}
        onSubmit={handleAddTask}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
