import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}
function Singer() {
    useEffect(() => {
    })
    return (
        <div>歌手</div>
    )
}
export default connect(mapStateToProps)(withRouter(Singer))