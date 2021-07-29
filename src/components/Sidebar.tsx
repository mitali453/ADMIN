import userEvent from "@testing-library/user-event";
import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import { User } from "../modules/User";


import Button from "./Button/Button";
interface Props {
    user:User;
}
const Sidebar: FC<Props> = ({user}) => {
    const history=useHistory();
    return (
        <div>
        <div className=" h-screen w-60 bg-gray-600"> This is sidebar
        <Button onClick={
            ()=>{
                logout();
                window.location.href="/login";
            }


        }>LOGOUT</Button>
        <div>{user.first_name}</div>
        
        </div>
      
        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
