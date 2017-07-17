import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    const { songId } = this.props;
    const { content } = this.state;
    
    this.props.mutate({
      variables: { songId, content }
    });

    // automatically clear the content
    this.setState({ content: '' });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({
            content: event.target.value
          })}
        />
      </form>
    );
  }
}

const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID) {
	addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);