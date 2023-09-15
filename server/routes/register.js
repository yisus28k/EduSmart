const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { connection } = require("../config/connectdb");

const saltRounds = 10;

router.post("/", (req, res) => {
    const institucion = "1";
    const { nombre, app, apm, correo, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log('Error al hashear la contraseña', err);
            return res.status(500).json({ success: false, message: "Error al hashear la contraseña" });
        }

        connection.query('INSERT INTO docentes(id_institucion, nombre, app, apm, correo_electronico, contraseña) VALUES(?,?,?,?,?,?)', [institucion, nombre, app, apm, correo, hash],
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

module.exports = router;
