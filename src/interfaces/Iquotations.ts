interface CreateQuotationData {
  userId: number;
  partName?: string;
  quality: string;
  size: "P" | "M" | "G" | "Padrão";
  imageUrl: string;
}
