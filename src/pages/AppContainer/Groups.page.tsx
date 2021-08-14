import {FC , memo}  from  "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupQueryAction } from "../../actions/groups.actions";
import GroupData from "../../components/GroupList/GroupData";
import { groupsLoadingSelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {
    
}

const Groups: FC<Props> = () => {

    const query = useAppSelector(groupQuerySelector);
    const Loading = useAppSelector(groupsLoadingSelector)
    const groups = useAppSelector(groupsSelector);
    const dispatch=useDispatch();
   

    return(
        <div className=" flex flex-col justify-center bg-scroll ">
          <div className=" p-10 flex ml-10" >
              <h1 className="text-xl"></h1>
          <input
                    className="border border-black p-2 w-2/3" type="text"
                    value={query}
                    placeholder="Search Groups here"
                    onChange={(e) => {
                        dispatch(groupQueryAction(e.target.value))
                    }} /></div>
            {Loading &&  <FaSpinner className="animate-spin m-3"></FaSpinner> }
            <div>
            {groups.map((group, index) => {
                return (<div
                    key={group.id}>
                    <GroupData className={`${(index % 2 === 0) ? "bg-white" : "bg-gray-100"}`} name={group.name} desc={group.description} imgSrc={group.group_image_url}></GroupData>
                </div>);
            })}
                {!Loading && groups.length === 0 &&  " NO DATA FOUND "}
            </div>
        </div>
        
    );
};

Groups.defaultProps = {}

export default memo(Groups);