import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Foo</Link>
        <Link to="/about">Bar</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Home

