import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

const mapStateToProps = (state) => {
    return {
    }
}

function My() {
    useEffect(() => {
    })
    return (
        <Button type="primary">我的</Button>
    )
}
export default connect(mapStateToProps)(withRouter(My))
