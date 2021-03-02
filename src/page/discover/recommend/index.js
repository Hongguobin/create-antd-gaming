import React, { useEffect } from 'react';

function Recommend() {
    useEffect(() => {
        console.log('欢迎来到推荐页面')
        return () => {
            console.log('走出推荐页面')
        }
    }, [])
    return (
        <div>推荐</div>
    )
}
export default Recommend