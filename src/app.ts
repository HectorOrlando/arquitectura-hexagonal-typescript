import dotenv from "dotenv";    // Importaciones de terceros. NOTA: El archivo .env de las varibles de entorno esta dentro del directorio " dist "
dotenv.config();

import Server from "./Infrastructure/Server";

const server = new Server();
server.listen();