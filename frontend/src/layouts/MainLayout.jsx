import { Outlet } from "react-router-dom"

import TopBar from "../components/authenticated/TopBar"
import LeftBar from "../components/authenticated/LeftBar"

const MainLayout = () => {
  return (
    <div>
      <TopBar />

      <div className="w-full flex">
        <LeftBar />

        <div className="w-full h-screen overflow-y-scroll pt-24 pb-10 px-8 bg-gray-50">
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
