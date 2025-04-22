import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={task.id || index}  
          id={task.id}
          text={task.text} 
          category={task.category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default TaskList;