
import { Group } from "../models/Group"
import { GROUPS_FETCH_ONE, GROUPS_FETCH_ONE_COMPLETE, GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants"


export const groupQueryAction = (query : string) => ({ type : GROUPS_QUERY , payload : query })

export const groupQueryCompletedAction = (query : string , groups : Group[]) => ({ type : GROUPS_QUERY_COMPLETED , payload : {query , groups}  })

export const fetchOneGroup=( id:number)=>({
    type:GROUPS_FETCH_ONE,
    payload:id,
})

export const fetchOneGroupComplete=( group:Group)=>({
    type:GROUPS_FETCH_ONE_COMPLETE,
    payload: group,
})