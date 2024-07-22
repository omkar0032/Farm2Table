import React, { Component } from 'react'
import Layout from '../../components/Layout/layout.js'
import UserMenu from '../../components/Layout/UserMenu.js'
import { useAuth } from '../../context/auth.js'
const Dashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-9'>
            <div className='card w-75 p-3'>
              <h3>User:the maha chutiya {auth?.user?.name}</h3>
              <h3>User:mail {auth?.user?.email}</h3>
              <h3>User:phone {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard