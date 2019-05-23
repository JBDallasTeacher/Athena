import axios from "axios";
import history from '../history'
import { FETCH_STUDENTS,FETCH_STUDENT, CREATE_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from "./types";

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


  export const fetchStudent = id => (dispatch) =>{
    axios.get(`/api/students/${id}`).then(res =>
      dispatch({type: FETCH_STUDENT, payload:res.data})
    ); 
  }

  export const editStudent = (id, formValues) => (dispatch) =>{
    axios.patch(`/api/students/${id}`, formValues).then(res =>
      dispatch({type: EDIT_STUDENT, payload:res.data})
    ); 
    history.push('/tdashboard')
  }
  export const deleteStudent = id => (dispatch) =>{
    axios.delete(`/api/students/register${id}`).then(res =>
      dispatch({type: DELETE_STUDENT, payload:id})
    ); 
    history.push('/tdashboard')
  }