import React, { FC, lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import AppContext from './App.context';
import { User } from './modules/User';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';



const App: FC = (props) => {
  const [user , setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u))

  }, []);

  if (!user && token) {
    return <div>loading...</div>
  }
  return (
    <AppContext.Provider value={{user,setUser}}>
      <Suspense fallback={<div className="text-red-500 text-center text-5xl">Loading....<FaSpinner className=" animate-spin"></FaSpinner></div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : (
                <AuthLazy />
              )}

            </Route>
            <Route path={["/dashboard", "/recordings"]} exact>
              {user ? <AppContainerLazy/> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContext.Provider>
  );
}

export default App;
