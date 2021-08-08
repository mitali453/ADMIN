import { FC, memo } from "react";
import { logout } from "../api/auth";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";
import Button from "./Button/Button";

const Sidebar: FC = () => {

    const user = useAppSelector(meSelector);
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
                <div className=" text-yellow-400">{user!.first_name}</div>

            </div>

        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
