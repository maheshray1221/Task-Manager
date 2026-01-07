import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(true);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-14 h-7 rounded-full relative transition
        ${on ? "bg-purple-600" : "bg-gray-300"}`}
    >
      <span
        className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition
          ${on ? "translate-x-0.5" : "-translate-x-6.5"}`}
      />
    </button>
  );
}
