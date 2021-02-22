import '../App.css';
import { Component } from 'react';

class Tab extends Component {
    constructor() {
        super()
        this.state = {
            hover: false
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    handleLeave() {
        this.setState({
            hover: false 
        })
    }

    render () {
        const stl = () => {
            if (this.props.active == this.props.tab.id || this.state.hover) {
                return {backgroundColor: '#6b6b6b'}
            } else {
                return {backgroundColor: '#464646'}
            }
        };

        return (
            <li className="tab" style = {stl()} onClick={(e) => this.props.ctab(this.props.tab.id)}
                onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}>
                {this.props.tab.title}
            </li>
        )
    }
}

export default Tab