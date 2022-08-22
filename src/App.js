import React from 'react';
import './App.css';
import Todo from './components/todo/todo';
import background from '../src/background.jpg'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='content'>
          <link href="https://www.freepik.com/vectors/fruit" />
          <Todo name="Buah"/>
        </div>
        <img className='image-footer' src={background}  alt="logo" />
      </div>
    );
  }
}

export default App;
