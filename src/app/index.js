import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/index.css';

// Module requires
import TodoItem from './todo-item';
import AddItem from './add-item';

// Create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['make trap beat', 'crush your enemies', 'see them driven before you', 'hear the lamentations of their women']
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    render() {
        var todos = this.state.todos;
        todos = todos.map( (item, index) => { // bind 'this' through arrow function
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            );
        });
        return(
            <div id="todo-list">
                <p>it's a list of todos!</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }

    //Custom functions
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val; 
        });
        this.setState({
            todos: updatedTodos
        });
    }
    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push[item];
        this.setState({
            todos: updatedTodos
        })

    }
};

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));