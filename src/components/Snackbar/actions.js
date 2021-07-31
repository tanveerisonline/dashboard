import { MESSAGE_ALERT_QUERY } from "./queries";
import { gql, useQuery, useMutation } from "@apollo/client";
import { getUuid } from "utils/uuid";
import { MessageAlert } from "./reactive";

export function SelectAlertAction() {
  const {
    data: { messageAlert },
  } = useQuery(MESSAGE_ALERT_QUERY);

  return messageAlert;
}

export default function setAlertMessage({
  message = "",
  title = "",
  severity = "success",
  duration = null,
}) {
  MessageAlert({ message, title, severity, duration, id: getUuid() });
}
