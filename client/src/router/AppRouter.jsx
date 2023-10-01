import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, RecoverPasswordPage, RegisterPage } from '../components/auth'
import { Navbar, Sidebar } from "../components/common";
import { HomePage } from "../components/pages";
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='recover' element={<RecoverPasswordPage />} />
                <Route path='/' element={<Navbar />}>
                    <Route path='/home' element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>}>
                    </Route>
                </Route>
            </Routes >
        </>
    )
}
