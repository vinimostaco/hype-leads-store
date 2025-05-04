import app from "./app";
import { AppDataSource } from "./config/db/datasource";

function startServer(){
    AppDataSource.initialize()
    console.log("database conectado com sucesso")

    app.listen(3000, ()=>{
        console.log("server rodando na 3000")
    })
}

startServer()