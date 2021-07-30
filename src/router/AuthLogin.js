import { Route, Redirect } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

function AuthLogin({ component: Component, ...rest }) {
  const checkLogin = () => {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        return !checkLogin() ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}

export default AuthLogin;
