import _ from 'lodash';
import {FETCH_STUDENTS, CREATE_STUDENT} from '../actions/types';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_STUDENTS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case CREATE_STUDENT:
                return{...state, [action.payload._id]: action.payload}
        default:
            return state
    }
   
}
