import React from 'react';
import { Link } from 'react-router-dom';

const TaskIndexItem = ({ task }) => {

  return (
    <div>
      <Link to={`/tasks/${task.id}`} className="">
        <li className="">
          <div className="name-holder">{task.title}</div>
        </li>
      </Link>
    </div>

  )
}

export default TaskIndexItem;