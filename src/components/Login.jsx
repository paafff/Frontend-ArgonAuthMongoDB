import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [uuid, setUuid] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
        role: role,
        uuid: uuid,
      });
      setUser(response.data);
      console.log("sukses login");
      console.log(response.data);
      alert("anda berhasil melakukan login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  const logoutUser = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      setUser(null);
      alert("sukses logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center py-5 ">
        {user ? (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Informasi Data User
              {/* anggap saja dashboard */}
            </h5>
            <div>
              <p>Selamat Datang {user.name} </p>
              <p>Email : {user.email} </p>
              <p>Role : {user.role} </p>
              <p>UUID : {user.uuid} </p>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-5 text-xl font-medium text-gray-900 dark:text-white">
              Form Login User
            </h5>
            <form className="space-y-2" onSubmit={loginUser}>
              <div>
                <label className=" mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@email.com"
                  required
                />
              </div>

              <div>
                <label className=" mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex pt-5">
                <button
                  type="submit"
                  className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
