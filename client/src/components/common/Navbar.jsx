import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Navbar as Nav, NavbarContent, Button } from "@nextui-org/react";

export const Navbar = () => {
    return (
        <>
            <header>
                <Nav className='dark:bg-gray-800 ml-auto mb-40 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]'>
                    <NavbarContent></NavbarContent>
                    <NavbarContent>
                    </NavbarContent>

                    <NavbarContent justify="center">
                        <Button color="secondary" radius="sm" variant="shadow">
                            Subir información del alumnado
                        </Button>
                    </NavbarContent>
                </Nav>
            </header>
            <Sidebar />
            <Outlet />
        </>
    )
}
