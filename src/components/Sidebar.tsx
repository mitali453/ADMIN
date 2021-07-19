import { FC, memo } from "react";
interface Props {
}
const Sidebar: FC<Props> = (props) => {
    return (
        <div className=" h-screen w-60 bg-gray-600"> This is sidebar</div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);
