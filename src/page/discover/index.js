import React, { useEffect } from 'react';
import './index.less'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Recommend from './recommend'
import Rank from './rank'
import Song from './song'
import RadioStation from './radioStation'
import Singer from './singer'
import Disc from './disc'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
    }
}

function Discover() {
    useEffect(() => {
    })
    return (
        <div className="discover">
            <Switch>
                <Route path="/discover" exact render={()=> <Redirect to="/discover/recommend"></Redirect>}></Route>
                <Route path='/discover/rank' component={Rank}></Route>
                <Route path='/discover/song' component={Song}></Route>
                <Route path='/discover/radioStation' component={RadioStation}></Route>
                <Route path='/discover/singer' component={Singer}></Route>
                <Route path='/discover/disc' component={Disc}></Route>
                <Route path='/discover/recommend' component={Recommend}></Route>
            </Switch>
        </div>
    )
}
export default connect(mapStateToProps)(withRouter(Discover))