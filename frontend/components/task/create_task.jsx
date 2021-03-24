import React from "react";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // status: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    let task = Object.assign({}, this.state)
    task.list_id = this.props.listId
    this.props.createTask(this.props.listId, task).then(this.props.closeModal)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  render() {

    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-X' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="List-title">Create Task</div>

          <div className="body-div">
            <textarea
              type="text"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleInput("title")} />
            <textarea
              type="text"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInput("description")} />
            {/* <input
              type="radio"
              name="status"
              value */}
          </div>

          <div className="submit-but-div">
            <button>Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CreateTask;