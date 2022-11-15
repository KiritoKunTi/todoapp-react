import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

const ItemBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

const ItemText = styled.p`
  margin-left: 7px;
`;

const DeleteButton = styled.p`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const Todo = ({ children }) => {
  return (
    <ItemBox>
      <input type="checkbox" />
      <ItemText>{children}</ItemText>
      <DeleteButton>
        <RiDeleteBin6Line size={20} />
      </DeleteButton>
    </ItemBox>
  );
};

export default Todo;
