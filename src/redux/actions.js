import axios from 'axios';
import { GET_OBJECTS, GET_COLOR } from './types'
import jsonData from '../json/test_data.json'

export function infoObjects() {
    return async dispatch => {
    
        dispatch({ 
            type: GET_OBJECTS,
            data: jsonData
         })
        
    }
}

export function checkStatus(status) {
    return {
        type: GET_COLOR,
        status
    }
}