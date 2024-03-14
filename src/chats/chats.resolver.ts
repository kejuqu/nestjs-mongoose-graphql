import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { CreateChatInput } from 'src/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Chat')
export class ChatsResolver {
  constructor(private chatsService: ChatsService) {}

  @Query()
  async chats() {
    return this.chatsService.findAll();
  }

  @Mutation('createChat')
  async createChat(@Args('input') input: CreateChatInput) {
    const result = this.chatsService.create(input);
    pubSub.publish('messageAdded', { messageAdded: result });

    return result;
  }

  @Subscription()
  messageAdded() {
    return pubSub.asyncIterator('messageAdded');
  }
}
