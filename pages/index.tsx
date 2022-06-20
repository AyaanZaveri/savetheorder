import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const styles = {
  card: "grid h-36 w-64 place-items-center rounded-xl border border-slate-200 shadow-xl shadow-slate-50 active:ring ring-slate-200 active:border-slate-400 transition duration-500 ease-in-out hover:cursor-pointer hover:border-slate-300 hover:shadow-slate-100",
};

const Home: NextPage = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <input
        type="text"
        className="w-1/3 rounded-lg border border-slate-200 px-4 py-2 shadow-xl shadow-slate-50 outline-none ring-slate-200 transition duration-500 ease-in-out hover:border-slate-300 hover:shadow-slate-100 focus:ring focus:border-slate-400 active:ring active:bg-slate-100"
      />
      <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-3">
        <div className={styles.card}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/subway-13.svg"
            alt=""
            className="h-32 p-5"
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/pizza-hut-4.svg"
            alt=""
            className="h-32 bg-transparent p-5"
          />
        </div>
        <div className={styles.card}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/popeyes-louisiana-kitchen-1.svg"
            alt=""
            className="h-32 bg-transparent p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
