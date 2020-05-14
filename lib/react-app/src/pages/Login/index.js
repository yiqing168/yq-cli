import React from 'react';
import { Form, Input, Icon, Button } from 'antd'
import style from "./index.module.less"
import { fakeAccountLogin } from "@/services/login"
import { setUserToken } from "@/utils/authority"

/**
 * 登录
 */
function Login(props) {
  const { getFieldDecorator } = props.form;
  // 登录方法
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        fakeAccountLogin().then(_d => {
          setUserToken(_d.token);
          props.history.push("/");
        })
      }
    });
  };

  return (
    <div className={style["login-layout"]}>
      <div className={style["login-main"]}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Form.create()(Login);