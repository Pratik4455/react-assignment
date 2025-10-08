import react from "react";
import FuncComp from "./Assignment/FuncComp";
import ClassCompo from "./Assignment/ClassCompo";
import Props from "./Assignment/Props";
import MainProps from "./Assignment/MainProps";
import Counter from "./Assignment/Counter";
import Text from "./Assignment/Text";
import Form from "./Assignment/Form";

function App() {
  return (
    <div className="App">
      <FuncComp />
      <ClassCompo />
      {/* <MainProps /> */}
      <Counter />
      <Text />
      <Form />
    </div>
  );
}

export default App;
