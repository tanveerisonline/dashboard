import { InMemoryCache, Reference, makeVar } from "@apollo/client";
export const MessageAlert = makeVar({});

const Reactive = {
  messageAlert: {
    read() {
      return MessageAlert();
    },
  },
};

export default Reactive;
