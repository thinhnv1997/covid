import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/Login/Login";
import AuthLogin from "./router/AuthLogin";
import PrivateRoute from "./router/PrivateRoute";
import News from "./pages/News/News";
import TableComponent from "./pages/Table/Table";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import NewDetail from "./pages/NewDetail/NewDetail";

import "./scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthLogin exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/table" component={TableComponent} />
        <PrivateRoute
          exact
          path="/detail-country/:params"
          component={CountryDetail}
        />
        <Route exact path="/news" component={News} />
        <Route exact path="/news-detail/:newId" component={NewDetail} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
