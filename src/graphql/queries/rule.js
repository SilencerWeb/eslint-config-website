import gql from 'graphql-tag';


export const RULE_QUERY = gql`
  query rule($id: ID $name: String) {
    rule(id: $id name: $name) {
      id,
      name,
      value,
      category,
      shortDescription,
      longDescription,
      isActive,
      isRecommended,
      isFixable,
      isTurnedOn,
    }
  }
`;

export const RULES_QUERY = gql`
  {
    rules {
      id,
      name,
      value,
      category,
      shortDescription,
      longDescription,
      isActive,
      isRecommended,
      isFixable,
      isTurnedOn,
    }
  }
`;
