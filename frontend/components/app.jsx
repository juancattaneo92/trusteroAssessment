import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './header/header';
import Modal from './modal/modal';
import IndexListContainer from './list/index_list_container';
import ShowListContainer from './list/show_list_container';
import ShowTaskContainer from './task/show_task_container';
// import IndexCommentContainer from './comment/index_comment_container';


const App = () => (
  <div>
    <Modal/>
    <Header/>
    <Switch>
      <Route exact path="/" component={IndexListContainer} />
      <Route exact path="/lists/:listId" component={ShowListContainer} />
      <Route exact path="/tasks/:taskId" component={ShowTaskContainer} />  
      {/* <Route path="/comments" component={IndexCommentContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;