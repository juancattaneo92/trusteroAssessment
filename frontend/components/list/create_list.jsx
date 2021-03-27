import React from "react";

class CreateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let list = Object.assign({}, this.state)
    this.props.createList(list).then(this.props.closeModal)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  render() {

    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>
        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title"><i className="far fa-list-alt"></i> Create List </div>
          <div className="list-body">
            <textarea
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInput("name")} />
          </div>
          <div >
            <button className="submit-button" >Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CreateList;