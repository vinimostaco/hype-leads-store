import prisma from "../config/prisma";

export class QuotationService {
  static async createQuotation(data: CreateQuotationData) {
    try {
      console.log(data);
      const user = await prisma.user.findUnique({
        where: { id: Number(data.userId) },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const quotation = await prisma.quotation.create({
        data: {
          userId: user.id,
          partName: data.partName,
          quality: data.quality,
          size: data.size,
          imageUrl: data.imageUrl,
        },
      });

      return quotation;
    } catch (error) {
      console.error("Error creating quotation:", error);
      throw new Error("Failed to create quotation");
    }
  }
}
