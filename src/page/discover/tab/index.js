import React from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom'
import './index.less'
import { recommendList } from '../../../utils'
import { connect } from 'react-redux'

const mapStateToProps = () => {
    return {
    }
}

function discoverTab() {
    return (
        <div className="recommend">
            {
                recommendList.map((item, index) => {
                    return <Link to={item.path} key={index} className="item">{item.name}</Link>
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(withRouter(discoverTab))