import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './chat.schema';
import { ChatsResolver } from './chats.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Chat.name,
        schema: ChatSchema,
      },
    ]),
  ],
  providers: [
    ChatsResolver,
    {
      provide: Chat.name,
      useClass: Chat,
    },
    ChatsService,
  ],
})
export class ChatsModule {}
