import Navbar from "./navbar/Navbar Rel"

function Layout({ children }) {
    return (
      <>
        <Navbar/>
        <main>{children}</main>
      </>
    )
  }

export default Layout;
