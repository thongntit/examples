import React from 'react'
import {addTodo} from '../actions'

class Form extends React.Component {
	constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (e){
            e.preventDefault()
            this.dispatch(addTodo(this.input.current.value))
            this.input.current.value = ''
    }
    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input ref={this.input} />
            <button type='submit'>AddTodo</button>
            </form>
            </div>
        )
    }
}

export default Form;