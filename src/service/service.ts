import {repoServer} from "../repository/repostiory"; 
import { Server } from "../entity/server";

export class ServerService {
    async createServer(server: Server){
        try {
            return await repoServer.create(server);
        }catch(err){
            throw new Error("Error creating server service");
        }
    }
    async getServers(page: number, limit: number){
        return await repoServer.findAll(page, limit);
    }
}