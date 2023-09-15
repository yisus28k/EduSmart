import axios from 'axios';

// Definir la URL base del servidor Node.js
const serverURL = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor

// Función para registrar un usuario en el servidor
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${serverURL}/api/user/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};
