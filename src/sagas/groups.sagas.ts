import { takeEvery, call,put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupQueryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi } from "../api/groups";

function* fetchGroups(action:AnyAction) : Generator<any>{
    //console.log("fetchGroups called");
    const groups:any= yield call(fetchGroupsApi, {query: action.payload, status: "all-groups" });
    
    yield put(groupQueryCompletedAction(action.payload,groups))
};

export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeEvery(GROUPS_QUERY, fetchGroups);
}
export { };



