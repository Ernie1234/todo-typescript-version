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
  length: number | null;
}

export default function index({
  todos,
  handleCheckChange,
  handlerDelete,
  handleClr,
  length,
}: Props) {
  return (
    <div>
      <ListHeaderStyle>
        <Title>
          {(length = [] ? 0 : length)} task{todos.length > 1 ? "s" : ""}{" "}
          remaining
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
