import React from "react";
import { Link } from "react-router-dom";

interface Props{}
const Recordings: React.FC<Props> = (props) => {
    return (
        <div>This is Recordings page
            <Link to="/dashboard"><span className=" text-blue-500"> go to dashboard</span> </Link>
            <Link to="/signup"><span className=" text-blue-500"> Click  here</span> </Link>
        </div>
    );
};
Recordings.defaultProps = {
}
export default Recordings;