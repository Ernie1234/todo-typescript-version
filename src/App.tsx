import { useEffect, useState } from "react";
import AppInput from "./components/AppInput";
import Header from "./components/Header";
import RowBtn from "./components/RowBtn";
import List from "./components/List";
import { Container, Section, Wrapper } from "./styles/App.style";
import { Todo } from "./interface";

function App() {
  const [todos, setTodos] = useState<Todo[] | []>((): Todo[] | [] => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [input, setInput] = useState<string>("");
  // STATES TO TRACK THE ROW BTN TOGGLING
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [activedTask, setActivedTask] = useState<Todo[] | []>([]);
  const [complete, setComplete] = useState(false);
  const [completedTask, setCompletedTask] = useState<Todo[] | []>([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  let length: number;
  length = todos.length;
  //FINDING ALL THE UNCOMPLETED TASK
  const remainingTask = (): Todo[] | [] => {
    return todos.filter((item) => item.isCompleted === false);
  };
  //HANDLE ALL CLICK
  const handleALL = (): void => {
    setAll(true);
    setComplete(false);
    setActive(false);
    const arr = remainingTask();
    length = arr.length;
  };
  //HANDLE ACTIVE CLICK
  const handleActive = (): void => {
    setAll(false);
    setComplete(false);
    setActive(true);
    const arr = todos.filter((item) => {
      return item.isCompleted === false;
    });
    setActivedTask(arr);
    length = arr.length;
  };
  //HANDLE COMPLETE CLICK
  const handleComplete = (): void => {
    setAll(false);
    setActive(false);
    setComplete(true);
    const arr = todos.filter((item) => {
      return item.isCompleted === true;
    });
    setCompletedTask(arr);
    length = arr.length;
  };
  //HANDLE CLEAR-ALL FUNCTION
  const handleClr = (): void => {
    localStorage.clear();
    setTodos([]);
    length = todos.length;
  };

  //RANDOM NUMBER GENERATOR FOR ID
  const randNum = () => {
    return Math.floor(Math.random() * 999999999999999);
  };
  //INPUT SUBMIT HANDLER
  const handleAddClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (input === "" || null) return;
    setTodos([...todos, { id: randNum(), title: input, isCompleted: false }]);
    setInput("");
  };

  //DELETE FUNCTION
  const handlerDelete = (id: number) => {
    setTodos(todos.filter((item: Todo) => item.id !== id));
  };

  //COMPLETE FUNCTION
  const handleCheckChange = (id: number) => {
    const newAr = todos.map((item) => {
      return item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item;
    });
    setTodos(newAr);
  };

  return (
    <Container>
      <Wrapper>
        <Header />
        <AppInput
          handleAddClick={() => handleAddClick}
          input={input}
          setInput={setInput}
        />
        <RowBtn
          handleALL={() => handleALL()}
          handleActive={handleActive}
          handleComplete={handleComplete}
        />
        <Section>
          {all && (
            <List
              todos={todos}
              handleCheckChange={handleCheckChange}
              handlerDelete={handlerDelete}
              handleClr={handleClr}
              length={length}
            />
          )}
          {active && (
            <List
              todos={activedTask}
              handleCheckChange={handleCheckChange}
              handlerDelete={handlerDelete}
              handleClr={handleClr}
              length={length}
            />
          )}
          {complete && (
            <List
              todos={completedTask}
              handleCheckChange={handleCheckChange}
              handlerDelete={handlerDelete}
              handleClr={handleClr}
              length={length}
            />
          )}
        </Section>
      </Wrapper>
    </Container>
  );
}

export default App;
