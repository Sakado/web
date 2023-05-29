import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Row, message, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useLocalObservable } from 'mobx-react-lite';

import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
interface User {
    username: string;
    password: string;
}



const LoginForm = observer(() => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const store = useLocalObservable(() => ({
        users: JSON.parse(localStorage.getItem('users') || '[]') as User[],
        addUser(user: User) {
            this.users.push(user);
            localStorage.setItem('users', JSON.stringify(this.users));
        },
    }));

    if (store.users.length === 0) {
        store.addUser({ username: 'gugucu', password: 'gugucu' });
        store.addUser({ username: 'vasea', password: 'vasea' });
    }

    const onFinish = (values: any) => {
        setLoading(true);
        setTimeout(() => {
            const { username, password } = values;
            const user = store.users.find((u) => u.username === username && u.password === password);
            if (user) {
                message.success('Login successful!');
                navigate('/app');
            } else {
                message.error('Invalid username or password.');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <Row justify="center" align="middle" className="login-form">
            <Card title="Login" className="login-card">
                <Form onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} className="login-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );
});

export default LoginForm;