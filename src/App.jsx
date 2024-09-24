import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Calculator />
      </div>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
