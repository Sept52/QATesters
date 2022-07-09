import { GET_OBJECTS, GET_COLOR } from './types'

const initialState = {
    data: [],
    color: '',
    status: ''
}

export const getInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            return {
               
                data: action.data
            }
        case GET_COLOR:
            const { status } = action;
            const { data } = state;
            const newStatus = ''; 
            switch (status) {
                case 'new':
                    newStatus="Новый"
                break;
            
                default:
                    break;
            }
            return {
               color: action.color,
               status: newStatus,
                
            }
    
        default:
            return state;
    }
}