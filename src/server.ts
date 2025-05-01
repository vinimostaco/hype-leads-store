import app from "./app";
import { AppDataSource } from "./config/db/datasource";
import { env } from "./config/env/environment-validation";

app.listen(env.PORT, () => {
  AppDataSource.initialize();
  console.log("✅ Conectado ao banco de dados");
  console.log("🚀 Server rodando na porta 3000");
});
