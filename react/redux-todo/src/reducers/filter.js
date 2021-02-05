import {filter as f} from '../actions'

function filter(state=f.SHOW_ACTIVE,action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filter;