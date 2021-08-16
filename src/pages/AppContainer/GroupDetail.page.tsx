import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.actions";
import { selectedGroupSelector } from "../../selectors/groups.selectors";
import {useAppSelector} from "../../store"
interface Props {
}
const GroupDetail: FC<Props> = (props) => {
    const  groupId  = +useParams<{groupId:string}>().groupId;
    const group= useAppSelector(selectedGroupSelector);
    

    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(fetchOneGroup(groupId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[groupId]);

    if(!group){
        return <div>Loading group...</div>
    }
    return (
        <div>This is a detail page of {groupId } {group.name}
        <p>{group.description}</p>
        </div>
    );
};
GroupDetail.defaultProps = {
}
export default memo(GroupDetail);