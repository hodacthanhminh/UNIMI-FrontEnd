import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import UserProfile from "./components/user/UserProfile";
import UserPayment from "./components/user/UserPayment";
import UserAddress from "./components/user/UserAddress";
import Layout from "./HOC/Layout";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Register from "./containers/Register";
import StoreView from "./StoreView";
import "./style/app.scss";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/user/profile" component={UserProfile} />
              <Route path="/user/address" component={UserAddress} />
              <Route path="/user/payment" component={UserPayment} />
              <Route path="/store" component={NotFound} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/store/storeview" component={StoreView} exact />
              <Route path="*" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
