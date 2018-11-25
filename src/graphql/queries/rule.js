import gql from 'graphql-tag';


export const RULE_QUERY = gql`
  query rule($id: ID $name: String) {
    rule(id: $id name: $name) {
      name
      options {
        type
        name
        value
        defaultValue
        options
      }
      value
      category
      shortDescription
      longDescription
      examples {
        options {
          name
          value
        }
        correct
        incorrect
      }
      isRecommended
      isFixable
    }
  }
`;

export const RULES_QUERY = gql`
  {
    rules {
      name
      options {
        type
        name
        value
        defaultValue
        options
      }
      value
      category
      shortDescription
      longDescription
      examples {
        options {
          name
          value
        }
        correct
        incorrect
      }
      isRecommended
      isFixable
    }
  }
`;
