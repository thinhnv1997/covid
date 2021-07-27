// import { useHistory } from "react-router-dom";
// import { Form, Input, Button, Alert, Typography } from "antd";
// import { useState } from "react";
// import { userLogin } from "../../Api/userMethod";

function Login() {
  // const history = useHistory();
  // const [isError, setIsError] = useState(false);

  // const onFinish = (values) => {
  //   userLogin(values)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", JSON.stringify(res.token));
  //       localStorage.setItem("user", JSON.stringify(res));

  //       history.push("/");
  //     })
  //     .catch(() => {
  //       setIsError(true);
  //       setTimeout(() => {
  //         setIsError(false);
  //       }, 5000);
  //     });
  // };

  return (
    <div>
      This is Login
    </div>
  //   <>
  //     {isError && (
  //       <Alert
  //         message="Wrong username or email"
  //         type="error"
  //         showIcon
  //         closable
  //         onClose={() => setIsError(false)}
  //       />
  //     )}
  //     <div
  //       className="login-container"
  //       style={{ marginTop: "10%", marginLeft: " 10px" }}
  //     >
  //       <Form
  //         name="basic"
  //         labelCol={{ span: 0 }}
  //         wrapperCol={{ span: 8 }}
  //         initialValues={{ remember: true }}
  //         onFinish={onFinish}
  //       >
  //         <Typography.Title level={3}>Log in</Typography.Title>
  //         <Form.Item
  //           label="Email"
  //           name="email"
  //           rules={[{ required: true, message: "Please input your username!" }]}
  //         >
  //           <Input />
  //         </Form.Item>

  //         <Form.Item
  //           label="Password"
  //           name="password"
  //           rules={[{ required: true, message: "Please input your password!" }]}
  //         >
  //           <Input.Password />
  //         </Form.Item>

  //         <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
  //           <Button type="primary" htmlType="submit">
  //             Log in
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //     </div>
  //   </>
  );
}

export default Login;
