import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>

      <br />

      <Link to="/about">
        About
      </Link>

      <br />

      <Link to="/contact">
        Contact
      </Link>

      <br />

      <Link to="/login">
        Login
      </Link>
    </>
  );
}

export default Navbar;