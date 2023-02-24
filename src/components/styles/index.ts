import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: white;
  background-color: #0077cc;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #005fa3;
  }
`;

export const TodoListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  &:hover {
    background-color: #f5f5f5;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
