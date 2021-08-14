import { Group } from "../models/Group"
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants"


export const groupQueryAction = (query : string) => ({ type : GROUPS_QUERY , payload : query })

export const groupQueryCompletedAction = (query : string , groups : Group[]) => ({ type : GROUPS_QUERY_COMPLETED , payload : {query , groups}  })



