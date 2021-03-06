import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
    }
}

function My() {
    useEffect(() => {
    })
    return (
        <div>我的</div>
    )
}
export default connect(mapStateToProps)(withRouter(My))
