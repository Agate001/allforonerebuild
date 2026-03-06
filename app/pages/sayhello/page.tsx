"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sayHello } from "@/app/Script/DataService";

const page = () => {
  const { push } = useRouter();

  const [name, setName] = useState("");
  const [greet, setGreet] = useState("Enter Your Name");

  async function fetchHello() {
    if (!name) {
      setGreet("Name is required.");
      return;
    }

    const data = await sayHello(name);

    setGreet(data);
    setName("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold pb-4">Say Hello</h1>
        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{greet}</h1>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 border p-2 rounded text-black"
            placeholder="Name"
          />

          <button
            type="button"
            onClick={fetchHello}
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