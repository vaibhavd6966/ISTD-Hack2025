import React, { useState } from 'react';
import './css/Tasks.css'; // Assuming a separate CSS file for styling

const Tasks = () => {
  // State for tasks, collaborators, and insights
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [deadline, setDeadline] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [taskInsights, setTaskInsights] = useState('');

  // Handle task input change
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  // Handle deadline input change
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  // Handle collaborator input change
  const handleCollaboratorChange = (event) => {
    setCollaborators(event.target.value);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (task && deadline) {
      const newTask = { task, deadline, collaborators, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
      setTask('');
      setDeadline('');
      setCollaborators('');
    }
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Task Insights (Basic example)
  const getTaskInsights = () => {
    if (tasks.length > 5) {
      setTaskInsights('You are doing great! Try to focus on completing a few tasks at a time.');
    } else {
      setTaskInsights('Keep adding more tasks to stay on track with your goals!');
    }
  };

  return (
    <div className="tasks-container">
      <h1 className="tasks-header">Task Manager</h1>

      <div className="task-form">
        <h2>Create a New Task</h2>
        <div className="task-inputs">
          <input
            type="text"
            placeholder="Task Name"
            value={task}
            onChange={handleTaskChange}
          />
          <input
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <input
            type="text"
            placeholder="Collaborators (Comma Separated)"
            value={collaborators}
            onChange={handleCollaboratorChange}
          />
        </div>
        <button onClick={handleAddTask} className="add-task-btn">Add Task</button>
      </div>

      <div className="task-list">
        <h2>Your Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available. Add some tasks to start organizing your goals!</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span><strong>{task.task}</strong> - Due by {task.deadline}</span>
                <span>{task.collaborators && `Collaborators: ${task.collaborators}`}</span>
                <button onClick={() => handleDeleteTask(task.id)} className="delete-task-btn">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="task-insights">
        <h2>Task Insights</h2>
        <button onClick={getTaskInsights} className="insight-btn">Get Insights</button>
        <p>{taskInsights || 'Click "Get Insights" to receive personalized task tips!'}</p>
      </div>
    </div>
  );
};

export default Tasks;
