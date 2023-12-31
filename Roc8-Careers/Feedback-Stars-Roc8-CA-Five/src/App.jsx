import React from 'react';
import './App.css';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className='App'>
      <Feedback stars={5} />
    </div>
  );
}

export default App;