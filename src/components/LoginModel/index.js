import React from 'react'
import { Modal, Button } from 'antd'
import './index.less'
import { WechatOutlined, QqOutlined, WeiboOutlined, TwitterOutlined } from '@ant-design/icons'

const LoginModel = props => {
  const { visible, setVisible } = props
  const attribute = {
    title: "登录",
    centered: true,
    visible,
    width: '530px',
    maskClosable: false,
    footer: null,
    destroyOnClose:true,
    getContainer:false,
    onCancel: () => setVisible(false)
  }
  const loginType = [
    { icon: <WechatOutlined style={{color: '#41b035'}} />, label: '微信登录', type: 'wechat' },
    { icon: <QqOutlined style={{color: '#4e9ff9'}} />, label: 'QQ登录', type: 'qq' },
    { icon: <WeiboOutlined style={{color: '#ed3229'}} />, label: '微博登录', type: 'weibo' },
    { icon: <TwitterOutlined style={{color: '#55acee'}} />, label: '推特登录', type: 'twitter' }
  ]
  return (
    <div className="loginModel">
      <Modal
        {...attribute}
      >
        <div className="loginwrap">
            <div className="loginwrap__left">
                <img src={'https://s2.music.126.net/style/web2/img/platform.png?1b954ad6c1c5cc5c1d0aef0393657152'} alt=""></img>
                <Button type="primary">手机号登录</Button>
                <Button>注册</Button>
            </div>
            <ul className="loginwrap__right">
                {loginType.map(item=>{
                    return (
                        <li key={item.type}>
                            <div className="iconBox">{item.icon}</div>
                            <span className="label">{item.label}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
      </Modal>
    </div>
  )
}

export default LoginModel
