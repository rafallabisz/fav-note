import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import Notes from 'views/Notes';

const Root = () => (
  <div>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/articles" component={Articles} />
          <Route path="/twitters" component={Twitters} />
        </Switch>
      </MainTemplate>
    </Router>
  </div>
);
export default Root;
