import Feed from '@/components/Feed'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-between w-[85%] mx-auto  gap-1'>
      <LeftSidebar/>
     <Outlet/>
      <RightSidebar/>
    </div>
  )
}

export default Home