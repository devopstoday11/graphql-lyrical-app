import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        LyricList
      </ul>
    );
  }
}

export default LyricList;