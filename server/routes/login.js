const express = require("express");
const bcrypt = require("bcrypt");
const { connection } = require("../config/connectdb");
const router = express.Router();

router.post("/", (req, res) => {
    const { correo, password } = req.body;

    connection.query("SELECT * FROM docentes WHERE correo_electronico = ?", [correo],
        (err, result) => {
            if (err) {
                console.log("Error al consultar la base de datos");
                res.status(500).json({ success: false, message: "Error interno en el servidor" });
                return;
            }
            if (result.length === 0) {
                res.status(200).json({ success: false, message: "Usuario o contraseña incorrectos" });
            }
            const user = result[0];
            bcrypt.compare(password, user.password, (bcryptErr, match) => {
                if (bcryptErr) {
                    console.log("Erro al comparar contraseñas", bcryptErr);
                    res.status(500).json({ success: false, message: "Error interno en el servidor" });
                    return;
                }
                if (!match) {
                    res.status(200).json({ success: false, message: "Usuario o contraseña incorrectos" });
                    return;
                } else {
                    res.status(200).json({ success: true, message: "login" });
                }
            })
        }
    )
})
module.exports = router;