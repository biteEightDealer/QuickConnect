import {repoServer} from "../repository/repostiory"; 
import { Server } from "../entity/server";

export class ServerService {
    async createServer(server: Server){
        return await repoServer.create(server);
    }
}