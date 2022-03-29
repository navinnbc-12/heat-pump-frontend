const INITIAL_STATE = {
    suggestionList:[]
 }
 
 const suggestionListReducer = (state = INITIAL_STATE,action) => {
     switch (action.type) {
         case "SET_SUGGESTION_LIST":
             return {
                ...state,
                suggestionList:action.payload
             }
             
             break;
         
         default:
             return state;
     }
 } 
 
 
 
 export default suggestionListReducer;