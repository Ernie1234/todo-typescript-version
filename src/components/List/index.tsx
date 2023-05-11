import React from "react";
import { ListHeaderStyle, TextClrStyle } from "./List.style";
import { Title } from "../../styles";
import ListItem from "../ListItem";
import { Todo } from "../../interface/";

interface Props {
  todos: Todo[] | [];
  handleCheckChange: (id: number) => void;
  handlerDelete: (id: number) => void;
}

export default function index({
  todos,
  handleCheckChange,
  handlerDelete,
}: Props) {
  return (
    <div>
      <ListHeaderStyle>
        <Title>0 task remaining</Title>
        <TextClrStyle>Clear All</TextClrStyle>
      </ListHeaderStyle>
      <ListItem
        todos={todos}
        handleCheckChange={handleCheckChange}
        handlerDelete={handlerDelete}
      />
    </div>
  );
}
