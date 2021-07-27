import { Route, Redirect } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

function PrivateRoute({ component: Component, ...rest }) {
  const checkToken = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkToken() ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
}

export default PrivateRoute;
