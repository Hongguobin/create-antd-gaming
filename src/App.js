import './App.less';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Discover from './page/discover'
import My from './page/my'
import Friend from './page/friend'
import Mall from './page/mall'
import Nmusician from './page/nmusician'
import Error from './page/error'
import Header from './components/Header'
import { connect } from 'react-redux'
import { changeTabInfo } from './redux/actions'


const mapStateToProps = (state) => {
  return {
      tabInfo: state.tabInfo
  }
}
const tabBox = [
  {
    name: '发现音乐',
    path: '/',
    component: Discover,
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

function App(props) {
  console.log(props)
  return (
    <Router>
      <div className="App">
        <Header tabBox={tabBox}></Header>
        <div className="App__panel">
          <Switch>
            <Route path='/my' component={My}></Route>
            <Route path='/friend' component={Friend}></Route>
            <Route path='/mall' component={Mall}></Route>
            <Route path='/nmusician' component={Nmusician}></Route>
            <Route component={Discover}></Route>
            <Route path="*" exact component={Error}></Route>
            <Route path="/" component={Discover}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App)
