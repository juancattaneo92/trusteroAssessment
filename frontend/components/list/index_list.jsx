import React from "react";
import ListIndexItem from './index_list_item';

class IndexList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchLists();
  }


  render() {

    return (
      <div className="main-container">
        <div className="sub-container">
            <div className="button-container">
              <button className="add-button" onClick={() => this.props.openModal("create-list")}>Add New List</button>
            </div>
            <div className="list-container">
              
              {this.props.lists.map((list, idx) => {
                return <ListIndexItem list={list} key={idx} /> })}
            </div>
        </div>
      </div>

    )
  }

}

export default IndexList;