import '../App.css';
import { Component } from 'react';

class Emaildata extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            valid: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            message: ''
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.value.includes('@') && 
            (this.state.value.slice(-4) == '.edu' || 
             this.state.value.slice(-4) == '.com')){
                this.setState({
                    message: "Email successfully recorded"
                })
        } else {
            this.setState({
                message: "Invalid email address"
            })
        }
    }

    render() {
        return (
            <form id="submit_email" onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label> <br/>
                <input type="text" id="email" name="email" 
                    onChange={this.handleChange} required/> <br/>
                <div id="message">{this.state.message}</div>
                <input type="submit" value="Done"/>
            </form>
        )
    }
}

export default Emaildata 