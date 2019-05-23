import axios from "axios";
import history from '../history'
import { FETCH_STUDENTS, CREATE_STUDENT} from "./types";

export const fetchStudents = () => dispatch =>{
    axios.get('/api/students/').then(res =>
      dispatch({type: FETCH_STUDENTS, payload:res.data})
    )
  }


  export const createStudent = (formValues) => (dispatch, getState) =>{
    const {id} = getState().auth.user
    axios.post('/api/students/register', {...formValues, id}).then(res =>
      dispatch({type: CREATE_STUDENT, payload:res.data})
    ); 
    history.push('/tdashboard')
  }