import { act } from "react-dom/test-utils";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./modules/Group";
import { User } from "./modules/User";

const ME_FETCH = "me/fetch";
export const GROUP_QUERY = "groups/query";
export const GROUP_QUERY_COMPLETED = "groups/query_completed";

export interface AppState {
    me?: User,
    isSidebarOpen: boolean,
    groupQuery: string;
    groupQueryMap: { [keyword: string]: number[] };
    groups: { [id: number]: Group };
}

const initialState: AppState = {
    me: undefined,
    groupQuery: "",
    groupQueryMap: {},
    groups: {},
    isSidebarOpen: true,
};

const reducer: Reducer<AppState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ME_FETCH:
        case 'me/login':
            return { ...state, me: action.payload };
        case GROUP_QUERY:
            return { ...state, groupQuery: action.payload };
        case GROUP_QUERY_COMPLETED:
            const groups = action.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);
            const groupMap = groups.reduce((prev, group) => {
                return { ...prev, [group.id]: group };
            }, {});


            return {
                ...state, groupQueryMap: { ...state.groupQueryMap, [action.payload.query]: groupIds },
                groups: { ...state.groups, ...groupMap }
            };

        default:
            return state;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export const meFetchedAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;