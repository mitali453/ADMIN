import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path={["/login","/signup"]} exact>
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard","/recordings"]} exact>
          <AppContainerPage></AppContainerPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
