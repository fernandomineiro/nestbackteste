import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findLogin(name: string, email: string, senha: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                name: name,
                email: email,
                password: senha
            }
        });
    }

    async findLogin2(name: string, email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                name: name,
                email: email,
            }
        });
    }

  
}


