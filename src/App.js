import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Dictionary from './components/Dictionary/Dictionary';
import DictionaryState from './context/dictionary/DictionaryState';

function App() {
  return (
    <div className="App">
      <Layout>
        <DictionaryState>
          <Dictionary />
        </DictionaryState>
      </Layout>
    </div>
  );
}

export default App;
