import React from 'react';
import { connect } from 'react-redux'
import { changeUserInfo } from '../../redux/actions'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    }
}

function Friend(props) {
    const { userInfo, dispatch } = props
    return (
        <div>
            <Button onClick={() => dispatch(changeUserInfo('token'))}>朋友</Button>
            <div>{userInfo}</div>
        </div>

    )
}
export default connect(mapStateToProps)(withRouter(Friend))