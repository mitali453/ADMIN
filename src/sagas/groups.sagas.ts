import { takeLatest,takeEvery, call,put ,delay} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_FETCH_ONE, GROUPS_QUERY } from "../actions/actions.constants";
import { fetchOneGroupComplete, groupQueryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/groups";

function* fetchGroups(action:AnyAction) : Generator<any>{
    //console.log("fetchGroups called");
    yield delay(1000);
    const groupsRes:any= yield call(fetchGroupsApi, {query: action.payload, status: "all-groups" });
    
    yield put(groupQueryCompletedAction(action.payload,groupsRes.data.data))
};

function* fetchOne(action:AnyAction):Generator<any>{
    console.log("fetchOne called");
    const res:any =yield call(fetchOneGroup,action.payload);
    yield put(fetchOneGroupComplete(res.data.data));
}


export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeLatest( GROUPS_QUERY, fetchGroups);
    yield takeEvery(GROUPS_FETCH_ONE,fetchOne);

    //yield debounce( 1000,GROUPS_QUERY, fetchGroups); ==> same as takeLatset, and yield delay
}

export { };



