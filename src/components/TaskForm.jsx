import React, { useState, useEffect } from "react";

const TaskForm = ({ taskName, taskDescription, setTaskName, setTaskDescription, onSubmit, editingTask }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-3 w-full mb-3 rounded-lg shadow-sm"
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="border p-3 w-full mb-3 rounded-lg shadow-sm"
      />
      <button onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 w-full rounded-lg font-semibold">
        {editingTask !== null ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
