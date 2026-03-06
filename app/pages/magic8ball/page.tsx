"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Enter Your Question");

  async function fetchMagic() {
    if (!question) {
      alert("Question is required.");
      return;
    }

    const response = await fetch(
      `https://allforonecl-ffe6dbf2d7eaasdp.westus3-01.azurewebsites.net/api/Magic8Ball/get/${question}`
    );

    const data = await response.text();
    setAnswer(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">

        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{answer}</h1>

          <input
            required
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Question"
          />

          <button
            type="button"
            onClick={fetchMagic}
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