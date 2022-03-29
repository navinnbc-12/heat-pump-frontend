const INITIAL_STATE = {
    "email":"",
    "password":"",
    "name":"",
    "mobile":"",
    "business_registered_name":"",
    "business_trade_name":"",
    "business_type":"",
    "address_1":"",
    "address_2":"",
    "country":"",
    "city":"",
    "postcode":"",
    "admin":false
}

const customerDetailsReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case "ADD_DETAILS":
            return {
                ...state,
               ...action.payload
            }
            
            break;
        case "RESET_DETAILS":
                return {
                    ...state,
                   ...INITIAL_STATE
                }
                
                break;
            case "ADD_DETAILS_AUTOSUGGESTION":
            return {
                ...state,
                postcode:action.payload.postcode,
                city:action.payload.posttown ,
                address_1:action.payload.addressline1,
                address_2:action.payload.addressline2
                }
            
            break;
        default:
            return state;
    }
} 



export default customerDetailsReducer;