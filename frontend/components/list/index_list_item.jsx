import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({ list }) => {

  return (
    <div>
      <Link to={`/lists/${list.id}`} className="">
          <div className="name-holder">{list.name}</div>
      </Link>
    </div>

  )
}

export default ListIndexItem;