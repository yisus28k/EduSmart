const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importa las rutas de registro desde otro archivo (por ejemplo, register.js)
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

// Usa las rutas de registro
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto", PORT);
});
