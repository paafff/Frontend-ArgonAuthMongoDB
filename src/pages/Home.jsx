import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex h-screen w-screen py-5  ">
      <div className="flex flex-col place-content-center space-y-8">
        <div className="flex place-content-center w-screen ">
          {/* <h1 className="text-5xl">hanya ada pilihan</h1> */}
          <p className="text-5xl">hanya ada pilihan dibawah ini</p>
        </div>
        <div className="flex place-content-center space-x-4">
          <Link to="/register">
            <button
              type="submit"
              className=" w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </Link>

          <Link to="/login">
            <button
              type="submit"
              className=" w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
