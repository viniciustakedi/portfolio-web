import { atom } from "jotai";

export interface Post {
  friendlyId: string,
  thumbnail: string,
  title: string,
  description: string,
  content: string,
  timeToRead: number,
  tags: string[],
  likes: number,
  createdAt: Date
}

export const postsAtom = atom<Post[]>([]);