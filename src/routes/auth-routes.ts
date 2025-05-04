import { Request, Response, Router } from "express";
        import { AuthController } from "../controllers/auth-controller";
import { authMiddleware } from "../middlewares/authenticate";

const authController = new AuthController();
const route = Router();

route.post("/login", authController.login.bind(authController));
route.post("/register", authController.register.bind(authController));


export default route;
