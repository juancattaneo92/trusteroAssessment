import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({ list }) => {

  return (
    <div className="list-container">
      <Link to={`/lists/${list.id}`} className="list-link">
          <div className="list-item">{list.name}</div>
      </Link>
    </div>

  )
}

export default ListIndexItem;