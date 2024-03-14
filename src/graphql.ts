
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateChatInput {
    content?: Nullable<string>;
}

export interface Chat {
    id: string;
    creatorId?: Nullable<string>;
    content?: Nullable<string>;
    createAt?: Nullable<DateTime>;
}

export interface IQuery {
    chats(productId: string): Nullable<Nullable<Chat>[]> | Promise<Nullable<Nullable<Chat>[]>>;
}

export interface IMutation {
    createChat(input?: Nullable<CreateChatInput>): Nullable<Chat> | Promise<Nullable<Chat>>;
}

export interface ISubscription {
    messageAdded(id?: Nullable<string>): Nullable<Chat> | Promise<Nullable<Chat>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
