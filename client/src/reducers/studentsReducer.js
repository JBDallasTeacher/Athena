import _ from 'lodash';
import { FETCH_STUDENTS,FETCH_STUDENT, CREATE_STUDENT, EDIT_STUDENT, DELETE_STUDENT} from '../actions/types';

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_STUDENTS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case CREATE_STUDENT:
                return{...state, [action.payload._id]: action.payload};
        case FETCH_STUDENT:
            return{...state, [action.payload._id]: action.payload};
        case EDIT_STUDENT:
            return{...state, [action.payload._id]: action.payload};
        case DELETE_STUDENT:
            return _.omit(state, action.payload);
        default:
            return state
    }
   
}
