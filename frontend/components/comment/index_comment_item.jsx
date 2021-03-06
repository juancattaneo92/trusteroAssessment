import React from 'react';

const ListIndexItem = ({ comment, openModal, deleteComment}) => {

   const handleDelete = (e) => {
      e.preventDefault();
      deleteComment(comment.id)
    }

  return (
    <div className="comment-container2">
      <div className="comment-item">
        <div className="inner-text">
          {comment.body}
        </div>
      </div>
      <div className="button-container2">
        <button className="edit-delete-button" onClick={() => openModal({ "modal-type": "edit-comment", "comment": comment.id })}><i className="far fa-edit"></i></button>
        <button className="edit-delete-button" onClick={handleDelete}><i className="far fa-trash-alt"></i></button>
      </div>
    </div>

  )
}

export default ListIndexItem;