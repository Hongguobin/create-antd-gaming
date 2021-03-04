import React, { useEffect } from 'react';
import { changeTabInfo } from '../../redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        tabInfo: state.tabInfo
    }
}

function Nmusician(props) {
    const { dispatch, match } = props
    useEffect(() => {
        dispatch(changeTabInfo(match.path))
    })
    return (
        <div>音乐人</div>
    )
}
export default connect(mapStateToProps)(Nmusician)
