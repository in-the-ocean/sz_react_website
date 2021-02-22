import '../App.css';
import React from 'react'
import { Component } from 'react';
import ImgOverlay from './imgOverlay.js'

class Imagedata extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false,
            src: null
        }
        this.enlarge = this.enlarge.bind(this)
        this.minimize = this.minimize.bind(this)
    }

    enlarge(src) {
        this.setState({
            clicked: true,
            src: src 
        })
    }

    minimize(target, current) {
        if (current == target){
            this.setState({
                clicked: false,
                src: null
            })
        }
    }

    render() {
        const images = [{
            id: 1,
            src: require("./media/sekiro_1.jpg")
        },
        {
            id: 2,
            src: require("./media/sekiro_2.png")
        },
        {
            id: 3,
            src: require("./media/sekiro_3.jpg")
        },
        {
            id: 4,
            src: require("./media/sekiro_4.jpg")
        },
        {
            id: 5,
            src: require("./media/sekiro_5.jpg")
        },
        {
            id: 6,
            src: require("./media/sekiro_6.jpg")
        },
        {
            id: 7,
            src: require("./media/ori_1.jpg")
        },
        {
            id: 8,
            src: require("./media/ori_2.jpg")
        }]
        return (
            <div>
            <div className="container">
                {images.map((image) => 
                    <div className="img" key={image.id}>
                        <img src={image.src.default} onClick={(e) => this.enlarge(image.src.default, e)}/>
                    </div>
                )}
            </div>
            <ImgOverlay show={this.state.clicked} src={this.state.src} minimize={this.minimize}/>
            </div>
        )
    }
}

export default Imagedata 