var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['crush your enemies', 'see them driven before you', 'hear the lamentations of their women'],
            age: 30
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} key={index} />
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
    }// render
});

// TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});

// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));