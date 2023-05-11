import { useEffect, useState } from "react";
import AppInput from "./components/AppInput";
import Header from "./components/Header";
import RowBtn from "./components/RowBtn";
import List from "./components/List";
import { Container, Section, Wrapper } from "./styles/App.style";
import { Todo } from "./interface";

function App() {
  const [todos, setTodos] = useState<Todo[] | []>([
    { id: 1, title: "school games", isCompleted: true },
    { id: 2, title: "video games", isCompleted: false },
  ]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

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
  const handleAllClick = () => {
    console.log("All tasks");
  };
  const handleActiveClick = () => {
    console.log("all Active tasks");
  };
  const handleCompletedClick = () => {
    console.log("all completed tasks");
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
          handleAllClick={() => handleAllClick()}
          handleActiveClick={handleActiveClick}
          handleCompletedClick={handleCompletedClick}
        />
        <Section>
          <List
            todos={todos}
            handleCheckChange={handleCheckChange}
            handlerDelete={handlerDelete}
          />
        </Section>
      </Wrapper>
    </Container>
  );
}

export default App;
