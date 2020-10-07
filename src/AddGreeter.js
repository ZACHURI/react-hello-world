import React, { Component }from 'react';
import './AddGreeter.css';
import HelloWorld from './HelloWorld';

class AddGreeter extends Component {
    constructor(props) {
        super(props);
        this.state = { greetingName: ''};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    addGreeting() {
        this.props.addGreeting(this.state.greetingName);
        this.setState({ greeetingName: ''});
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => { 
            return name !== removeName; //if names don't match with greetings in list 
        });
        this.setState({ greetings: filteredGreetings });
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld
                key={name}
                name={name}
                removeGreeting={this.removeGreeting}
            />
        ));
    }

    handleUpdate(event)  {
        this.setState({ greetingName: event.target.value});
    }

    render() {
        return(
            <div className="AddGreeter">
                <input 
                    type="text" 
                    onChange={this.handleUpdate}
                    value={this.state.greetingName}
                />
                &nbsp;&nbsp;
                <button onClick={this.addGreeting}>Add</button>
            </div>        
        );
    }
}

export default AddGreeter;