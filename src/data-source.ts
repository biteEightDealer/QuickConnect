import "reflect-metadata"
import { DataSource } from "typeorm"
import { Server } from "./entity/server"
import * as os from "os"
import * as path from "path"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: path.join(os.homedir(), "Documents", "database/database.sqlite"),
    synchronize: true,
    logging: false,
    entities: [Server],
    migrations: [],
    subscribers: [],
})
