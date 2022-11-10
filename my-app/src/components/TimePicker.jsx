import React from "react";
import { useState, useEffect } from "react";
import { getDatabase, ref, child, update } from "firebase/database";

export const TimePicker = () => {
  const [horas, setHoras] = useState("");
  const [minutos, setMinutos] = useState("");

  useEffect(() => {
    if (horas != "" || minutos != "") {
      cambioProps();
    }
  }, [horas, minutos]);

  const cambioProps = () => {
    const postData = {
      horas: horas,
      minutos: minutos,
    };

    const db = getDatabase();
    const newPostKey = child(ref(db), "funcionamientoAutomatico").key;
    const updates = {};
    updates[newPostKey] = postData;
    update(ref(db), updates)
      .then(() => console.log("cambiado"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center mt-2 mb-5">
      <div className="mb-1 xl:w-96">
        <select
          name="hours"
          className="bg-transparent text-xl appearance-none outline-none"
          value={horas}
          onChange={(event) => setHoras(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">10</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
        <span className="text-xl mr-3">:</span>
        <select
          name="minutes"
          className="bg-transparent text-xl appearance-none outline-none mr-4"
          value={minutos}
          onChange={(event) => setMinutos(event.target.value)}
        >
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
    </div>
  );
};
