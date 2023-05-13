import React from "react";
import { ListHeaderStyle, TextClrStyle } from "./List.style";
import { Title } from "../../styles";
import ListItem from "../ListItem";
import { Todo } from "../../interface/";

interface Props {
  todos: Todo[] | [];
  handleCheckChange: (id: number) => void;
  handlerDelete: (id: number) => void;
  handleClr: () => void;
  length: number;
}

export default function index({
  todos,
  handleCheckChange,
  handlerDelete,
  handleClr,
  length,
}: Props) {
  console.log(length);
  return (
    <div>
      <ListHeaderStyle>
        <Title>
          {(length = [] ? 0 : length)} task{length > 1 ? "s" : ""} remaining
        </Title>
        <TextClrStyle onClick={handleClr}>Clear All</TextClrStyle>
      </ListHeaderStyle>
      <ListItem
        todos={todos}
        handleCheckChange={handleCheckChange}
        handlerDelete={handlerDelete}
      />
    </div>
  );
}
