import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import NotificationState from './context/notification/NotificationState';
import SideNavigationState from './context/sideNavigation/SideNavigationState';
import Home from './components/Home/Home';
import Dictionary from './components/Dictionary/Dictionary';
import FAQs from './components/FAQs/FAQs';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigationState>
          <Layout>
            <NotificationState>
              <Switch>
                <Route exact path="/dictionary" render={() => <Dictionary />} />
                <Route exact path="/faqs" render={() => <FAQs />} />
                <Route exact path="/" render={() => <Home />} />
              </Switch>
            </NotificationState>
          </Layout>
        </SideNavigationState>
      </div>
    </Router>
  );
}

export default App;
