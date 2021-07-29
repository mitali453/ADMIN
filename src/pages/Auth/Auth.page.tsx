import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../modules/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
interface Props {
    onLogin:(user:User)=>void;
}
const Auth: FC<Props> = (props) => {
    return (
        <div className=" flex flex-col lg:flex-row">
            <Switch>
                <Route path="/login">
                    <LoginPage onLogin={(u)=>{
                        console.log("User object in Auth Page",u);
                        props.onLogin(u);
                    }}></LoginPage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
            </Switch>
            <AuthHero></AuthHero>
        </div>

    );
};
Auth.defaultProps = {
}
export default memo(Auth);