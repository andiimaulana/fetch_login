
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page_login from './page_login/Page_login';
import Page_register from './page_register/Page_register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Page_register">
            <Page_register />
          </Route>

          <Route path="/Page_login">
            <Page_login />
          </Route>

          <Route path="/">
            <Page_login />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
