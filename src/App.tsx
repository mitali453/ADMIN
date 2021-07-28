import { Divider } from '@material-ui/core';
import React, { FC, lazy, Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';

interface Props {
}

const App: FC<Props> = () => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <div>
      <Suspense fallback={<div className="text-red-500 text-center text-5xl">Loading....<FaSpinner className=" animate-spin"></FaSpinner></div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {token ? <Redirect to="/dashboard" /> : (
                <AuthLazy />
              )}

            </Route>
            <Route path={["/dashboard", "/recordings"]} exact>
              <AppContainerLazy />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
