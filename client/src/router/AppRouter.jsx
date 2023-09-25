import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, RecoverPasswordPage, RegisterPage } from '../components/auth'
import { Navbar, Sidebar } from "../components/common";
import { HomePage } from "../components/pages";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='Recover' element={<RecoverPasswordPage />} />
                <Route path='/' element={<Navbar />}>
                    <Route path='home' element={<HomePage />} />
                </Route>
            </Routes >
        </>
    )
}
