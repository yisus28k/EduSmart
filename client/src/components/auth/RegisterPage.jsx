import Axios from "axios";
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useForm } from "../hooks/UseForm";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { Card, CardBody, Divider, Input, Tooltip, Button } from "@nextui-org/react";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { name, password, app, apm, email, onInputChange, onResetForm } =
        useForm({
            name: '',
            app: '',
            apm: '',
            email: '',
            password: '',
        });

    const onRegister = e => {
        e.preventDefault();
        if (password.length < 8) {
            toast.error('La contraseña debe ser mínimo de 8 caracteres')
            return;
        } else {
            Axios.post("http://localhost:3000/register", {
                nombre: name,
                app: app,
                apm: apm,
                correo: email,
                password: password
            }).then((response) => {
                if (response.data.success) {
                    navigate('/home', {
                        replace: true,
                        state: {
                            logged: true,
                            name,
                        },
                    });
                } else {
                    console.error(response.data.message);
                }
            })
                .catch((error) => {
                    console.error('Error en la solicitud:', error);
                });
        }
        onResetForm();
    };
    return (
        <>
            <Toaster richColors position="top-left" closeButton />
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="text-center mb-2 mt-1">
                        <a href="/" className="text-3xl text-blue-900 font-bold dark:text-white">EduSmart</a>
                    </div>
                    <Card className="px-2 pt-2 pb-2 mb-2">
                        <CardBody>
                            <h2 className="text-xl text-center font-bold mb-2">Crear cuenta nueva</h2>
                            <Divider className="mb-2" />
                            <form onSubmit={onRegister} autoComplete="off">
                                <div className="mb-3">
                                    <label className=" dark:text-white block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                    <Input
                                        value={name}
                                        onChange={onInputChange}
                                        isRequired
                                        type="text"
                                        variant="flat"
                                        label="Ingresa tu nombre"
                                        name="name"
                                    />
                                </div>
                                <label className=" block text-gray-700 text-sm font-bold mb-2 dark:text-white">Apellidos</label>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-3  mb-3">
                                    <Input
                                        value={app}
                                        isRequired
                                        type="text"
                                        variant="flat"
                                        name="app"
                                        label="Apellido paterno"
                                        onChange={onInputChange}
                                    />
                                    <Input
                                        value={apm}
                                        isRequired
                                        type="text"
                                        variant="flat"
                                        name="apm"
                                        label="Apellido materno"
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Correo electrónico</label>
                                    <Input
                                        value={email}
                                        type="email"
                                        isRequired
                                        variant="flat"
                                        name="email"
                                        label="Ingresa tu correo electrónico"
                                        onChange={onInputChange}
                                    />

                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Contraseña</label>
                                    <Input
                                        value={password}
                                        isRequired
                                        color={password.length < 8 ? "danger" : "success"}
                                        variant="flat"
                                        name="password"
                                        label="Ingresa tu contraseña"
                                        onChange={onInputChange}
                                        endContent={
                                            <>
                                                <Tooltip placement="right" content={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}>
                                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                        {isVisible ? (
                                                            <IconEyeOff className="text-2xl text-default-700 pointer-events-none" />
                                                        ) : (
                                                            <IconEye className="text-3xl text-default-700 pointer-events-none" />
                                                        )}
                                                    </button>
                                                </Tooltip>
                                            </>
                                        }
                                        type={isVisible ? "text" : "password"}
                                    />
                                </div>
                                <div>
                                    <Button type="submit" className="w-full font-bold py-2 px-4" color="primary">
                                        Crear cuenta
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div className="text-center text-lg text-dark dark:text-gray-300 mt-3">
                        ¿Ya tienes una cuenta? <a href="/" className="text-blue-500 hover:underline">Inicia sesión aquí</a>
                    </div>
                </div>
            </div >
        </>
    )
}
