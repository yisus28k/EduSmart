import axios, { Axios } from "axios";
import { React, useState } from "react";
import { Toaster, toast } from "sonner";
import { useForm } from "../hooks/UseForm";
import { useNavigate } from "react-router-dom";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { Card, CardBody, Input, Divider, Tooltip, Checkbox, Button } from "@nextui-org/react";


export const LoginPage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { email, password, onInputChange, onResetForm } =
        useForm({
            email: '',
            password: '',
        });

    const onLogin = e => {
        e.preventDefault();
        if (password.length < 8) {
            toast.error('La contraseña debe ser mínimo de 8 caracteres')
            return;
        } else {
            axios.post("http://localhost:3000/login", {
                email: email,
                password: password,
            }).then((response) => {
                if (response.data.success) {
                    navigate('/home', {
                        replace: true,
                        state: {
                            logged: true,
                            email,
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
        onResetForm;
    }
    return (
        <>
            <Toaster richColors position="top-center" closeButton />
            <div className="flex gap-5 items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="text-center m-4">
                        <a href="/" className="text-3xl text-blue-800 font-bold dark:text-white">EduSmart</a>
                    </div>
                    <Card className="px-8 pt-6 pb-4 mb-4">
                        <CardBody>
                            <h2 className="text-xl text-center font-bold mb-5">CONTROL DE ACCESO</h2>
                            <Divider className="mb-4" />
                            <form autoComplete="off" onSubmit={onLogin}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-md font-bold mb-2 dark:text-white">Correo electrónico</label>
                                    <Input
                                        value={email}
                                        onChange={onInputChange}
                                        type="email"
                                        variant="flat"
                                        label="Coloca tu correo electrónico"
                                        labelPlacement="inside"
                                        description="tucorreo@example.com"
                                        name="email"
                                        isRequired
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-1">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-md font-bold mb-2 dark:text-white">Contraseña</label>
                                        <span className="text-md text-blue-500">
                                            <a href="recover">¿Perdiste tu contraseña?</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Input
                                        value={password}
                                        onChange={onInputChange}
                                        color={password.length < 8 ? "danger" : "success"}
                                        variant="flat"
                                        label="Coloca tu contraseña"
                                        labelPlacement="inside"
                                        description="admin1234"
                                        isRequired
                                        name="password"
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
                                <div className="mb-6">
                                    <Checkbox size="md">Recordar dispositivo</Checkbox>
                                </div>
                                <div className="mb-1">
                                    <Button type="submit" className="w-full font-bold py-2 px-4" color="primary">
                                        Ingresar al sistema
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div className="text-center text-lg text-dark dark:text-gray-300 mt-3">
                        ¿No tienes una cuenta? <a href="./register" className="text-blue-500 hover:underline">Regístrate aquí</a>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-1 w-2/5">
                    <img src="../../../public/undraw_secure_login_pdn4.svg" alt="" />
                </div>
            </div>
        </>
    )
}
