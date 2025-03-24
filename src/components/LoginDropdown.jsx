import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginDropdown = () => {
  const { allUsers, setUser, user } = useContext(UserContext);

  const handleSelectUser = (event) => {
    const selectedUsername = event.target.value;

    const selectedUser = allUsers.find(
      (user) => user.username === selectedUsername
    );

    if (selectedUser) {
      setUser(selectedUser);
    } else {
      console.warn("No user found for selected username", selectedUsername);
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="userDropdown" style={styles.label}>
        Choose a User:
      </label>
      <select
        id="userDropdown"
        onChange={handleSelectUser}
        value={user ? user.username : ""}
        style={styles.dropdown}
      >
        <option value="" disabled>
          Select a user
        </option>
        {allUsers.map((user) => (
          <option key={user.username} value={user.username}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
    padding: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  dropdown: {
    padding: "10px",
    width: "100%",
  },
};

export default LoginDropdown;
