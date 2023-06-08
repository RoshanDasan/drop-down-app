import DropDown from "./component/DropDown";

function App() {
  return (
    <>
      <DropDown value={["Option 1", "Option 3"]} readonly={false} />
    </>
  );
}

export default App;
