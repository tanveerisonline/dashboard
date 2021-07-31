import { gql } from "@apollo/client";

export const MESSAGE_ALERT_QUERY = gql`
  query FormQuery {
    messageAlert @client
  }
`;
