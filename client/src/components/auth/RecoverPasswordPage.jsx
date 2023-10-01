import { Button, Card, CardBody, Divider, Input } from '@nextui-org/react'
import React from 'react'
import { useForm } from "../hooks/UseForm";

export const RecoverPasswordPage = () => {
    const { email, onInputChange, onResetForm } =
        useForm({
            email: ''
        });
    return (
        <>
            <div className="flex items-center justify-center p-20">
                <div className="w-full max-w-md">
                    <div className="text-center mb-4">
                        <a href="/" className="text-3xl text-blue-900 font-bold dark:text-white">EduSmart</a>
                    </div>
                    <Card className='px-2 pt-2 pb-2 mb-2'>
                        <CardBody>
                            <h2 className="text-xl text-center font-bold mb-4">Recuperar contraseña</h2>
                            <p className='text-gray-500 mb-4'>
                                Ingresa tu correo y tu contraseña será enviada a tu correo,
                                <span className='text-danger'>
                                    si no cuentas con conexión a internet comunícate con un administrador
                                </span>
                            </p>
                            <Divider className="mb-4" />
                            <form autoComplete='off'>
                                <div className='mb-4'>
                                    <label className=" dark:text-white block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
                                    <Input
                                        value={email}
                                        onChange={onInputChange}
                                        isRequired
                                        type='email'
                                        variant='flat'
                                        label="Ingresa tu correo"
                                        name="email"
                                    />
                                </div>
                                <Button type="submit" className="w-full font-bold mt-4 py-2 px-4" color="primary">
                                    Crear cuenta
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                    <div class="text-center text-gray-500 mt-3">
                        Una vez recuperada la cuenta, puedes <a href="/" className='text-blue-600 underline'>regresar</a> a la pantalla de inicio de sesión
                    </div>
                </div>
            </div>
        </>
    )
}