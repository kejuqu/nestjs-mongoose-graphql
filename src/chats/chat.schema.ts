import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Chat {
  @Prop()
  id: string;

  @Prop()
  creatorId: string;

  @Prop()
  content: string;

  @Prop()
  createAt: Date;
}

export type CatDocument = HydratedDocument<Chat>;

export const ChatSchema = SchemaFactory.createForClass(Chat);
