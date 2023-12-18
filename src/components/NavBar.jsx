import {Link} from "react-router-dom"

import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <nav className="flex justify-between w-screen bg-neutral-900 px-16 py-8 text-white font-semibold text-xl">
      <Link to="/">Epic Store</Link>
      <SearchBar />
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default NavBar