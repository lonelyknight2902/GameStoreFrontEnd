import {useLocation} from "react-router-dom"

import NavBar from "./NavBar"

const Layout = ({children}) => {
  let location = useLocation()
  console.log(location)
  return (
    <>
      {!location.pathname.includes("/login") && <NavBar />}
      <main className="relative mx-64 mt-20 flex self-center overflow-auto z-0">
        {children}
      </main>
    </>
  )
}

export default Layout