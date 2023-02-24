import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../todoListState';
import {
  Button,
  Container,
  GlobalStyle,
  Input,
  TodoItem,
  TodoListContainer,
} from './styles';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [newTodoText, setNewTodoText] = React.useState('');

  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        text: newTodoText,
        completed: false,
      },
    ]);
    setNewTodoText('');
  };

  const toggleTodoCompletion = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <Button onClick={addTodo}>Add Todo</Button>
        <TodoListContainer>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              completed={todo.completed}
              onClick={() => toggleTodoCompletion(todo.id)}
            >
              {todo.text}
            </TodoItem>
          ))}
        </TodoListContainer>
      </Container>
    </>
  );
}

export default TodoList;
