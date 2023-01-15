import React, { useState } from 'react'
import { Card, Col, Row, Space, Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { postData } from "util/api-service";
import { LOGIN } from "util/api";
import Cookies from "js-cookie";

const { Title } = Typography;

function Login() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        
        setLoading(true);
        let res = await postData(LOGIN, values, true);

        if (res) {
            let data = res?.data?.user;
      
            console.log("data", data);
      
            Cookies.set(
              "ProjectToken",
              `${data.token_type} ${data.access_token}`
            );
            window.location = "/";
            setLoading(false);
          } else {
            setLoading(false);
          }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Card
                title="Login"
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );

}

export default Login