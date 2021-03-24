import React from 'react';
import { Link } from 'react-router-dom';

const ListIndexItem = ({ list }) => {

  return (
    <div>
      <Link to={`/lists/${list.id}`} className="">
        <li className="">
          <div className="name-holder">{list.name}</div>
        </li>
      </Link>
    </div>

  )
}

export default ListIndexItem;