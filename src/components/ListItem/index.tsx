import React from "react";
import {
  IFRstyle,
  ISRstyle,
  ItemInputStyle,
  LabelStyle,
  ListItemStyle,
} from "./ListItem.style";
import Button from "../Button";
import { Todo } from "../../interface";

interface Props {
  todos: Todo[] | [];
  handleCheckChange: (id: number) => void;
  handlerDelete: (id: number) => void;
}

const ListItem = ({ todos, handleCheckChange, handlerDelete }: Props) => {
  return (
    <div>
      {todos.map(
        (todo: Todo): JSX.Element => (
          <ListItemStyle key={todo.id}>
            <IFRstyle>
              <ItemInputStyle
                type="checkbox"
                id="task"
                name="task"
                value="newsletter"
                className="task-check"
                checked={todo.isCompleted}
                onChange={() => handleCheckChange(todo.id)}
              />
              <LabelStyle htmlFor="task">{todo.title}</LabelStyle>
            </IFRstyle>
            <ISRstyle>
              <Button
                btnType="button"
                variant="outlined"
                btnText="Edit"
                onClick={() => console.log("first")}
              />
              <Button
                btnType="button"
                variant="contained"
                btnText="Delete"
                onClick={() => handlerDelete(todo.id)}
              />
            </ISRstyle>
          </ListItemStyle>
        )
      )}
    </div>
  );
};

export default ListItem;

//  let element: JSX.Element[] = todos.map((todo: Todo) => (
//  <ListItemStyle key={todo.id}>
//    <IFRstyle>
//      <ItemInputStyle
//        type="checkbox"
//        id="task"
//        name="task"
//        value="newsletter"
//        className="task-check"
//        checked={todo.isCompleted}
//        //   onChange={() => handleCheckChange(item)}
//      />
//      <LabelStyle htmlFor="task">{todo.title}</LabelStyle>
//    </IFRstyle>
//    <ISRstyle>
//      <Button
//        btnType="button"
//        variant="outlined"
//        btnText="Edit"
//        onClick={() => console.log("first")}
//      />
//      <Button
//        btnType="button"
//        variant="contained"
//        btnText="Delete"
//        onClick={() => console.log("first")}
//      />
//    </ISRstyle>
//  </ListItemStyle>
//  ));
