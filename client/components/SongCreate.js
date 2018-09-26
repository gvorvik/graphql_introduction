import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link, hashHistory} from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songTitle: ''
        }

    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {title: this.state.songTitle},
            refetchQueries: [{ query }]
        })
        .then(() => hashHistory.push('/'))
        .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h1>Create a Song</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                        value={this.state.title} 
                        onChange={event => this.setState({songTitle: event.target.value})} 
                        type="text"    
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);