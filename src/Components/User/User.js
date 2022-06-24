import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed'
import NotFound from '../NotFound'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  const {data} = React.useContext(UserContext)

  return  <section className='container'>
    <UserHeader />
    <Routes >
      <Route path='/' element={<Feed user={data.id} />} />
      <Route path='postar' element={<UserPhotoPost />} />
      <Route path='estatistica' element={<UserStats />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  </section>

  
}

export default User