// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/entities/Users";
import { env } from "../env/environment-validation";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.HOST,
  port: 5432,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Users],
});
