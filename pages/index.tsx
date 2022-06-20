import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

const styles = {
  card: "flex h-36 w-72 items-center justify-center rounded-xl border border-slate-200 shadow-xl shadow-slate-50 ring-slate-200 focus:ring focus:border-slate-400 active:bg-slate-100 outline-none transition duration-500 ease-in-out hover:cursor-pointer hover:border-slate-300 hover:shadow-slate-100",
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [restaurants, setRestuarants] = useState([
    {
      restaurant: "Subway",
      logo: "https://cdn.worldvectorlogo.com/logos/subway-13.svg",
    },
    {
      restaurant: "Pizza Hut",
      logo: "https://www.logo.wine/a/logo/Pizza_Hut/Pizza_Hut-Logo.wine.svg",
    },
    {
      restaurant: "Popeyes",
      logo: "https://cdn.worldvectorlogo.com/logos/popeyes-louisiana-kitchen-1.svg",
    },
    {
      restaurant: "Burger King",
      logo: "https://cdn.worldvectorlogo.com/logos/burger-king-9.svg",
    },
    {
      restaurant: "McDonald's",
      logo: "https://www.logo.wine/a/logo/McDonald's/McDonald's-Logo.wine.svg",
    },
    {
      restaurant: "Tim Hortons's",
      logo: "https://cdn.worldvectorlogo.com/logos/tim-hortons-logo.svg",
    },
    {
      restaurant: "Starbucks",
      logo: "https://cdn.worldvectorlogo.com/logos/starbucks.svg",
    },
    {
      restaurant: "Taco Bell",
      logo: "https://cdn.worldvectorlogo.com/logos/taco-bell-6.svg",
    },
  ]);

  return (
    <div className="mt-12 flex flex-col items-center justify-center font-['Inter']">
      <div className="relative inline-flex w-full items-center justify-center">
        <HiSearch className="pointer-events-none relative left-8 h-4 w-4 transform text-slate-500" />
        <input
          type="text"
          className="w-1/3 rounded-xl border border-slate-200 px-4 py-2 pl-10 text-slate-500 shadow-xl shadow-slate-50 outline-none ring-slate-200 transition duration-500 ease-in-out hover:border-slate-300 hover:shadow-slate-100 focus:border-slate-400 focus:ring active:bg-slate-100 active:ring"
          placeholder="Search your restaurants..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-12 flex w-9/12 flex-row flex-wrap items-center justify-center gap-3">
        {restaurants
          .filter((restaurant) =>
            restaurant.restaurant.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((restaurant) => (
            <button className={styles.card}>
              <div className="w-2/3 flex items-center justify-center">
                <img
                  src={restaurant.logo}
                  alt=""
                  className="pointer-events-none h-32 p-4"
                />
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Home;
