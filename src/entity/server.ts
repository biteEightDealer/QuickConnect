import { Entity, PrimaryGeneratedColumn, Column, Not } from "typeorm"

@Entity()
export class Server {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    ip: number

    @Column()
    category: string

}
