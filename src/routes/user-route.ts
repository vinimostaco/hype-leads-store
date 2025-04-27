import { Request, Response, Router } from "express";
import { QuotationController } from "../controllers/quotation-controller";
import upload from "../middlewares/upload";
const route = Router();

route.post(
  "/login",
  upload.single("file"),
  QuotationController.createQuotation
);
route.get("/register", (req: Request, res: Response) => {
  console.log("teste");
});

export default route;
