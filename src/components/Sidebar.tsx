import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";


import Button from "./Button/Button";
interface Props {
}
const Sidebar: FC<Props> = (props) => {
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
        
        
        
        </div>
      
        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
