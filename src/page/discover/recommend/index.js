import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'

const mapStateToProps = () => {
    return {
    }
}

function Recommend() {
    useEffect(() => {
        instanceSwiper()
    }, [])
    const instanceSwiper = () => {
        // this.swiperObj = new Swiper('.swiper-container', {
        //     slidesPerView: 1,
        //     loop: false,
        //     autoplay: {// 自动滑动
        //         delay: 3000, //3秒切换一次
        //         // stopOnLastSlide: false,
        //         disableOnInteraction: false,//
        //     },
        //     observer: true,//修改swiper自己或子元素时，自动初始化swiper    重要
        //     observeParents: true,//修改swiper的父元素时，自动初始化swiper  重要
        // })
    }

    return (
        <div className="reacommend">
            <div className="swiper-container"></div>
        </div>
    )
}
export default connect(mapStateToProps)(withRouter(Recommend))
