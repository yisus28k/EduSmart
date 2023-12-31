import express from "express";
import corse from "cors";
import Register from "./routes/register.js";
import Login from "./routes/login.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(corse());
app.use(express.json());
app.use("/register", Register);
app.use("/login", Login);


app.listen(PORT, () => {
    console.log('Connnected to the server in', PORT);
});