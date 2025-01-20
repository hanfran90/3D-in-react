import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/cubes">Cubes</Link>
        <br />
        <Link to="/spheres">Spheres</Link>
        <br />
        <Link to="/textures">Textures</Link>
      </nav>
    </>
  );
};

export default NavBar;
