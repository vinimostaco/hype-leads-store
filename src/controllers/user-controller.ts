import { UserService } from "../services/user-service";
import { Request, Response } from "express";
export class UserController {
  async register(req: Request, res: Response) {
    try {
      console.log("Registering user", req.body);
      const user = await UserService.create(req.body);
    } catch (error) {
      console.log(error);

      //   return res.status(500).json({ message: "Error creating user", error });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching users", error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await UserService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Error deleting user", error });
    }
  }
}
