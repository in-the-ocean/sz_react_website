import '../App.css';
import React from 'react'
import { Component } from 'react';

class ImgOverlay extends Component {
    render() {
        if (this.props.show) {
            return (
                <div id="overlay" style={{display: 'flex'}}
                    onClick={(e) => this.props.minimize(e.target, e.currentTarget)}>
                    <img src={this.props.src}/>
                </div>
            )
        } else {
            return (
                <div id="overlay" style={{display: 'none'}}
                    onClick={(e) => this.props.minimize(e.target, e.currentTarget)}>
                </div>
            )
        }
    }
}

export default ImgOverlay