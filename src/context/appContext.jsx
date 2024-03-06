import { createContext, useEffect, useReducer, useState } from "react";
import { INIT_ACTION_NAME, appActionsReducer, initAction } from "./appReducer";
import { getAppData } from "../service/appData";

export const defaultAppData = {
    "totalRecords": 0,
    "currentPage": 1,
    "totalPages": 0,
    "records": []
}

export const defaultUserData = {
    "firstName": "Vitalii",
    "lastName": "Khomenko",
    "token": "123"
}

export const AppContext = createContext(defaultAppData);

export const UserContext = createContext(defaultUserData);

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appActionsReducer, defaultAppData);
    const [userState] = useState(defaultUserData);

    useEffect(() => {
        const fetchFiles = async () => {
            const result = await getAppData(userState.token);
            if (result.status === 'ok') {
                dispatch(initAction(result.data));
            }
        };

        fetchFiles();
    }, [userState.token]);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <UserContext.Provider value={userState}>
                {children}
            </UserContext.Provider>
        </AppContext.Provider>
    )
};