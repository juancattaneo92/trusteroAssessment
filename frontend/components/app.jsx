import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './header/header';
import Modal from './modal/modal';
import IndexListContainer from './list/index_list_container';
import ShowListContainer from './list/show_list_container';
// import IndexTaskContainer from './task/index_task_container';


const App = () => (
  <div>
    <Modal/>
    <Header/>
    <Switch>
      <Route exact path="/" component={IndexListContainer} />
      <Route exact path="/lists/:listId" component={ShowListContainer} />
      {/* <Route path="/tasks" component={IndexTaskContainer} />
      <Route exact path="/tasks/:tasksId" component={ShowTaskContainer} />  */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;