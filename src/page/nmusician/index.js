import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
    }
}

function Nmusician() {
    useEffect(() => {
    })
    return (
        <div>音乐人</div>
    )
}
export default connect(mapStateToProps)(withRouter(Nmusician))
