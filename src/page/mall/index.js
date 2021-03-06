import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
    }
}

function Mall() {
    useEffect(() => {
    })
    return (
        <div>商城</div>
    )
}
export default connect(mapStateToProps)(withRouter(Mall))