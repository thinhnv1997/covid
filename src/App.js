import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/Login/Login";
import AuthLogin from "./router/AuthLogin";
import PrivateRoute from "./router/PrivateRoute";
import Detail from "./pages/Detail/Detail";
import News from "./pages/News/News";

import "./scss/main.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/news" component={News} />
          <AuthLogin exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/detail" component={Detail} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
