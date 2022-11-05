import React from "react";
import { useState } from "react";
import { getDatabase, ref, child, update } from "firebase/database";
import { useEffect } from "react";

const Form = (props) => {
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  useEffect(() => {
    if (minutos !== 0 || horas !== 0) {
      cambioProps();
    }
  }, [minutos, horas]);

  const cambioProps = () => {
    const db = getDatabase();
    const newPostKey = child(ref(db), `${props.name}`).key;
    const updates = {};
    if (props.name === "tiempoEncendido") {
      updates[newPostKey] = parseInt(minutos);
      update(ref(db), updates)
        .then(() => console.log("cambiado"))
        .catch((error) => console.log(error));
    } else if (props.name === "encendidoAutomaticohs") {
      updates[newPostKey] = parseInt(horas);
      update(ref(db), updates)
        .then(() => console.log("cambiado"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="flex justify-center m-10">
      <div className="mb-1 xl:w-96">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            if (props.name === "tiempoEncendido") {
              if (ev.target.tiempoEncendido.value !== 0) {
                console.log(ev.target.tiempoEncendido.value);
                setMinutos(parseInt(ev.target.tiempoEncendido.value));
              }
            } else if (props.name === "encendidoAutomaticohs") {
              if (ev.target.encendidoAutomaticohs.value !== 0)
                setHoras(ev.target.encendidoAutomaticohs.value);
            }
          }}
        >
          <label
            htmlFor="exampleNumber0"
            className="form-label inline-block mb-2 text-gray-700"
          >
            {props.descripcion}
          </label>
          <div className="flex">
            <input
              name={props.name}
              type="number"
              autoComplete="off"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleNumber0"
              placeholder={props.medidaTiempo}
            />
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-3"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
