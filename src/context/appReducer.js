export const INIT_ACTION_NAME = "INIT";

export const initAction = (initAppData) => {
    return { type: INIT_ACTION_NAME, payload: initAppData };
};

export const appActionsReducer = (state, action) => {
    switch (action.type) {
        case INIT_ACTION_NAME:
            return { ...state, app: action.payload }

        default:
            return state;
    }
}

