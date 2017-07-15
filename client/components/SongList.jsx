import React, { Component } from 'react';
import gql from 'graphql-tag'; // helper to write graph ql queries
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

// step 2
// query abstracted to another file

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
    // query to mutate is not changed
    // so you need to refetch data
    // by default it does not refetch data

    if (this.props.data.loading) return <div>loading</div>;
    
    // add is add icon

    // console.log(this.props)
    return (
      <div>
        <h2>Songs</h2>
        {this.renderSongs()}
        <Link
         to="/songs/new"
         className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// query executed when loaded
// fetching data is async
// will show up on screen temp without data
// then component rerendered with data

export default graphql(query, { options: { fetchPolicy: 'cache-and-network' } })(SongList);