import '../App.css';
import { Component } from 'react';

class Textdata extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div className="text">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">First name:</label> <br/>
                    <input type="text" id="fname" name="fname"/> <br/>
                    <label htmlFor="lname">Last name:</label> <br/>
                    <input type="text" id="lname" name="lname"/> <br/>

                    <p>Favorite Movie</p>
                    <div>
                    <input type="radio" id="Avengers" name="movie" value="avengers"/>
                    <label htmlFor="Avengers">Avengers</label>
                    </div>
                    <div>
                    <input type="radio" id="darkknight" name="movie" value="darkknight"/>
                    <label htmlFor="darkknight">Dark Knight</label>
                    </div>
                    <div>
                    <input type="radio" id="Tenet" name="movie" value="Tenet"/>
                    <label htmlFor="Tenet">Tenet</label>
                    </div>

                    <br/>
                    <input type="submit" value="Done"/>
                </form>
            </div>
        )
    }
}


export default Textdata 