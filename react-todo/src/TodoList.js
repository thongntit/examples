import React, { Component } from 'react'
class TodoList extends Component{
	handleInput = e =>{
		e.preventDefault();
		const taskName = this.refs.taskInput.value;
		this.props.addItem(taskName);
		this.refs.taskInput.value= '';
	}
	render(){
		return (
			<div className="todoListMain">
			<div className="header">
			<form onSubmit={this.handleInput}>
			<input id="textinput" placeholder="Task" ref="taskInput" />
			<button type="submit"> Add Task </button>
			</form>
			</div>
			</div>
		)
	}
}
export default TodoList
