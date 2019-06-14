import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
  <div>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </Router>
  </div>
);
export default Root;
