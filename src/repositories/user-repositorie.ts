// src/repository/user.repository.ts
import { AppDataSource } from "../config/db/datasource";
import { Users } from "../config/db/entity/entities/Users";

export const userRepository = AppDataSource.getRepository(Users);
