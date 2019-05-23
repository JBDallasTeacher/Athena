import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'
import authReducer from "./authReducer";
import studentsReducer from "./studentsReducer"
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  students: studentsReducer,
  errors: errorReducer,
  form: formReducer
});
