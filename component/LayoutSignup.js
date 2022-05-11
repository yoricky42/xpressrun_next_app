import Navbar from "./navbar/Navbar Singup"

function Layout({ children }) {
    return (
      <>
        <Navbar/>
        <main>{children}</main>
      </>
    )
  }

export default Layout;
