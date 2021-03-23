import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './header/header';
import Modal from './modal/modal';
import ListIndexContainer from './list/list_index_container';
import TaskIndexContainer from './task/task_index_container';
import TaskShowContainer from './task/task_show_container';


const App = () => (
  <div>
    <Modal/>
    <Header/>
    <Switch>
      <Route exact path="/" component={ListIndexContainer} />
      <Route path="/tasks" component={TaskIndexContainer} />
      <Route exact path="/tasks/:tasksId" component={TaskShowContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;