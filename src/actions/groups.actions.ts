import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";


const queryAction = (query: string ,loading:boolean) => ({ type: GROUPS_QUERY, payload:{ query,loading} });

const queryCompletedAction = (query: string, groups: Group[]) => ({ type: GROUPS_QUERY_COMPLETED, payload: { query, groups }, });
export { };



export const groupsActions = bindActionCreators({
    query: queryAction,
    queryCompleted:queryCompletedAction
}, store.dispatch)