import React from 'react'
import CreatePost from './CreatePost'
import Tweets from './Tweets'

const Feed = () => {
  return (
    <div className='w-[60%] border'>
      <CreatePost/>
      <Tweets/>
      <Tweets/>
    </div>
  )
}

export default Feed