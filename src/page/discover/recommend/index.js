import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import p1 from '../../../assets/images/p1.jpg'
import p2 from '../../../assets/images/p2.jpg'
import p3 from '../../../assets/images/p3.jpg'

const mapStateToProps = () => {
  return {}
}

function Recommend() {
  useEffect(() => {
    instanceSwiper()
  }, [])
  const instanceSwiper = () => {
    new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
      })
  }

  return (
    <div className="reacommend">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={p1} alt=""></img>
                </div>
                <div className="swiper-slide">
                    <img src={p2} alt=""></img>
                </div>
                <div className="swiper-slide">
                    <img src={p3} alt=""></img>
                </div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
        </div>
    </div>
  )
}
export default connect(mapStateToProps)(withRouter(Recommend))
