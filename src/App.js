import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Dictionary from './components/Dictionary/Dictionary';
import NotificationState from './context/notification/NotificationState';

function App() {
  return (
    <div className="App">
      <Layout>
        <NotificationState>
          <Dictionary />
        </NotificationState>
      </Layout>
    </div>
  );
}

export default App;
