import { takeLatest, call,put ,delay} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupQueryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";

function* fetchGroups(action:AnyAction) : Generator<any>{
    //console.log("fetchGroups called");
    yield delay(1000);
    const groupsRes:any= yield call(fetchGroupsApi, {query: action.payload, status: "all-groups" });
    
    yield put(groupQueryCompletedAction(action.payload,groupsRes.data.data))
};
export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeLatest( GROUPS_QUERY, fetchGroups);
    //yield debounce( 1000,GROUPS_QUERY, fetchGroups); ==> same as takeLatset, and yield delay
}

export { };



