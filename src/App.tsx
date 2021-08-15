import { FC, Suspense } from 'react';
import { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { authActions } from './actions/auth.actions';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
//import { me } from './middleware/auth.middleware';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { meSelector } from './selectors/auth.selectors';
import { useAppSelector} from './store';

const App: FC = (props) => {
  const user = useAppSelector(meSelector);

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u)=>authActions.fetch(u));
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  console.log("App is rendering");

  if (!user && token) {
    return <div>loading...</div>
  }

  return (
    <div className=" flex-wrap flex-shrink-0">
     
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
            <Route path={["/dashboard", "/recordings","/groups", "/editProfile","/groups/:groupId"]} exact>
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
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
