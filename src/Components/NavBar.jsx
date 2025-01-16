import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/cubes">Cubes</Link>
        <br />
        <Link to="/spheres">Spheres</Link>
      </nav>
    </>
  );
};

export default NavBar;
