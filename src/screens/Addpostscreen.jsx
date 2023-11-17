import { React, useState } from "react";

import Nav from "../components/Nav";
import { client, account, databases } from "../appwrite/appwriteAuth";
import { ID } from "appwrite";

import config from "../Config/Config";

function Addpostscreen() {
  const [profile, setprofile] = useState();
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [number, setnumber] = useState();
  const [designation, setdesignation] = useState();
  const [email, setemail] = useState();
  async function addpost(e) {
    e.preventDefault();

    try {
      const result = await databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          profile,
          name,
          age,
          number,
          designation,
          email,
        }
      );
      console.log("post added successfully:", result);
    } catch (error) {
      console.log("Error:: Addpost Error---", error);
    }

    setname("");
    setage("");
    setemail("");
    setdesignation("");
    setnumber("");
    setprofile("");
  }
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <form onSubmit={addpost}>
          <div>
            <label
              htmlFor="profile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile URL
            </label>
            <input
              type="url"
              id="profile"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="paste your profile url"
              value={profile}
              onChange={(e) => setprofile(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="10 Digit Phone Number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Designation"
              value={designation}
              onChange={(e) => setdesignation(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Addpostscreen;
