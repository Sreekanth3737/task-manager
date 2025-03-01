import Button from "./components/atoms/Button/Button";

function App() {
  return (
    <>
      <Button
        variant="success"
        size="medium"
        onClick={() => console.log("clicked")}
        text="Add"
        type="button"
        disabled={false}
      />
    </>
  );
}

export default App;
