import Button from "react-bootstrap/esm/Button";

function NavBar() {
  return (
    <div className="button-container">
      <Button variant="primary" className="home">
        Home
      </Button>
      <Button variant="primary" className="user">
        Topics
      </Button>
    </div>
  );
}

export default NavBar;
