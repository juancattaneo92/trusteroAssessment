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
      <div className="list-container">
        <div className="list-box">
          {this.props.lists.map((list, idx) => {
            return <ListIndexItem list={list} key={idx} /> })}
        </div>
        <div>
          <button className="review-but" onClick={() => this.props.openModal("create-list")}>Add New List</button>
        </div>
      </div>

    )
  }

}

export default IndexList;