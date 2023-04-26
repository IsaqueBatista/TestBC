import React, { useEffect, useState } from "react";
import { fetchUserData } from "../components/Api";
import Footer from "../components/Footer";

const Main = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);

  return (
    <div className="mb-0 w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
          <h1 className="py-4 text-[#7D8635]">{programs.name}</h1>
          <h2 className="py-4 text-gray-700">
            Olá, seja muito <span className="text-[#074552]">bem-vindo(a)</span>
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {programs.description}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
