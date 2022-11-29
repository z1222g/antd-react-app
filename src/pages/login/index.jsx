/*
* 登录页面 2022年4月3日 13:56:48
* author 周刚
*/
import React,{useState} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Modal, message } from 'antd';
import "./index.less"
const  Login=()=> {
  const [loading,setLoading]=useState(false)
  const [passwordModal,setPasswordModal]=useState(false)
  return (
    <div className='gv-login-wrap'>
        <div className='gv-login-inner'>
          <div className='gv-login-title'>
            <h1>深圳根据地</h1>
          </div>
          <div className='gv-login-form'>
          <Form >
        <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
          <Input
            size="large"
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入账号"
            autoComplete='off'
            type='tel'
            maxLength={11}
            allowClear
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password
            size="large"
            // prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入密码"
            autoComplete='new-password'
            maxLength={18}
            // ref={psw => this.psw = psw}
          />
        </Form.Item>
        <Form.Item>
          <Button disabled={loading} type="primary" htmlType="submit" className="login-form-button">
            {!loading ? '登录' : '正在登录...'}
          </Button>
        </Form.Item>
        <p className="login-form-footer">
          <a className="login-form-forgot"  >忘记密码</a>
        </p>
        <Modal
          title="提示"
          visible={passwordModal}
          onOk={() => this.forgetPassword(false)}
          onCancel={() => this.forgetPassword(false)}
          width={310}
          footer={
            <Button type="primary" > 关闭 </Button>
          }
        >
          <p style={{ lineHeight: "110px", textAlign: "center" }}>请联系管理员重置密码。</p>
        </Modal>
      </Form>
          </div>
        </div>
      </div>
    
  )
}
export default Login
