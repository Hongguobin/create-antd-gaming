import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}
function RadioStation() {
    useEffect(() => {
    })
    return (
        <div>主播电台</div>
    )
}
export default connect(mapStateToProps)(withRouter(RadioStation))