import './App.less';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Discover from './page/discover'
import My from './page/my'
import Friend from './page/friend'
import Mall from './page/mall'
import Nmusician from './page/nmusician'
import Error from './page/error'
import Header from './components/Header'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}
const tabBox = [
  {
    name: '发现音乐',
    path: '/discover',
    component: Discover,
  },
  {
    name: '我的音乐',
    path: '/my',
    component: My,
  },
  {
    name: '朋友',
    path: '/friend',
    component: Friend,
  },
  {
    name: '商城',
    path: '/mall',
    component: Mall,
  },
  {
    name: '音乐人',
    path: '/nmusician',
    component: Nmusician,
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header tabBox={tabBox}></Header>
        <div className="App__panel">
          <Switch>
            <Route path="/" exact render={()=> <Redirect to="/discover"></Redirect>}></Route>
            <Route path="/discover" component={Discover}></Route>
            <Route path='/my' component={My}></Route>
            <Route path='/friend' component={Friend}></Route>
            <Route path='/mall' component={Mall}></Route>
            <Route path='/nmusician' component={Nmusician}></Route>
            <Route path="*" exact component={Error}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App)
