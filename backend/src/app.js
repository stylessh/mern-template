import express from "express";

import usersRoutes from "./routes/users.routes"

// initializing
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// routes
app.use('/api/users', usersRoutes)

export default app;
