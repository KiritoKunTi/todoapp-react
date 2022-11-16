import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #ae66ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;
`;

const BoxContainer = styled.div`
  width: 400px;
  height: 550px;
  border-radius: 5px;
  padding: 25px;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
`;

function App() {
  const [todos, setTodos] = useState(["go workout", "go swing"]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("please print todo");
    }
  };

  const deleteTodo = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo !== todos[id];
    });
    setTodos(removeItem);
  };

  return (
    <>
      <AppWrapper>
        <BoxContainer>
          <Title>Todo App</Title>
          <form onSubmit={handleSubmit}>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></Input>
            {/* <Button>+</Button> */}
          </form>
          {todos.map((todo, id) => {
            return (
              <Todo key={id} deleteTodo={() => deleteTodo(id)}>
                {todo}
              </Todo>
            );
          })}
        </BoxContainer>
      </AppWrapper>
    </>
  );
}

export default App;
