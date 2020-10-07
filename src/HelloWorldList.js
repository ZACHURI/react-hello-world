import React, { Component } from 'react';
import './HelloWorldList.css'; 
import AddGreeter from './AddGreeter';
import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Bender'] };
        this.addGreeting = this.addGreeting.bind(this);
    }

    addGreeting(newName) {
        this.setState({greetings: [...this.state.greetings, newName] })
    }    

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name}/>
        ))
    }

    render() {
        return(
            <div className="HelloWorldList"> 
                <AddGreeter addGreeting={this.addGreeting}/>
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;