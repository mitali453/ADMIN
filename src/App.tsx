import React, { FC, lazy, Suspense, useMemo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import AppContext from './App.context';
import Button from './components/Button/Button';
import { User } from './modules/User';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';



const App: FC = (props) => {
  const [user, setUser] = useState<User>();
  const [counter, setCounter] = useState(0);

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u))

  }, []);

  console.log("App is rendering");

  const data = useMemo(() => {
    console.log("Memo is running");
    return { user, setUser };
  }, [user, setUser]);

  const helloFunc = useCallback(()=>console.log("hii"),[]);

  if (!user && token) {
    return <div>loading...</div>
  }

  return (
    <AppContext.Provider value={data}>
      <Button onClick={() => setCounter(counter + 1)}>Increment counter</Button>
      <Button onClick={helloFunc }>Hello World</Button>
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
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
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
