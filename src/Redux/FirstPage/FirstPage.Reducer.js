const INITIAL_STATE = {
    firstPageStatus:true
}

const FirstPageReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case "TOGGLE_FIRSTPAGE":
            return{
                ...state,
                firstPageStatus:action.payload
            }
            break;
    
        default:
           return state;
    }
}

export default FirstPageReducer;