import React from 'react';
import { useRecoilState } from 'recoil';
import { atom } from 'recoil';
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 8,
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
});

const TodoListContainer = styled(List)({
  width: '100%',
});

const TodoItem = styled(ListItem)<{ completed: boolean }>(({ completed }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  margin: 10,
  borderRadius: 4,
  fontSize: 18,
  textDecoration: completed ? 'line-through' : 'none',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',

  '&:hover': {
    backgroundColor: '#f5f5f5',
  },

  '&:last-child': {
    marginBottom: 0,
  },
}));

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
    <Container>
      <TextField
        label="Add a new todo..."
        variant="outlined"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        sx={{ width: '100%', marginBottom: 2 }}
      />
      <Button variant="contained" onClick={addTodo}>
        Add Todo
      </Button>
      <TodoListContainer>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            onClick={() => toggleTodoCompletion(todo.id)}
            completed={todo.completed}
          >
            <Checkbox checked={todo.completed} disableRipple />
            <ListItemText primary={todo.text} />
          </TodoItem>
        ))}
      </TodoListContainer>
    </Container>
  );
}

export default TodoList;
