import { userRepository } from "../repositories/user-repositorie";
import { Users } from "../config/db/entity/entities/Users";

export class UserService {
  static async create(data: Partial<Users>): Promise<Users> {
    const user = userRepository.create(data);
    return await userRepository.save(user);
  }

  static async findAll(): Promise<Users[]> {
    return await userRepository.find();
  }

  static async findByEmail(email: string): Promise<Users | null> {
    return await userRepository.findOneBy({ email });
  }

  static async delete(id: string): Promise<void> {
    await userRepository.delete(id);
  }
}
