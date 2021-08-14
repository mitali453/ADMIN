import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import GroupsPage from "./Groups.page";
import RecordingsPage from "./Recordings.page";

interface Props{}

const AppContainer: FC<Props> = () => {
    console.log("AppContainer Rerendering");
    return (

        <div className=" ">
         
            <NavBar></NavBar>
            <div className=" flex flex-row">
            <Sidebar></Sidebar>
            <Switch>

                <Route path="/dashboard">
                    <DashboardPage></DashboardPage>
                </Route>
                <Route path="/recordings">
                    <RecordingsPage></RecordingsPage>
                </Route>
                <Route path="/groups">
                    <GroupsPage></GroupsPage>
                </Route>

            </Switch>
            </div>

        </div>
    );
};
AppContainer.defaultProps = {
}
export default memo(AppContainer);