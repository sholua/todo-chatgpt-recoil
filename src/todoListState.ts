import { atom } from 'recoil';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});