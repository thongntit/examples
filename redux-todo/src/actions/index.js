import uuid from "uuid";

export function addTodo(text){
    return (
        {
            type: 'ADD_TODO',
            id: uuid.v4(),
            text
        }
    )
}

export function toggleTodo(id) {
    return (
        {
            type: 'TOGGLE_TODO',
            id
        }
    )
}

export function setFilter(filter) {
    return (
        {
            type: 'SET_FILTER',
            filter
        }
    )
}

export const filter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}