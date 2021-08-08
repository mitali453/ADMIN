import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";


//3 ways of writing selector

//export const groupQuerySelector = (state:AppState) => state.groups.query;   //1 approach   always  run the commplete code--> its disadvantage

/*export const groupQuerySelector = (state: AppState) => {  //2 approach
    const groupState = groupStateSelector(state);
    return groupState.query;
}*/

export const groupQuerySelector=createSelector([groupStateSelector],    //3 approach
    (groupState)=>groupState.query);


/*export const groupQueryMapSelector = (state: AppState) => {
    const groupState = groupStateSelector(state);
    return groupState.queryMap;
}*/

export const groupQueryMapSelector=createSelector([groupStateSelector],   
    (groupState)=>groupState.queryMap);


/*export const groupByIdSelector = (state: AppState) => {
    const groupState = groupStateSelector(state);
    return groupState.byId;
}*/
export const groupByIdSelector=createSelector([groupStateSelector],    //3 approach
    (groupState)=>groupState.byId);



/*export const groupsSelector = (state: AppState) => {
    const query = groupQuerySelector(state);
    const queryMap = groupQueryMapSelector(state);
    const byId = groupByIdSelector(state);
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;


}*/
export const groupsSelector=createSelector([groupQuerySelector,groupByIdSelector,groupQueryMapSelector],
    (query,byId,queryMap) =>{
    const groupIds = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups });

