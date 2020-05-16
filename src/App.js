import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Dictionary from './components/Dictionary/Dictionary';

function App() {
  return (
    <div className="App">
      <Layout>
        <Dictionary />
      </Layout>
    </div>
  );
}

export default App;
