import { Divider } from '@material-ui/core';
import React, { FC, lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isPropertySignature } from 'typescript';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import { User } from './modules/User';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';

interface Props {
  
}

const App: FC<Props> = (props) => {
  const [user,setUser]=useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);
   
   useEffect(()=>{
     if(!token){
       return;
     }
     me().then((u)=>setUser(u))

   },[]);
   
   if(!user && token){
     return  <div>loading...</div>
   }
  return (

    <div>
      <Suspense fallback={<div className="text-red-500 text-center text-5xl">Loading....<FaSpinner className=" animate-spin"></FaSpinner></div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : (
                <AuthLazy  onLogin={setUser}/>
              )}

            </Route>
            <Route path={["/dashboard", "/recordings"]} exact>
              {user ? <AppContainerLazy user={user!}/> : <Redirect to="/login" />}
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
