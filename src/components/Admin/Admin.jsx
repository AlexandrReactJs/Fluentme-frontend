import React from "react";
import AdminLogin from "./AdminAuth/AdminLogin/AdminLogin";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminAuthMe } from "../../Redux/Slices/admin-slices/admin-slice";
import AdminHeader from "./AdminHeader/AdminHeader";
import { Routes, Route } from 'react-router-dom'
import AdminWords from "./AdminWords/AdminWords";
import AdminCategories from "./AdminCategories/AdminCategories";

const Admin = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.admin.isAuth)
    const token = useSelector(state => state.admin.token)



    React.useEffect(() => {

        dispatch(fetchAdminAuthMe(token))


    }, [token])


    if (!isAuth) {
        return <AdminLogin />
    }

    return (
        <div>


            <div>
                <AdminHeader />
                <div>
                    <Routes>
                        <Route path='/words' element={<AdminWords />} />
                        <Route path='/categories' element={<AdminCategories/>}/> 
                    </Routes>
                </div>
            </div>




        </div>
    )
}

export default Admin;