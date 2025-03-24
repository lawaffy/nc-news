import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then((usersFromApi) => {
        setAllUsers(usersFromApi);
        setUser(usersFromApi[5]);
      })
      .catch((err) => {
        console.error("error fetching users");
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, allUsers }}>
      {children}
    </UserContext.Provider>
  );
};
