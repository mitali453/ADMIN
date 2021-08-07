import { useEffect } from "react";
import {FC , memo}  from  "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = () => {

    const query = useAppSelector((state) => state.groups.query);

    const groups = useAppSelector(state => {
        const groupIds = state.groups.queryMap[state.groups.query] || [];
        const groups = groupIds.map(id => state.groups.byId[id]);
        return groups;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        fetchGroups({ status : "all-groups" , query}).then(groups =>{
            dispatch({type: "groups/query_completed" , payload : {groups : groups , query}})
        }) 
    } , [query]);

    return(
        <div>
            <input 
            className="border border-black" type="text" 
            value={query} 
            placeholder="Search"
            onChange={(e)=>
            {
                dispatch({type: "groups/query" , payload: e.target.value })
            }}/>
            <div>
                {
                    groups.map((group) => (
                        <div>{group.name}</div>
                    ))
                }
            </div>
            <h1>this is Dashboard page</h1>
            <Link to="/recordings"><span className = " text-blue-500">Go to recording</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);