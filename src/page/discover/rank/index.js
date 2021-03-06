import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}
function Rank() {
    useEffect(() => {
    })
    return (
        <div>排行榜</div>
    )
}
export default connect(mapStateToProps)(withRouter(Rank))