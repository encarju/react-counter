import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state= {
            number: 8,
        }
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    };
    
    onIncrease(){
        this.setState(prevState => ({number: prevState.number+1}));
    }
    onDecrease(){
        this.setState(prevState => ({number: prevState.number-1}));
    }
    render() {
        return (
            <section>
                <input type = "button" value="+" onClick={this.onIncrease}/>
                <span> {this.state.number} </span>
                <input type = "button" value="-" onClick={this.onDecrease}/>
            </section>
        );
    }
}

export default Counter;