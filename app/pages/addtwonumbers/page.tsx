"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("Enter Your Numbers");

  async function fetchSum() {
    if (num1 === "" || num2 === "") {
      alert("Both numbers are required.");
      return;
    }

    const response = await fetch(
      `https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net/api/AddTwoNumbers/get/${num1}/${num2}`,
    );

    const data = await response.text();
    setSum(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{sum}</h1>

          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Num1"
          />

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Num2"
          />

          <button
            type="button"
            onClick={fetchSum}
            className="px-6 py-3.5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Enter
          </button>
        </section>
      </div>
    </div>
  );
};

export default page;
