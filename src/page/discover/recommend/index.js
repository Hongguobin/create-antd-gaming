import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'
// import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import p1 from '../../../assets/images/p1.jpg'
import p2 from '../../../assets/images/p2.jpg'
import p3 from '../../../assets/images/p3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

const mapStateToProps = () => {
  return {}
}

function Recommend() {
  useEffect(() => {
    instanceSwiper()
  }, [])
  const instanceSwiper = () => {
    // new Swiper('.swiper-container', {
    //   loop: true,
    //   autoplay: {
    //     delay: 3000
    //   },
    //   observer: true,
    //   observeParents: true,
    // })
  }

  return (
    <div className="reacommend">
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        initialSlide={1} // 初始化显示哪一个
        loop={true} // 是否循环
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        threshold={40}
      >
        <SwiperSlide>
          <img src={p1} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt=""></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt=""></img>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default connect(mapStateToProps)(withRouter(Recommend))
