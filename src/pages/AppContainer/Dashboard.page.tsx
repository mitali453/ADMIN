import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../middleware/groups.middleware";
import { groupLoadingSelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props { }

const Dashboard: FC<Props> = () => {

    const query = useAppSelector(groupQuerySelector);
    const loading = useAppSelector(groupLoadingSelector);
    const groups = useAppSelector(groupsSelector);

    return (
        <div className=" p-4" >
            <h1 className=" text-red-500 font-semibold text-2xl p-2">this is Dashboard page</h1>
            <br />
            <div className=" flex space-x-4">
                <input
                    className="border border-black" type="text"
                    value={query}
                    placeholder="Search"
                    onChange={(e) => {
                        fetchGroups({ query: e.target.value, status: "all-groups" });
                    }} />
                {loading && <FaSpinner className=" text-2xl animate-spin"></FaSpinner>}
            </div>
            <div>
                {
                    groups.map((group) => (
                        <div >{group.name}</div>
                    ))
                }
                {!loading && groups.length===0 && "No data found"}
            </div>

            <Link to="/recordings"><span className=" text-blue-500">Go to recording</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {}

export default memo(Dashboard);