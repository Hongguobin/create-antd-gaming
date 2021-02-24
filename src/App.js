import logo from './logo.svg';
import { Button } from 'antd'
import './App.less';
import React, { useReducer } from 'react'
import dayjs from 'dayjs'

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        const time = dayjs(1614149318642).format('YYYY-MM')
        console.log(time)
        return state + 1
      default:
        return
    }
  }, 0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary" onClick={() => dispatch('add')}>click me</Button>
        <p className="text">
          {count} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
