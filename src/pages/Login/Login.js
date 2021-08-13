import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert, Typography, Row, Col } from "antd";
import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const history = useHistory();
  const [isError, setIsError] = useState(false);

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === "admin" && password === "admin") {
      localStorage.setItem("user", username);
      history.push("/");
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <>
      <div style={{ height: "50px" }}>
        {isError && (
          <Alert
            style={{ zIndex: "99" }}
            message="Wrong username or password"
            type="error"
            showIcon
            closable
            onClose={() => setIsError(false)}
          />
        )}
      </div>

      <Row style={{ paddingTop: "20px" }}>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 8, offset: 8 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{
              padding: " 20px",
              border: "1px solid gray",
              backgroundColor: "rgba(240, 240, 240, 0.65)",
            }}
          >
            <Form.Item>
              <Typography.Title level={2} style={{ textAlign: "center" }}>
                {t("login.title")}
              </Typography.Title>
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={t("login.username")}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={t("login.password")}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {t("login.button")}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
