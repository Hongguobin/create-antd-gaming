import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './index.less'
import { recommendList } from '../../../utils'

function Recommend() {
    const [recommendIndex, handleRecommend] = useState(0)
    return (
        <div className="recommend">
            {
                recommendList.map((item, index) => {
                    return <Link to={item.path} key={index} className={`item ${index === recommendIndex ? 'activeItem' : ''}`} onClick={() => handleRecommend(index)}>{item.name}</Link>
                })
            }
        </div>
    )
}

export default Recommend