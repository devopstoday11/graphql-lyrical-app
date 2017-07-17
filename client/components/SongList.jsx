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

  onSongDelete(id) {
    // call mutation itself
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
    // you can also run this.props.data.refetch()
  }

  renderSongs() {
    const { songs, loading } = this.props.data;

    // songs is undefined
    const mappedSongs = songs.map( 
      ({ id, title }) => 
      <li className="collection-item" key={id}>
        <Link to={`/songs/${id}`}>{title}</Link>
        <i className="material-icons"
          onClick={() => this.onSongDelete(id)}
        >
          delete
        </i>
        
      </li>
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

const mutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

// query executed when loaded
// fetching data is async
// will show up on screen temp without data
// then component rerendered with data

// cant double up mutation and query
// this syntax sucks, maybe will be improved

export default graphql(mutation)(
  graphql(query, { options: { fetchPolicy: 'cache-and-network' } })(SongList)
);