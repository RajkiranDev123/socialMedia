import Feed from '@/components/Feed'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <LeftSidebar/>
      <Feed/>
      <RightSidebar/>
    </div>
  )
}

export default Home