import axios from "axios";
import history from '../history'
import { FETCH_MISSIONS } from "./types";

export const fetchMissions = () => dispatch =>{
    axios.get('/api/missions/').then(res =>
      dispatch({type: FETCH_MISSIONS, payload:res.data})
    )
    history.push('/dashboard')
  }