import React from "react";
import { Link } from "react-router-dom";

interface Props {
}
const Signup: React.FC<Props> = (props) => {
    return (

        <div>This is Signup page
            Already have an account. <Link to="/login"><span className=" text-red-500"> Click here</span></Link>
        </div>


    );
};
Signup.defaultProps = {
}
export default Signup;
