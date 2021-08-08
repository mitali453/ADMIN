import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore, } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

const reducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
    auth: authReducer,
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;










/*switch (action.type) {
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
    }*/