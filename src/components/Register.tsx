import React from "react";
import NavBar from "../layout/NavBar";

export type IRegisterData = {
  username: string;
  email: string;
  password: string;
};
const Register = () => {
  const [values, setValues] = React.useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ values });
  };

  const handleInput =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
    };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="flex justify-center py-10 text-[12px]">
          <div className="border rounded-md shadow-inherit px-5 py-5 w-[20rem] h-auto bg-gray-100 mt-10">
            <h4 className="text-center text-xl font-bold">Sign Up</h4>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col pt-3">
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleInput("username")}
                  className="border px-3 rounded-md py-1 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col pt-3">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleInput("email")}
                  className="border px-3 rounded-md py-1 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col pt-3">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleInput("password")}
                  className="border px-3 rounded-md py-1 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center pt-3">
                <button
                  className="text-[12px] border px-3 rounded-md py-1 text-white bg-gray-600 w-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
