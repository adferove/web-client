import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './common/Routes';
import SideNavigationState from './context/sideNavigation/SideNavigationState';
import NotificationState from './context/notification/NotificationState';

function App() {
  return (
    <Router>
      <div className="app-la">
        <NotificationState>
          <SideNavigationState>
            <Switch>
              {routes.map(({ path, component: C }, i) => (
                <Route
                  key={i}
                  exact
                  path={path}
                  render={(props) => <C {...props} />}
                />
              ))}
            </Switch>
          </SideNavigationState>
        </NotificationState>
      </div>
    </Router>
  );
}

export default App;
