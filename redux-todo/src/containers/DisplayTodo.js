import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'
import {filter as f} from '../actions'

const getVisibleTodos = (todos,filter) => {
  switch (filter) {
    case f.SHOW_ALL:
      return todos
    case f.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case f.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos,state.filter)
  })  

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)