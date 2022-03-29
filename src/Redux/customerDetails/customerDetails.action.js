export const customerDetailsAction = keyvalue => ({
    type:"ADD_DETAILS",
    payload:keyvalue
})


export const customerDetailsAutoSuggestion = singleList => ({
    type:"ADD_DETAILS_AUTOSUGGESTION",
    payload:singleList
})

export const customerDetailsReset = () => ({
    type:"RESET_DETAILS",
   
})
