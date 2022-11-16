import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

const ItemBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  margin-top: 5px;
  background-color: ${(props) => (props.completed ? "#6abea7" : "#ccc")};
`;

const ItemText = styled.p`
  margin-left: 7px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteButton = styled.p`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const Todo = ({ children, deleteTodo }) => {
  const [done, setDone] = useState(false);

  return (
    <ItemBox completed={done}>
      {done ? (
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
      ) : (
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
      )}
      <ItemText completed={done}>{children}</ItemText>
      <DeleteButton>
        <RiDeleteBin6Line onClick={deleteTodo} size={20} />
      </DeleteButton>
    </ItemBox>
  );
};

export default Todo;
