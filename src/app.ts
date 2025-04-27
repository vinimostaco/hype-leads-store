import express from "express";
import cotacaoRoute from "./routes/cotacao-route";
const app = express();

app.use(express.json());

app.use("/api", cotacaoRoute);

export default app;
