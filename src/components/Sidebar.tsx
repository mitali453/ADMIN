import { FC, memo } from "react";
import { logout } from "../api/auth";
import { useAppSelector } from "../store";
import Button from "./Button/Button";

const Sidebar: FC = () => {

    const userFirstName = useAppSelector((state) => state.me?.first_name);
    console.log(" Sidebar is rendering");
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
                <div className=" text-yellow-400">{userFirstName}</div>

            </div>

        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
