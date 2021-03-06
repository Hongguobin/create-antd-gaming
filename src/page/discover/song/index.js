import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}
function Song() {
    useEffect(() => {
    })
    return (
        <div>歌单</div>
    )
}
export default connect(mapStateToProps)(withRouter(Song))