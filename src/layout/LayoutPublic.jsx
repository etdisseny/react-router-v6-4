import { Navbar } from "../components/Navbar"
import { Outlet , useNavigation } from "react-router-dom"


export const LayoutPublic = () => {
  const navigation = useNavigation(); //este es el hook para pintar el loading. Tiene tres estados "idle" | "submitting" | "loading".
  return (
    <div>
        <Navbar/>
        {navigation.state === "loading" && 
        <div className="alert alert-info my-5">Loading...</div>
        }
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}
