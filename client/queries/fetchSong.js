import gql from 'graphql-tag';

// ! means type ID and must be provided

export default gql`
query SongById($id: ID!) { 
  song(id: $id) {
    id
    title
  }
}
`;