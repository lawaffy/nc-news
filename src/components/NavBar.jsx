import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <Button variant="primary" className="home" onClick={() => navigate(`/`)}>
        Home
      </Button>
      <Button variant="primary" className="topics">
        Topics
      </Button>
    </div>
  );
}

export default NavBar;
