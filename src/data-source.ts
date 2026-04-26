import "reflect-metadata"
import { DataSource } from "typeorm"
import { Server } from "./entity/server"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "~/database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Server],
    migrations: [],
    subscribers: [],
})
