const INITIAL_STATE = {
    adminfirstPageStatus:true
}

const adminFirstPageReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case "TOGGLE_ADMIN_FIRSTPAGE":
            return{
                ...state,
                adminfirstPageStatus:action.payload
            }
            break;
    
        default:
           return state;
    }
}

export default adminFirstPageReducer;