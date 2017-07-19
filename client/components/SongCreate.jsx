import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

// local imports
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    // console.log(this.props);

    // add song here
    // send in variables
    // graphql identifies its already running a query, so it doesn't do it again
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    }).then( (e) => hashHistory.push('/#') );
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song title</label>
          <input 
            onChange={ event => this.setState({ title: event.target.value})}
            value={this.state.title} 
          />
        </form>
      </div>
    );
  }
}

// how can we communicate info from component back
// to the form
// need to add name for mutation
// so AddSong is function name, it's personal name
// takes some params
const mutation = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
`;

export default graphql(mutation)(SongCreate);