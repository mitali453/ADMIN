import { FC, memo } from "react";
interface Props {
}
const EditProfile: FC<Props> = (props) => {
    return (
        <>
            <h1>This is edit profile page</h1>
        </>
    );
};
EditProfile.defaultProps = {
}
export default memo(EditProfile);
export { };