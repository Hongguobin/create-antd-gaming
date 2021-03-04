import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { changeUserInfo, changeTabInfo } from '../../redux/actions'
import { Button } from 'antd'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        tabInfo: state.tabInfo
    }
}

function Friend(props) {
    const { userInfo, dispatch, match } = props
    useEffect(() => {
        dispatch(changeTabInfo(match.path))
    })
    return (
        <div>
            <Button onClick={() => dispatch(changeUserInfo('token'))}>朋友</Button>
            <div>{userInfo}</div>
        </div>

    )
}
export default connect(mapStateToProps)(Friend)