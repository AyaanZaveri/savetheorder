import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiPlus, HiSearch, HiOutlineCreditCard } from "react-icons/hi";
var Vibrant = require('node-vibrant')

const styles = {
  card: "flex h-36 w-72 items-center justify-center rounded-xl border border-slate-200 shadow-xl shadow-slate-50 ring-slate-200 focus:ring focus:border-slate-400 active:bg-slate-100 outline-none transition duration-500 ease-in-out hover:cursor-pointer hover:border-slate-300 hover:shadow-slate-100",
};

const Home: NextPage = () => {

  const [pal, setPal] = useState()

  Vibrant.from('https://cdn.worldvectorlogo.com/logos/subway-13.svg').getPalette((err, palette) => setPal(palette))

  const [search, setSearch] = useState("");
  const [restaurants, setRestuarants] = useState([
    {
      restaurant: "Subway",
      slug: "subway",
      logo: "https://cdn.worldvectorlogo.com/logos/subway-13.svg",
    },
    {
      restaurant: "Pizza Hut",
      slug: "pizzahut",
      logo: "https://www.logo.wine/a/logo/Pizza_Hut/Pizza_Hut-Logo.wine.svg",
    },
    {
      restaurant: "Popeyes",
      slug: "popeyes",
      logo: "https://cdn.worldvectorlogo.com/logos/popeyes-louisiana-kitchen-1.svg",
    },
    {
      restaurant: "Burger King",
      slug: "burgerking",
      logo: "https://cdn.worldvectorlogo.com/logos/burger-king-9.svg",
    },
    {
      restaurant: "McDonald's",
      slug: "mcdonalds",
      logo: "https://www.logo.wine/a/logo/McDonald's/McDonald's-Logo.wine.svg",
    },
    {
      restaurant: "Tim Hortons",
      slug: "timhortons",
      logo: "https://cdn.worldvectorlogo.com/logos/tim-hortons-logo.svg",
    },
    {
      restaurant: "Starbucks",
      slug: "starbucks",
      logo: "https://cdn.worldvectorlogo.com/logos/starbucks.svg",
    },
    {
      restaurant: "Taco Bell",
      slug: "tacobell",
      logo: "https://cdn.worldvectorlogo.com/logos/taco-bell-6.svg",
    },
  ]);

  const router = useRouter();

  return (
    <div className="mt-12 flex flex-col items-center justify-center font-['Inter']">
      <div className="flex w-full items-center justify-center gap-3">
        <div className="relative inline-flex w-1/2 items-center justify-center">
          <HiSearch className="pointer-events-none relative left-8 transform text-slate-500" />
          <input
            type="text"
            className="w-full rounded-xl border border-slate-200 px-4 py-2 pl-10 text-slate-500 shadow-xl shadow-slate-50 outline-none ring-slate-200 transition duration-500 ease-in-out hover:border-slate-300 hover:shadow-slate-100 focus:border-slate-400 focus:ring active:bg-slate-100 active:ring"
            placeholder="Search your restaurants..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 py-2 px-4 text-slate-500 shadow-xl shadow-slate-50 outline-none ring-slate-200 transition duration-500 ease-in-out hover:border-slate-300 hover:shadow-slate-100 focus:border-slate-400 focus:ring active:bg-slate-100 active:ring">
          Add Card <HiPlus className="h-4 w-4" />
        </button>
      </div>

      <div>{}</div>

      <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-3">
        {restaurants
          .filter((restaurant) =>
            restaurant.restaurant
              .toLowerCase()
              .includes(search.trim().toLowerCase())
          )
          .map((restaurant) => (
            <button
              className={styles.card}
              onClick={() => router.push(`/restaurant/${restaurant.slug}`)}
            >
              <div className="flex w-2/3 items-center justify-center"  style={{
                backgroundColor: `rgb(${pal?.Vibrant?.rgb[0]},${pal?.Vibrant?.rgb[1]},${pal?.Vibrant?.rgb[2]})`
              }}>
                <img
                  src={restaurant.logo}
                  alt=""
                  className="pointer-events-none h-32 p-3 "
                  style={{
                    filter: "brightness(0) invert(1)"
                  }}
                />
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Home;
