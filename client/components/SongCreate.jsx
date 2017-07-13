import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    // attempt to add new song here
  }

  render() {
    return (
      <div>
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
const mutation = qgl`
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
`;

const variables = gql`
`

export default SongCreate;