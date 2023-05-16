import { AppInput, AppForm } from "./Index.styled";
// import Button from "../Button";

type Props = {
  handleAddClick: Function;
  setInput: Function;
  input: string;
};
function index({ handleAddClick, input, setInput }: Props) {
  return (
    <AppForm onSubmit={() => handleAddClick()}>
      <AppInput
        value={input}
        type="text"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button type="submit" className="btn__add-task">
        add task
      </button>
    </AppForm>
  );
}

export default index;
