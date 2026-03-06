"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { reverseWord } from "@/app/Script/DataService";

const page = () => {
  const { push } = useRouter();

  const [word, setWord] = useState("");
  const [result, setResult] = useState("Enter Your Word");

  async function fetchReverseString() {
    if (!word) {
      setResult("Word is required.");
      return;
    }

    const data = await reverseWord(word);

    setResult(data);
    setWord("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold pb-4">Reverse It </h1>
        <h1 className="text-5xl font-extrabold pb-4">(String)</h1>

        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{result}</h1>

          <input
            required
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Word"
          />

          <button
            type="button"
            onClick={fetchReverseString}
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