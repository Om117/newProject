import React from "react";
import Logo from "../images/SOFT_ID_LOGO.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Client, Account, ID } from "appwrite";
function SignupScreen() {
  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
          <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create A New account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="text"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter Name:
              </label>
              <div class="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address:
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password:
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="ConfPassword"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password:
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="ConfPassword"
                  name="ConfPassword"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Already Have an Account?
            <Link to="/login">
              <a
                href="#"
                class="createAccountLink font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Log In
              </a>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupScreen;
