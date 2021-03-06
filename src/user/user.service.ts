import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExist = await this.findByEmail(createUserDto.email);

    if(userExist){
      throw new BadRequestException(`Usuário já existe`);
    }
    
    const newUser = new this.userModel({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    });

    await newUser.save();

    newUser.password = undefined;

    return newUser;
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

}
