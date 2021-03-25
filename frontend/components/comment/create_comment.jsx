import React from "react";

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    let comment = Object.assign({}, this.state)
    comment.task_id = this.props.taskId
    this.props.createComment(this.props.taskId, comment)
      .then(this.props.closeModal)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  render() {

    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title">Create Comment</div>

          <div className="list-body">
            <textarea
              type="text"
              placeholder="body"
              value={this.state.body}
              onChange={this.handleInput("body")} />
          </div>

          <div>
            <button className="submit-button">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CreateComment;