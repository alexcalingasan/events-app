import React, { Component, Fragment } from "react";
import "./App.css";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import TestComponent from "../../features/TestArea/TestComponent";
import ModalManager from "../../features/modal/ModalManager";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route path="/" component={HomePage} exact />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                <Route path="/events" component={EventDashboard} exact />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
                <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
