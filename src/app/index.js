import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/index.css';

// Module requires
import TodoItem from './todo-item';

// Create component
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['make trap beat', 'crush your enemies', 'see them driven before you', 'hear the lamentations of their women']
        }
        this.onDelete = this.onDelete.bind(this);
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
                <ul>
                  {todos}
                </ul>
            </div>
        );
    }

    //Custom functions
    onDelete(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val; 
        });
        this.setState({
            todos: updatedTodos
        });
    }
};

// TodoItem component
// class TodoItem extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleDelete = this.handleDelete.bind(this);
//     }
//     render() {
//         return(
//             <li>
//                 <div className="todo-item">
//                     <span className="item-name">{this.props.item}</span>
//                     <span className="item-delete" onClick={this.handleDelete}> x </span>
//                 </div>
//             </li>
//         );
//     }
//     // Custom functions
//     handleDelete() {
//         this.props.onDelete(this.props.item);
//     }
// };

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));