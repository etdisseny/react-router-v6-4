import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">

        <NavLink to={"/"}> home</NavLink>
        <NavLink to={"/about"}> about</NavLink>
        <NavLink to={"/blog"}> blog</NavLink>
    </div>
    </nav>
  )
}
