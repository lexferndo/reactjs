// import { useState } from "react";
import Button from "../components/elements/Button/Button";
import InputForm from "../components/elements/Input/index";
import { loginUser } from "../modules/fetch";

import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      await loginUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-green-600">Login</h1>
          <p className="mb-6 font-medium text-slate-500">
            Welcome, Please enter your account
          </p>

          <form onSubmit={handleSubmit}>
            <InputForm
              name="email"
              htmlFor="email"
              label="Email"
              type="text"
              placeholder="example@mail.com"
            />

            <InputForm
              name="password"
              htmlFor="password"
              label="Password"
              type="password"
              placeholder="********"
            ></InputForm>

            <Button style="w-full bg-green-500 text-white mb-3">Login</Button>
            <Link to="/register">
              <Button style="w-full text-green-500 outline outline-2">
                Register
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
