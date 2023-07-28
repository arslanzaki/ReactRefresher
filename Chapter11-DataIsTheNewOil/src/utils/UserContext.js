import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Arslan",
    email: "arslan@dummy.com",
  },
});

export default UserContext;
