import { useState } from "react";
import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import EditProfilePage from "./EditProfile.page";
import GroupDetailPage from "./GroupDetail.page";
import GroupsPage from "./Groups.page";
import RecordingsPage from "./Recordings.page";

interface Props{}

const AppContainer: FC<Props> = () => {
    console.log("AppContainer Rerendering");
    const [showSidebar , setShowSideBar]=useState(true);
    
    return (

        <div className=" ">
         
            <NavBar sidebarToggle={()=>setShowSideBar(!showSidebar)} ></NavBar>
            <div className=" flex flex-row">
            
            <Sidebar Open={showSidebar}></Sidebar>
            <Switch>

                <Route path="/dashboard">
                    <DashboardPage></DashboardPage>
                </Route>
                <Route path="/groups/:groupId">
                    <GroupDetailPage></GroupDetailPage>
                </Route>
                <Route path="/recordings">
                    <RecordingsPage></RecordingsPage>
                </Route>
                <Route path="/groups">
                    <GroupsPage></GroupsPage>
                </Route>
                <Route path="/editProfile">
                    <EditProfilePage></EditProfilePage>
                </Route>
            </Switch>
            </div>

        </div>
    );
};
AppContainer.defaultProps = {
}
export default memo(AppContainer);