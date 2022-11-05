import { useEffect, useState } from "react";
import { getDatabase, ref, child, update, onValue } from "firebase/database";

export default function CleanButton() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "inicioRapido");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEnabled(data);
    });
  }, [enabled]);

  const cambioEstado = () => {
    const db = getDatabase();
    const newPostKey = child(ref(db), "inicioRapido").key;
    const updates = {};
    updates[newPostKey] = !enabled;
    update(ref(db), updates)
      .then(() => console.log("cambiado"))
      .catch((error) => console.log(error));
    setEnabled(!enabled);
  };

  return (
    <div className="relative flex flex-col items-center justify-center m-10 overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              cambioEstado();
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            QUICK START
          </span>
        </label>
      </div>
    </div>
  );
}
