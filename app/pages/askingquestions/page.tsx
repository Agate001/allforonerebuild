"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [answer, setAnswer] = useState("Enter Your Answers");

  async function fetchAnswer() {
    if (question1 === "" || question2 === "") {
      setAnswer("Both answers are required.");
      return;
    }

    const response = await fetch(
      `https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net/api/AskingQuestion/get/${question1}/${question2}`
    );

    const data = await response.text();
    setAnswer(data);
    setQuestion1("")
    setQuestion2("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">

        <h1 className="text-5xl font-extrabold pb-4">Asking</h1>
        <h1 className="text-5xl font-extrabold pb-4">Questions</h1>

        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{answer}</h1>

          <input
            type="text"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Name"
          />

          <input
            type="text"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Favorite book"
          />

          <button
            type="button"
            onClick={fetchAnswer}
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