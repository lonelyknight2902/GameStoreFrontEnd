import {Link} from "react-router-dom"

import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-screen bg-neutral-900 z-50">
      <div className="flex justify-between w-full px-16 py-4 text-white font-semibold text-xl">
        <Link to="/">Epic Store</Link>
        <SearchBar />
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar