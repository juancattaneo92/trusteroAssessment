import { connect } from "react-redux";
import { createList } from "../../actions/list_actions";
import CreateList from "./create_list";
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return ({

  })
}

const mDTP = dispatch => {
  return ({
    createList: (list) => dispatch(createList(list)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default connect(mSTP, mDTP)(CreateList)