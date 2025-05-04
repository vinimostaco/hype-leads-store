import express from "express";
import authRoutes from "./routes/auth-routes";
import quotationRoute from "./routes/cotacao-route"
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use("/auth", authRoutes);
app.use(quotationRoute)

export default app;
