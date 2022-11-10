import "./App.css";
import CleanButton from "./components/CleanButton";
import Form from "./components/Form";
import { TimePicker } from "./components/TimePicker";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Tittle />
          <label
            htmlFor="exampleNumber0"
            className="form-label inline-block text-gray-700"
          >
            Funcionamiento automatico
          </label>
          <TimePicker/>
          <label
            htmlFor="exampleNumber0"
            className="form-label inline-block mt-5 text-gray-700"
          >
            Tiempo de limpieza
          </label>
          <Form/>
          <CleanButton />
        </div>
      </section>
    </div>
  );
}

export default App;
