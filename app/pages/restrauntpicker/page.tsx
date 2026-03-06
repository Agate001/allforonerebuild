"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { restaurantPick } from "@/app/Script/DataService";

const page = () => {
  const { push } = useRouter();

  const [category, setCategory] = useState("fastfood");
  const [choice, setChoice] = useState("Select your category");

  async function fetchRestaurantPick() {
    const data = await restaurantPick(category);

    setChoice(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(/Assets/background.jpg)]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold pb-4">Restraunt</h1>
        <h1 className="text-5xl font-extrabold pb-4">Picker</h1>

        {/* Home Button */}
        <button
          onClick={() => push("/")}
          className="mb-4 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 hover:text-blue-700"
        >
          Home
        </button>

        {/* Card */}
        <section className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded">
          <h1 className="text-2xl font-bold mb-4">{choice}</h1>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white mb-4 border p-2 rounded text-black"
          >
            <option value="fastfood">fastfood</option>
            <option value="pizza">pizza</option>
            <option value="myfavorites">myfavorites</option>
          </select>

          <button
            type="button"
            onClick={fetchRestaurantPick}
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