import multer, { StorageEngine, FileFilterCallback } from "multer";
import path from "path";
import { Request } from "express";

// Configuração do storage: onde e como o arquivo será armazenado
const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    // Defina o diretório de uploads
    const uploadPath = path.resolve(__dirname, "../../uploads");

    // Cria o diretório se ele não existir
    const fs = require("fs");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    // Define o diretório de destino
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    // Define o nome do arquivo
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extname = path.extname(file.originalname);
    const filename = `${file.fieldname}-${uniqueSuffix}${extname}`;

    cb(null, filename); // Retorna o nome do arquivo
  },
});

// Função de filtro para tipos de arquivos
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  // Tipos de arquivos permitidos
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

  // Verifica se o tipo do arquivo é permitido
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de arquivo inválido"));
  }
};

// Criação do middleware de upload com as configurações de armazenamento, tamanho máximo e filtro
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite de 5 MB
  },
  fileFilter,
});

export default upload;
