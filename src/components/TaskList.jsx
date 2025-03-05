import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
