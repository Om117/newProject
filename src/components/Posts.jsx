import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { client, account, databases } from "../appwrite/appwriteAuth";
import { ID } from "appwrite";
import config from "../Config/Config";

function Posts() {
  const [postData, setpostData] = useState([]);

  async function getPost() {
    try {
      const result = await databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        []
      );

      console.log("post got successfully:", result);
      setpostData(result.documents);
    } catch (error) {
      console.log("Error:: Getting Post Error----", error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8  flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData.map((document) => (
            <div
              key={document.$id}
              className="flex flex-col justify-between text-gray-700 bg-white shadow-md rounded-xl bg-clip-border overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={`${document.profile}`}
                  alt="profile-picture"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900">
                  {document.name}
                </h4>
                <p className="mb-2 text-sm bg-clip-text">
                  Age : {document.age}
                </p>
                <p className="mb-2 text-sm bg-clip-text">
                  Phone : +91 {document.number}
                </p>
                <p className="mb-2 text-sm bg-clip-text">
                  {document.designation}
                </p>
                <p className="text-sm bg-clip-text">{document.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
