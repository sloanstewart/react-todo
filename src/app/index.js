var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['crush your enemies', 'see them driven before you', 'hear the lamentations of their women']
        }
    },
    render: function(){
        return(
            <div id="todo-list">
                <p>It's a list...of todos!</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }// render
});

// Put component into HTML page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));