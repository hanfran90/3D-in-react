import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/squares">Squares</Link>
        <Link to="/spheres">Spheres</Link>
      </nav>
    </>
  );
};

export default NavBar;
