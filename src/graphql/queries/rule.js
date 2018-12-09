import gql from 'graphql-tag';


export const RULE_QUERY = gql`
  query rule($id: ID $name: String) {
    rule(id: $id name: $name) {
      name
      options {
        id
        type
        name
        value
        defaultValue
        description
        options
      }
      value
      category
      shortDescription
      longDescription
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
        id
        type
        name
        value
        defaultValue
        description
        options
      }
      value
      category
      shortDescription
      longDescription
      isRecommended
      isFixable
    }
  }
`;
