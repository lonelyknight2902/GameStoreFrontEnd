import {useLocation} from "react-router-dom"

import NavBar from "./NavBar"

const Layout = ({children}) => {
  let location = useLocation()
  console.log(location)
  return (
    <>
      {!location.pathname.includes("/login") && <NavBar />}
      <main className="mx-72  mt-20 flex self-center">
        {children}
      </main>
    </>
  )
}

export default Layout