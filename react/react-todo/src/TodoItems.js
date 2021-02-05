import React from 'react';

class TodoItems extends React.Component {
    handleDelete = e =>{
        e.preventDefault();
        const id = e.target.id;
        this.props.delItem(id);
    }
    handleEdit = e => {
        e.preventDefault();
        const content = e.target.innerHTML;
        var textinput = document.getElementById("textinput");
        textinput.value = content;
        this.props.markUpdateItem(e.target.id)
    }

    createTask = props => {
        return (
            <div key={props.key}>
                <li id={props.key} onClick={this.handleEdit}>{props.text}</li>
                <button id={props.key} ref="taskDel"  type="submit" onClick={this.handleDelete}>x</button>
            </div>
        )
    }
    render(){
        const {entries} = this.props;
        const listItems = entries.map(this.createTask)
        return <ul className='theList'>{listItems}</ul>
    }
}

export default TodoItems