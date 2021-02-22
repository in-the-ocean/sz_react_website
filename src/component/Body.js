import '../App.css';
import { Component } from 'react';
import Textdata from './text.js'
import Imagedata from './image.js'
import Videodata from './video.js'
import Tabledata from './table.js'
import Emaildata from './email.js'

class Body extends Component {
    constructor () {
        super()
        this.state = {
            show: false
        }
    }

    render() {
        const content = {
            1: <Textdata/>,
            2: <Imagedata/>,
            3: <Videodata/>,
            4: <Tabledata/>,
            5: <Emaildata/>
        }
        return content[this.props.active]
    }
}

export default Body; 