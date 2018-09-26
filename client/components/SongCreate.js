import React, {Component} from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songTitle: ''
        }

    }


    render() {
        return (
            <div>
                <h1>Create a Song</h1>
                <form>
                    <label>Song Title:</label>
                    <input 
                        value={this.state.title} 
                        onChange={event => this.setState({songTitle: event.target.value})} 
                        type="text"    
                    />
                </form>
            </div>
        );
    }
}

export default SongCreate;