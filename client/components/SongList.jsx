import React, { Component } from 'react';
import gql from 'graphql-tag'; // helper to write graph ql queries
import { graphql } from 'react-apollo';

// step 2
const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

class SongList extends Component {

  // get data from graphql server

  /**
   * STEPS for graphql + react
   * 
   * 1. identify data required by component
   * 2. write query in graphql and then in component file
   * 3. bond query + component
   * 4. access data
   */ 

  // step 1
  // we need title of song

  renderSongs() {
    const { songs, loading } = this.props.data;

    // songs is undefined
    const mappedSongs = songs.map( 
      song => <li className="collection-item" key={song.id}>{song.title}</li>
    );
    return <ul className="collection" id="songs">{mappedSongs}</ul>
  }

  render() {
    if (this.props.data.loading) return <div>loading</div>;
    
    console.log(this.props)
    return (
      <div>
        <h2>Songs</h2>
        {this.renderSongs()}
      </div>
    );
  }
}

// query executed when loaded
// fetching data is async
// will show up on screen temp without data
// then component rerendered with data

export default graphql(query)(SongList);