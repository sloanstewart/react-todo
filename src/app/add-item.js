import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return(
            <form id="add-todo">
                <input type="text" required ref="newItem" />
                <input type="submit" value="Add Item" onSubmit={this.handleSubmit} />
            </form>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
}

module.exports = AddItem;