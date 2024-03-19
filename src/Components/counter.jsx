import React, { Component } from 'react';
import { useState } from 'react';
class Counter extends Component {
    state = {
        counter : 0
    }
    style = {
        fontWeight : "bold",
        marginRight : "70px"
    }
    incr_style = {
        marginRight : "10px"
    }
    inrement_handler = () => {
        this.state.counter = this.state.counter + 1
        var counter = document.getElementById("counter_id")
        counter.innerHTML = this.check_counter()
    }
    decrement_handler = () => {
        if(this.state.counter == 0){
            this.state.counter = 0
            var counter = document.getElementById("counter_id")
            counter.innerHTML = this.check_counter()
            
        }
        else{
            this.state.counter = this.state.counter - 1
            var counter = document.getElementById("counter_id")
            counter.innerHTML = this.check_counter()
        }   
       
    }
    render() { 
        return (<React.Fragment>
            <span className = "btn btn-primary" style={this.style} id="counter_id">{this.check_counter()}</span>
            <button onClick = {this.inrement_handler} className = "btn btn-secondary mt-2"  style={this.incr_style}>Increment</button>
            <button onClick = {this.decrement_handler} className = "btn btn-secondary mt-2" >Decrement</button>
        </React.Fragment>);
    }

    check_counter(){
        if(this.state.counter == 0){
            return "Zero"
        }
        else{
            return this.state.counter
        }
    }
}
 
export default Counter;