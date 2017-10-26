var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// Create component
var TodoComponent = createReactClass({
    render: function(){
        return(
           <h1>yep!</h1>
        );
    }
});

// Put component into HTML page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));