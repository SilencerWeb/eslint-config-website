import gql from 'graphql-tag';


export const UPDATE_RULE = gql`
  mutation updateRule(
    $id: String
    $name: String
    $example: RuleExampleCreateInput!
  ) {
    updateRule(
      id: $id
      name: $name
      example: $example
    ) {
      examples {
        correct
        incorrect
      }
    }
  }
`;
