import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import AppContext from "../App.context";
import Button from "./Button/Button";

const Sidebar: FC = () => {
    const history = useHistory();
    const { user } = useContext(AppContext);
    ;
    return (
        <div>
            <div className=" h-screen w-60 bg-gray-600"> This is sidebar
                <Button onClick={
                    () => {
                        logout();
                        window.location.href = "/login";
                    }
                }>LOGOUT</Button>
                <div className=" text-yehhllow-400">{user!.first_name}</div>

            </div>

        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
