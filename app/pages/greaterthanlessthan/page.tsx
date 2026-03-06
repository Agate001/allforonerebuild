"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("Greater Than Less Than");

  async function fetchGreaterLessThanSum() {
    if (number1 === "" || number2 === "") {
      alert("Both numbers are required.");
      return;
    }

    const response = await fetch(
    `https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net/api/GreaterThanLessThan/compare/${number1}/${number2}`    );

    const data = await response.text();
    setResult(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">

        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-2">{result}</h1>
          <h2 className="text-lg font-semibold mb-4">Enter Your Numbers</h2>

          <input
            required
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="num1"
          />

          <input
            required
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="num2"
          />

          <button
            type="button"
            onClick={fetchGreaterLessThanSum}
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