import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { CreateChatInput } from 'src/graphql';

@Resolver('Chat')
export class ChatsResolver {
  constructor(private chatsService: ChatsService) {}

  @Query()
  async chats(@Args('productId') productId: string) {
    return this.chatsService.findAll(productId);
  }

  @Mutation('createChat')
  async createChat(@Args('input') input: CreateChatInput) {
    console.log('input:', input);

    return this.chatsService.create(input);
  }
}
