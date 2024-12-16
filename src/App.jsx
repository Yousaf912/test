import Header from "./Components/header/Header"
import Homesection from "./Components/Homesection/Homesection"
import SideBar from "./Components/Sidebar/Sidebar"

const App = () => {
  return (
    <>
      <Header />
      <div className="container mt-5 d-lg-flex ">
        <div className="col-lg-3 ">
          <SideBar />
        </div>
        <div className="col-lg-9">
          <Homesection />
        </div>
      </div>
    </>
  )
}

export default App
