import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.title,
      description: this.props.task.description,
      id: this.props.task.id
      // status: this.props.task.status
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let task = Object.assign({}, this.state)
    this.props.updateTask(this.state)
      .then(() => this.props.closeModal())
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  componentDidMount() {
    this.props.fetchTask(this.props.task.id)
  }

  render() {
    if (this.props.task === null) {
      return null
    }
    return (
      <div className="modal-container-create">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title">Edit Task</div>
          <div className="list-body">
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
          <div >
            <button className="submit-button">Edit</button>
          </div>
        </form>
      </div>

    )

  }

}

export default EditTask;