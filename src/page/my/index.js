import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { changeTabInfo } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        tabInfo: state.tabInfo
    }
}

function My(props) {
    const { dispatch, match } = props
    useEffect(() => {
        dispatch(changeTabInfo(match.path))
    })
    return (
        <div>我的</div>
    )
}
export default connect(mapStateToProps)(My)
