import React from "react";

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.comment.body,
      id: this.props.comment.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.state)
      .then(() => this.props.closeModal())
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  componentDidMount() {
    this.props.fetchComment(this.props.comment.id)
  }

  render() {
    if (this.props.comment === null) {
      return null
    }
    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>
        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title"><i className="far fa-comment-dots"> Edit Comment </i></div>
          <div className="list-body">
            <textarea
              type="text"
              placeholder="body"
              value={this.state.body}
              onChange={this.handleInput("body")} />
          </div>
          <div >
            <button className="submit-button">Edit</button>
          </div>
        </form>
      </div>

    )
  }
}

export default EditComment;