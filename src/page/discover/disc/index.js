import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = () => {
    return {
    }
}
function Disc() {
    useEffect(() => {
    })
    return (
        <div>新碟上架</div>
    )
}
export default connect(mapStateToProps)(withRouter(Disc))