import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}

function Recommend() {
    useEffect(() => {
    })
    return (
        <div>推荐</div>
    )
}
export default connect(mapStateToProps)(withRouter(Recommend))
