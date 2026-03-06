"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  let [name, setName] = useState("");
  let [adjective, setAdjective] = useState("");
  let [noun, setNoun] = useState("");
  let [verb, setVerb] = useState("");
  const [story, setStory] = useState("Enter Your Answers");

  async function fetchMadLib() {
    if (!name || !adjective || !noun || !verb) {
      setStory("All fields are required.");
      return;
    }

    const response = await fetch(
      `https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net/MadLib/get/${name}/${adjective}/${noun}/${verb}`
    );

    const data = await response.text();
    setStory(data);
    setName("");
    setAdjective("");
    setNoun("");
    setVerb("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold pb-4">Madlib</h1>
        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{story}</h1>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Name"
          />

          <input
            type="text"
            value={adjective}
            onChange={(e) => setAdjective(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="adjective"
          />

          <input
            type="text"
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="noun"
          />

          <input
            type="text"
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="verb"
          />

          <button
            type="button"
            onClick={fetchMadLib}
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