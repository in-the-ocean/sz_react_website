import '../App.css';
import { Component } from 'react';
import VideoOverlay from './videoOverlay.js'

class Videodata extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false,
            src: null
        }
        this.enlarge = this.enlarge.bind(this)
        this.minimize = this.minimize.bind(this)
    }

    enlarge(src, event) {
        event.preventDefault()
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
        const videos = [{
            id: 1,
            src: require("./media/ori.mp4")
        },
        {
            id: 2,
            src: require("./media/hades.mp4")
        },
        {
            id: 3,
            src: require("./media/sekiro.mp4")
        },
        {
            id: 4,
            src: require("./media/control.mp4")
        }]
        return (
            <div>
            <div className="container">
                {videos.map((video) => 
                    (<div className="video" key={video.id}>
                    <video controls src={video.src.default} onClick={(e) => this.enlarge(video.src.default, e)}></video>
                    </div>)
                )}
            </div>
            <VideoOverlay show={this.state.clicked} src={this.state.src} minimize={this.minimize}/>
            </div>
        )
        
    }
}

export default Videodata