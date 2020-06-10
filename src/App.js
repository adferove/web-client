import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import NotificationState from './context/notification/NotificationState';
import SideNavigationState from './context/sideNavigation/SideNavigationState';
import routes from './common/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigationState>
          <Layout>
            <NotificationState>
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
            </NotificationState>
          </Layout>
        </SideNavigationState>
      </div>
    </Router>
  );
}

export default App;
