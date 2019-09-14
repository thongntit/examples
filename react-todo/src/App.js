import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
class App extends Component {
	constructor(){
		super();
		this.state = {
			items: [],
			updateItemID: ""
		}
	}
	addItem = (taskName) => {
		if (this.state.updateItemID === ""){		
			const newTask = {
			text: taskName,
			key: Date.now().toString()
			}
			if (taskName !== null && taskName !== ''){
				this.setState(state =>{
					return {
						items: [...state.items,newTask]
					}
				})
			}
		}
		else {
			let items = this.state.items;
			let updateItemID = this.state.updateItemID;
			let index = -1
			items.find((props,i) => {
				if (props.key === updateItemID){
					index = i;
				}
				return null
			});
			if ( index !== -1) {
				items[index].text = taskName;
			}
			updateItemID = ""
			this.setState (state => {
				return {
					items: items,
					updateItemID: updateItemID
				}
			})
		}
	}
	delItem = (key) => {
		const items = this.state.items;
		const newItems = items.filter(function(item){
			if (item.key === key){
				return null
			}
			return item
		});
		this.setState(() =>{
			return {
				items: newItems
			}
		})
	}
	markUpdateItem = (key) => {
		this.setState(state =>{
			return{
				items: state.items,
				updateItemID: key
			}
		})
		console.log("UpdateItemID " + this.state.updateItemID)
	}

	render() {
		return (
			<div>
			<TodoList addItem={this.addItem} />
			<TodoItems markUpdateItem={this.markUpdateItem} delItem={this.delItem} entries={this.state.items} />
			</div>
		);
	}
}
export default App;
