import { FC, Suspense } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { meFetchAction } from './actions/auth.actions';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import Button from './components/Button/Button';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { useAppSelector} from './store';

const App: FC = (props) => {
  const user = useAppSelector((state) => state.auth.id && state.users.byId[state.auth.id]);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => dispatch(meFetchAction(u)));

  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  console.log("App is rendering");

  if (!user && token) {
    return <div>loading...</div>
  }

  return (
    <>
      <Button onClick={() => setCounter(counter + 1)}>Increment counter</Button>
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
    </>
  );
}

export default App;
