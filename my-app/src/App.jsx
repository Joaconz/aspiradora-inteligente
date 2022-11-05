import "./App.css";
import CleanButton from "./components/CleanButton";
import Form from "./components/Form";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Tittle />
          <Form
            name={"tiempoEncendido"}
            descripcion={"Tiempo de limpieza"}
            medidaTiempo={"Tiempo en minutos"}
          />
          <Form
            name={"encendidoAutomaticohs"}
            descripcion={"Limpieza automatica"}
            medidaTiempo={"Tiempo en horas"}
          />
          <CleanButton />
        </div>
      </section>
    </div>
  );
}

export default App;
