import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chat as ChatType } from 'src/graphql';
import { Chat } from './chat.schema';
import { Model } from 'mongoose';

let chats = [
  {
    id: 'chatId1',
    creatorId: 'creatorId1',
    content: 'What is MySQL?',
    createAt: new Date(1708322662789),
  },
  {
    id: 'chatId1',
    creatorId: 'chatGptId',
    content:
      "MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, covering the entire range from personal projects and websites, via e-commerce and information services, all the way to high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.",
    createAt: new Date(1708322672330),
  },
  {
    id: 'chatId2',
    creatorId: 'creatorId1',
    content: 'How to use this image?',
    createAt: new Date(1708322682115),
  },
  {
    id: 'chatId3',
    creatorId: 'chatGptId',
    content:
      'There are several different persistence strategies to choose from. This one will save a snapshot of the DB every 60 seconds if at least 1 write operation was performed (it will also lead to more logs, so the loglevel option may be desirable). If persistence is enabled, data is stored in the VOLUME /data, which can be used with --volumes-from some-volume-container or -v /docker/host/dir:/data (see docs.docker volumes).',
    createAt: new Date(1708322690594),
  },
  {
    id: 'chatId4',
    creatorId: 'chatGptId',
    content:
      'For more about Redis Persistence, see http://redis.io/topics/persistence.',
    createAt: new Date(1708324486037),
  },
];

@Injectable()
export class ChatsService {
  // check why cannot inject ChatModel
  constructor(@InjectModel(Chat.name) private catModel: Model<Chat>) {}

  findAll(productId: string): ChatType[] {
    return chats;
  }

  async create(createCatDto: Omit<ChatType, 'id'>): Promise<ChatType> {
    const createdCat = new this.catModel(createCatDto);
    const res = await createdCat.save();
    return res;
  }
}
