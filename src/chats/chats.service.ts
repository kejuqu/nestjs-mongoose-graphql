import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatInput } from 'src/graphql';
import { Chat } from './chat.schema';
import { Model } from 'mongoose';

@Injectable()
export class ChatsService {
  // check why cannot inject ChatModel
  constructor(@InjectModel(Chat.name) private catModel: Model<Chat>) {}

  async findAll(): Promise<Chat[]> {
    return await this.catModel.find().exec();
  }

  async create(createCatDto: CreateChatInput): Promise<Chat> {
    const createdCat = new this.catModel({
      ...createCatDto,
      createAt: new Date(),
    });

    return createdCat.save();
  }
}
