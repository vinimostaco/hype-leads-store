import { AppDataSource } from "../config/db/datasource";
import { Users } from "../config/db/entity/entities/Users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class AuthService {
  private userRepository = AppDataSource.getRepository(Users);

  async register(name: string, email: string, password: string) {
    const exists = await this.userRepository.findOneBy({ email });
    if (exists) throw new Error("Email já cadastrado");

    const user = this.userRepository.create({ name, email, password });

    await this.userRepository.save(user);

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email },
    };
  }

    async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Credenciais inválidas");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email },
    };
  }
}
