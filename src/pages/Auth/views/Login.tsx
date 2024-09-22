import React from 'react';
import type { FormInstance, FormProps } from 'antd';
import { Button, Flex, Form, Input } from 'antd';
import '../styles/Login.scss';
import { LoginParams } from 'types/auth';
import { useNavigate } from 'react-router';

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish: FormProps<LoginParams>['onFinish'] = (values) => {
    console.log('Login:', values);
    navigate('/');
  };
  return (
    <Flex className="Login w-screen h-screen justify-center items-center relative">
      <Form
        form={form}
        name="validateOnly"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<LoginParams>
          name="username"
          label="Tên đăng nhập"
          rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<LoginParams>
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <SubmitButton form={form}>Đăng nhập</SubmitButton>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Login;
