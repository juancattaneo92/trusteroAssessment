import React from 'react';
import { Link } from 'react-router-dom';

const TaskIndexItem = ({ task }) => {

  return (
    <div>
      <Link to={`/tasks/${task.id}`} className="task-link">
          <div className="task-item">{task.title}</div>
      </Link>
    </div>

  )
}

export default TaskIndexItem;