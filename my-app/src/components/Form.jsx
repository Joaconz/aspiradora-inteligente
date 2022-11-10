import React from "react";
import { useState, useEffect } from "react";
import { getDatabase, ref, child, update } from "firebase/database";

const Form = () => {
  const [minutos, setMinutos] = useState(0);

  useEffect(() => {
    if (minutos != 0 ) {
      cambioProps();
    }
  }, [minutos]);

  const cambioProps = () => {
    const db = getDatabase();
    const newPostKey = child(ref(db), 'tiempoEncendido').key;
    const updates = {};
      updates[newPostKey] = parseInt(minutos);
      update(ref(db), updates)
        .then(() => console.log("cambiado"))
        .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center mt-3">
      <div className="mb-1 xl:w-96">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            if (ev.target.tiempoEncendido.value != 0) {
              //console.log(ev.target.tiempoEncendido.value);
              setMinutos(parseInt(ev.target.tiempoEncendido.value));
            }
          }}
        >
          <div className="flex">
            <input
              name='tiempoEncendido'
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
              placeholder='Tiempo en minutos'
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
