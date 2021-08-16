import axios, { CancelToken} from "axios";
import { Group } from "../models/Group";

import { BASE_URL } from "./auth";
import { get } from "./base";

export interface GroupRequest{
    limit? : number;
    offset?: number;
    query : string;
    status : "all-groups" | "favourite" | "archieved"
}

interface GroupResponse{
    data : Group[]
}

export const fetchGroups = (data : GroupRequest , token? : CancelToken) => {
    const url = BASE_URL + "/groups";
    return get<GroupResponse>(url,{params:data , cancelToken : token});    
}

export const fetchOneGroup = (id:string) => {
    const url = BASE_URL + "/groups/groupId=" +id;
    return axios.get<GroupResponse>(url);    
}