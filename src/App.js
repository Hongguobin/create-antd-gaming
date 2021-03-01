import './App.less';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Discover from './page/discover'
import My from './page/my'
import Friend from './page/friend'
import Mall from './page/mall'
import Nmusician from './page/nmusician'
import Error from './page/error'
import Header from './components/Header'

const tabBox = [
  {
    name: '发现音乐',
    path: '/',
    component: Discover,
    exact: true
  },
  {
    name: '我的音乐',
    path: '/my',
    component: My,
    exact: false
  },
  {
    name: '朋友',
    path: '/friend',
    component: Friend,
    exact: false
  },
  {
    name: '商城',
    path: '/mall',
    component: Mall,
    exact: false
  },
  {
    name: '音乐人',
    path: '/nmusician',
    component: Nmusician,
    exact: false
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header tabBox={tabBox}></Header>
        <div className="App__panel">
          <Switch>
            {
              tabBox.map((item, index) => {
                return (
                  <Route
                    key={index}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  >
                  </Route>
                )
              })
            }
            <Route path="*" exact component={Error}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
