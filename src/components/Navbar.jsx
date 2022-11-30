import { Link } from "react-router-dom";

function Navbar({cartCount}) {
  return (
    <nav className="nav">
     <Link to="/">Logo</Link>
     <Link to="/cart">Cart: {cartCount}</Link>
    </nav>
  );
}

export default Navbar;