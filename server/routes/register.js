import express from "express";
import bcrypt from "bcrypt";
import connection from "../config/connectdb.js";

const Register = express.Router();
const saltRounds = 10;

Register.post("/", (req, res) => {
    const institucion = "1";
    const { nombre, app, apm, correo, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log("Error al hashear la contraseña", err);
            return res.status(500).json({ success: false, message: "Error interno del servidor" });
        }
        connection.query('INSERT INTO docentes(id_institucion, nombre, app, apm, correo_electronico, password) VALUES(?,?,?,?,?,?)', [institucion, nombre, app, apm, correo, hash],
            (err, result) => {
                if (err) {
                    res.status(500).json({ success: false, message: "Error al crear la cuenta" });
                } else {
                    res.status(200).json({ success: true, message: "La cuenta ha sido creada con éxito" });
                }
            }
        );
    });
});

export default Register; // Exporta el objeto router como módulo
