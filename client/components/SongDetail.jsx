import React, { Component } from 'react';
import gql from 'graphql-tag'; // helper to write graph ql queries
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate.jsx';
import LyricList from './LyricList.jsx';

class SongDetail extends Component {
  render() {
    // your song comes in params object via react router
    // params { id: string }
    // console.log("PROPS>", this.props);
    const { song = {}, loading } = this.props.data;
    
    if (loading) {
      // maybe show loading
      return <div></div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id}/>
      </div>
    );
  }
}

// graphql helper can intercept and read
// the props to song detail
// react rouer --> graphql --> songdetail
// knows all props to your component
const propsHandler = (props) => {
  return { variables: {id: props.params.id} }
}

// an array of params passed into graphql for readability
const queryParams = [
 fetchSong, // named query above
 { options: propsHandler } // options for graphql intercepting props
];

// interface to include param props
export default graphql(...queryParams)(SongDetail);