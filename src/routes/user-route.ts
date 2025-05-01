import { Request, Response, Router } from "express";
import { QuotationController } from "../controllers/quotation-controller";
import upload from "../middlewares/upload";
import { UserController } from "../controllers/user-controller";
import { UserService } from "../services/user-service";
const route = Router();
const userController = new UserController(); // Instância do UserController

route.post(
  "/login",
  upload.single("file"),
  QuotationController.createQuotation
);
route.post("/register", userController.register.bind(userController));

export default route;
