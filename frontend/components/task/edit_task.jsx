import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.title,
      description: this.props.task.description,
      id: this.props.task.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title"><i className="fas fa-tasks"></i> Edit Task </div>
          <div className="list-body">
            <div className="list-title2">
              <textarea
                type="text"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleInput("title")} />
            </div>
            <textarea
              type="text"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInput("description")} />
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