import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router-dom"


export const LayoutPublic = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}
