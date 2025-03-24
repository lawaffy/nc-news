import NavBar from "./NavBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import LoginDropdown from "./LoginDropdown";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div style={styles.headerInfo}>
        {user ? (
          <div className="avatar-container">
            <img
              style={styles.img}
              src={user.avatar_url}
              alt={`${user.name}'s avatar`}
              className="avatar-img"
            />
            <div className="hover-box">
              <div className="text">{user.name}</div>
            </div>
          </div>
        ) : (
          <span>No user selected</span>
        )}
        <h1 style={styles.title}>🍎 NC Newz 🍎</h1>
        <LoginDropdown />
      </div>
      <NavBar />
    </div>
  );
}

const styles = {
  headerInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "0px",
  },
  img: {
    marginBottom: "10px",
    marginRight: "20px",
    padding: "10px",
  },
};

export default Header;
