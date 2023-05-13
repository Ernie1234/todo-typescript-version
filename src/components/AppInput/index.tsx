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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button type="submit" className="btn__add-task">
        add task
      </button>
      {/* <Button
        btnType="submit"
        btnText="Button"
        variant="contained"
        margin
        onClick={() => handleAddClick()}
      /> */}
    </AppForm>
  );
}

export default index;
