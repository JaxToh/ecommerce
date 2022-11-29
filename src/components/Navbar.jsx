import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
     <Link to="/">Logo</Link>
     <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;