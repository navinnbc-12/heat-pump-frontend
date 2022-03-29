import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import emailNumReducer from "./emailNum/emailNum.reducer";
import customerDetailsReducer from "./customerDetails/customerDetails.reducer";
import suggestionListReducer from "./suggestionList/suggestionList.reducer";
import FirstPageReducer from "./FirstPage/FirstPage.Reducer";
import adminFirstPageReducer from "./AdminFirstPage/adminFirstPage.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["fp","cdr","sl"]
  }

const rootReducer = combineReducers({
    fp:emailNumReducer,
    cdr:customerDetailsReducer,
    sl:suggestionListReducer,
    fpr:FirstPageReducer,
    afpr:adminFirstPageReducer
})

export default persistReducer(persistConfig,rootReducer)