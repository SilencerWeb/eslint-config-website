import gql from 'graphql-tag';


export const UPDATE_RULE = gql`
  mutation updateRule(
    $id: String
    $name: String
    $option: RuleOptionUpdateInput
    $example: RuleExampleCreateInput
  ) {
    updateRule(
      id: $id
      name: $name
      option: $option
      example: $example
    ) {
      id
    }
  }
`;
