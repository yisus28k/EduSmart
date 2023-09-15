import Axios from "axios";
import { Toaster, toast } from 'sonner'
import { React, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { Card, CardBody, Divider, Input, Tooltip, Button } from "@nextui-org/react";

export default function Register() {

    const [nombre, setNombre,] = useState("");
    const [app, setApp,] = useState("");
    const [apm, setApm,] = useState("");
    const [correo, setCorreo,] = useState("");
    const [password, setPassword,] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);


    const addDocente = () => {
        if (!nombre || !app || !apm || !correo || !password) {
            toast.error('Debes completar todos los campos')
            return;
        } else {
            if (password.length < 8) {
                toast.error('La contraseña debe ser mínimo de 8 caracteres')
                return;
            } else {
                Axios.post("http://localhost:3000/register", {
                    nombre: nombre,
                    app: app,
                    apm: apm,
                    correo: correo,
                    password: password
                })
                    .then((response) => {
                        if (response.data.success) {
                            toast.success(response.data.message);
                            setNombre("");
                            setApp("");
                            setApm("");
                            setCorreo("");
                            setPassword("");

                        } else {
                            console.error(response.data.message);
                        }
                    })
                    .catch((error) => {
                        console.error('Error en la solicitud:', error);
                    });
            }
        }
    }

    return (
        <>
            <Toaster richColors position="top-left" closeButton />
            <div className="min-h-screen flex items-center justify-center dark:bg-neutral-800">
                <div className="w-full max-w-md">
                    <div className="text-center mb-2 mt-1">
                        <a href="/" className="text-3xl text-blue-900 font-bold dark:text-white">EduSmart</a>
                    </div>
                    <Card className="px-2 pt-2 pb-2 mb-2">
                        <CardBody>
                            <h2 className="text-xl text-center font-bold mb-2">Crear cuenta nueva</h2>
                            <Divider className="mb-" />
                            <form action="" autoComplete="off">
                                <div className="mb-2">
                                    <label className=" dark:text-white block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                    <Input
                                        value={nombre}
                                        onChange={(event) => { setNombre(event.target.value) }}
                                        isRequired
                                        autoFocus
                                        type="text"
                                        variant="flat"
                                        label="Ingresa tu nombre"
                                        name="nombre"
                                    />
                                </div>
                                <label className=" block text-gray-700 text-sm font-bold mb-2 dark:text-white">Apellidos</label>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-3  mb-2">
                                    <Input
                                        value={app}
                                        isRequired
                                        type="text"
                                        variant="flat"
                                        name="app"
                                        label="Apellido paterno"
                                        onChange={(event) => { setApp(event.target.value) }}
                                    />
                                    <Input
                                        value={apm}
                                        isRequired
                                        type="text"
                                        variant="flat"
                                        name="apm"
                                        label="Apellido materno"
                                        onChange={(event) => { setApm(event.target.value) }}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Correo electrónico</label>
                                    <Input
                                        value={correo}
                                        type="email"
                                        isRequired
                                        variant="flat"
                                        name="correo"
                                        label="Ingresa tu correo electrónico"
                                        onChange={(event) => { setCorreo(event.target.value) }}
                                    />

                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">Contraseña</label>
                                    <Input
                                        value={password}
                                        isRequired
                                        variant="flat"
                                        name="contraseña"
                                        label="Ingresa tu contraseña"
                                        onChange={(event) => { setPassword(event.target.value) }}
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
                                <div className="mt-2">
                                    <Button type="button" onClick={addDocente} className="w-full font-bold py-2 px-4" color="primary">
                                        Crear cuenta
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div className="text-center text-lg text-gray-300 mt-1">
                        ¿Ya tienes una cuenta? <a href="/" className="text-blue-500 hover:underline">Inicia sesión aquí</a>
                    </div>
                </div>
            </div>
        </>
    );
}