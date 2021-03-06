import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { NavLink as Link, withRouter } from 'react-router-dom'
import './index.less'
import RecommendTab from '../../page/discover/tab'
import { connect } from 'react-redux'
import LoginModel from '../LoginModel'
import { gainGirl } from '../../api/index'

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const Header = props => {
  const { tabBox, location } = props
  const [visible, setVisible] = useState(false)
  const authRoutes = [
    '/discover',
    '/discover/recommend',
    '/discover/rank',
    '/discover/song',
    '/discover/radioStation',
    '/discover/singer',
    '/discover/disc'
  ]
  useEffect(() => {
    gainGirl().then(res => {})
  }, [])
  return (
    <div className="header">
      <div className="header__content">
        <div className="wrap">
          <div className="wrap__left">
            <div className="img"></div>
            <div className="tabBox">
              {tabBox.map((item, index) => {
                return (
                  <Link key={index} to={item.path} className="item">
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="wrap__right">
            <div className="input">
              <Input
                placeholder="音乐/视频/电台/用户"
                prefix={<SearchOutlined className="site-form-item-icon" />}
              />
            </div>
            <div className="creatorCenter">创作者中心</div>
            <span
              className="login"
              onClick={() => {
                setVisible(true)
              }}
            >
              登录
            </span>
          </div>
        </div>
      </div>
      <div className="header__line">
        {authRoutes.indexOf(location.pathname) !== -1 && (
          <RecommendTab></RecommendTab>
        )}
      </div>
      {
        <LoginModel
          visible={visible}
          setVisible={() => {
            setVisible(false)
          }}
        ></LoginModel>
      }
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(Header))
