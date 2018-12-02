import gql from 'graphql-tag';


export const UPDATE_RULE = gql`
  mutation updateRule(
    $id: String
    $name: String
    $updatedOption: RuleOptionUpdateInput
    $newExample: RuleExampleCreateInput
  ) {
    updateRule(
      id: $id
      name: $name
      updatedOption: $updatedOption
      newExample: $newExample
    ) {
      id
    }
  }
`;
