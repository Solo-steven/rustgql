export type Mayae<T> = T | null;
export interface Query {
  me: Mayae<User>;
  user?: Mayae<User>;
  allUsers?: [Mayae<User>];
  search: [SearchResult];
  myChats: [Chat];
}
export enum Role {
  USER,
  ADMIN,
}
export interface Node {
  id: Mayae<string>;
}
export type SearchResult = User | Chat | ChatMessage;
export type User = Node &  {
  id: Mayae<string>;
  username: Mayae<string>;
  email: Mayae<string>;
  role: Mayae<Role>;
}
export type Chat = Node &  {
  id: Mayae<string>;
  users: [User];
  messages: [ChatMessage];
}
export type ChatMessage = Node &  {
  id: Mayae<string>;
  content: Mayae<string>;
  time: Mayae<Date>;
  user: Mayae<User>;
}
export interface QueryUserArgs{
  id: string;
  name: Mayae<string>;
}
export interface QuerySearchArgs{
  term: string;
}
