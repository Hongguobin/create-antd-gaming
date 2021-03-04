import React, { useEffect } from 'react';
import { changeTabInfo } from '../../redux/actions'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        tabInfo: state.tabInfo
    }
}

function Mall(props) {
    const { dispatch, match } = props
    useEffect(() => {
        dispatch(changeTabInfo(match.path))
    })
    return (
        <div>商城</div>
    )
}
export default connect(mapStateToProps)(Mall)