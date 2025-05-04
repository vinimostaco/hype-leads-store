// import { Request, Response } from "express";
// import { QuotationService } from "../services/quotation-service";

// export class QuotationController {
//   static async createQuotation(req: Request, res: Response): Promise<any> {
//     try {
//       const { partName, quality, size } = req.body;

//       if (!quality || !size) {
//         return res.status(400).json({ error: "Missing required fields" });
//       }
//       const userId = 3;
//       const imageUrl = "http://testedeum.com.br/";

//       const quotation = await QuotationService.createQuotation({
//         userId,
//         partName,
//         quality,
//         size,
//         imageUrl,
//       });

//       return res.status(201).json(quotation);
//     } catch (error) {
//       console.error("Error creating quotation:", error);
//       return res.status(500).json({ error: "Failed to create quotation" });
//     }
//   }
// }
