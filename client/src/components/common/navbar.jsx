import React from "react";
import { Navbar, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button, Divider, DropdownSection } from "@nextui-org/react";
import ThemeSwitch from "./switchtheme";
import { IconArrowAutofitUp } from "@tabler/icons-react";

export default function App() {
    return (
        <>
            <Navbar className=" dark:bg-gray-800 ml-auto mb-40 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <NavbarContent>
                </NavbarContent>

                <NavbarContent justify="center">
                    <Button color="secondary" radius="sm" variant="shadow" endContent={<IconArrowAutofitUp />}>
                        Subir información del alumnado
                    </Button>
                </NavbarContent>

                <NavbarContent as="div" justify="end">
                    <NavbarItem className="hidden sm:flex gap-4">
                        <ThemeSwitch />
                    </NavbarItem>

                    <NavbarItem>
                        <Dropdown placement="bottom-end" backdrop="opaque">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="primary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownSection showDivider>
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Haz iniciado sesión como:</p>
                                        <p className="font-semibold">usuario@example.com</p>
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection showDivider>
                                    <DropdownItem><p className="font-semibold">Configuración</p></DropdownItem>
                                    <DropdownItem><p className="font-semibold">Ayuda</p></DropdownItem>
                                </DropdownSection>
                                <DropdownSection title={'Danger zone'}>
                                    <DropdownItem
                                        key="cerrar"
                                        className="text-danger h-12 text-center"
                                        color="danger">
                                        <p className="font-bold">Cerrar Sesión</p>

                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>

    );
}
