import React from "react";

const TaskItem = ({ task, index, onToggleComplete, onEdit, onDelete }) => {
  return (
    <li className={`p-4 border mb-3 rounded-lg shadow-sm ${task.completed ? "bg-green-100" : "bg-white"}`}>
      <h3 className="font-bold text-lg text-gray-800">{task.name}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onToggleComplete(index)}
          className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-lg font-semibold"
        >
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={() => onEdit(index)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg font-semibold"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(index)}
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg font-semibold"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
