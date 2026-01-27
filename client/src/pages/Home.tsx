import Feed from '@/components/Feed'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}

export default Home