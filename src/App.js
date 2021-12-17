import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/LoginPage/Login";

function App() {
  let [islogin, setLogin] = useState(false);
  console.log(setLogin);
  return (
    <>
      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} islogin={true} setLogin={setLogin} />
          )}
        />

        <Route
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} login={islogin} setLogin={setLogin} />
          )}
        />
        <Route
          render={(props) => (
            <Login {...props} islogin={true} setLogin={setLogin} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
