import React from 'react';

const ListIndexItem = ({ comment, openModal, deleteComment}) => {

   const handleDelete = (e) => {
      e.preventDefault();
      deleteComment(comment.id)
    }

  return (
    <div> 
          {comment.body}
          <button className="review-but" onClick={handleDelete}>Delete</button>
          <button className="review-but" onClick={() => openModal({ "modal-type": "edit-comment", "comment": comment.id })}>Edit</button>
    </div>

  )
}

export default ListIndexItem;