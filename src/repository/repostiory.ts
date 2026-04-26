import { Server } from "../entity/server"
import { AppDataSource } from "../data-source"

const serverRepository = AppDataSource.getRepository(Server);

export const repoServer = {
    async create(server: Partial<Server>) {
        const srv = serverRepository.create(server);
        return await serverRepository.save(srv);
    },
    async findAll(){
        return await serverRepository.find();
    },
    async findById(id: number){
        return await serverRepository.findOneBy({id});
    },
    async deleteById(id: number){
        return await serverRepository.delete({id});
    },
    async updateById(id: number, server: Partial<Server>){
        return await serverRepository.update({id}, server);
    }
}