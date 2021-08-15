import { FC, memo } from "react";
import { useParams } from "react-router-dom";
interface Props {
}
const GroupDetail: FC<Props> = (props) => {
    const { groupId } = useParams < {groupId:any} > ();
    return (
        <div>This is a detail page of {groupId}</div>
    );
};
GroupDetail.defaultProps = {
}
export default memo(GroupDetail);