import { Server } from "../entity/server"
import { AppDataSource } from "../data-source"

const serverRepository = AppDataSource.getRepository(Server);

export const repoServer = {
    async create(server: Partial<Server>) {
        const srv = serverRepository.create(server);
        return await serverRepository.save(srv);
    },
    async findAll(page: number = 1, limit: number = 5) {
        const [data, total] = await serverRepository.findAndCount({
            order: {
                id: "ASC"
            },
            skip: (page - 1) * limit,
            take: limit
        });
        return {
            data,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
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