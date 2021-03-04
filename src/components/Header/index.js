import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.less'
import RecommendTab from '../../page/discover/tab'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        tabInfo: state.tabInfo
    }
}

const Header = (props) => {
    const { tabBox, tabInfo } = props
    const [tabIndexPath, handleTab] = useState(tabInfo)
    useEffect(() => {
        console.log(tabIndexPath)
    }, [tabIndexPath])
    return (
        <div className="header">
            <div className="header__content">
                <div className="wrap">
                    <div className="wrap__left">
                        <div className="img"></div>
                        <div className="tabBox">
                            {
                                tabBox.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.path}>
                                            <div className={`item ${tabInfo === item.path ? 'activeItem' : ''}`} onClick={() => handleTab(item.path)}>{item.name}</div>
                                        </Link>
                                    )
                                })
                            }
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
                        <span className="login">登录</span>
                    </div>
                </div>
            </div>
            <div className="header__line">
                {tabIndexPath === '/' ? <RecommendTab></RecommendTab> : null}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header)
