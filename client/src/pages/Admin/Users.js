import React from 'react'
import Layout from '../../components/Layout/layout'
import AdminMenu from '../../components/Layout/AdminMenu'

export const Users = () => {
    return (
        <>
            <Layout title={"Dashboard - All users"}>
                <div className='container-fluid m-3 p-3'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <AdminMenu />
                        </div>
                        <div className='col-md-9'>
                            <h1> all Users</h1>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}
export default Users;
