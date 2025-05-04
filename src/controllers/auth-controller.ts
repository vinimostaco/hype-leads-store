    import { Request, Response } from "express";
    import { AuthService } from "../services/auth-service";

    export class AuthController {
      private authService: AuthService
      constructor(){
        this.authService = new AuthService()
      }
      async login(req: Request, res: Response): Promise<any> {
        const { email, password } = req.body;
        const auth = await this.authService.login(email, password)
        res.cookie('token', auth.token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600000,
        });
        res.json({ message: 'Login bem-sucedido!',token:auth.token });
      }

      async register(req: Request, res:Response){
        const {nome, email, password} = req.body

        const register = await this.authService.register(nome, email, password)
        console.log(register)
      }
    }
