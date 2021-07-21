import React from "react";
import { Link } from "react-router-dom";
import Alerts from "../components/Alerts/Alerts";
interface Props {
}
const Dashboard: React.FC<Props> = (props) => {
    return (
        <div>This is Dashboard page
            <Link to="/recordings"><span className=" text-red-500"> go to recordings</span></Link>
            <Alerts svgColor="text-blue-400">It is a dashboard alert</Alerts>
        </div>
    );
};
Dashboard.defaultProps = {
}
export default Dashboard;