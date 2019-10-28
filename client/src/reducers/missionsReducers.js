import _ from 'lodash';
import { FETCH_MISSIONS } from "../actions/types";

export default (state = {}, action)=>{
    switch(action.type){
        case FETCH_MISSIONS:
            return {...state, ..._.mapKeys(action.payload, '_id')};
        default:
            return state
    }
   
}