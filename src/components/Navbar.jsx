import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "../../public/assets/navLogo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";
import { fetchUserData } from "../components/Api";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/loginNext" ||
      router.asPath === "/travel" ||
      router.asPath === "/hamburgueria" ||
      router.asPath === "/converter"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="200"
            // width='125'
            height="50"
          />
        </Link>

        <div className="mr-5">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex gap-2"
          >
            <Link href="/">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                Sobre
              </li>
            </Link>
            <Link href="/Projects">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                Projetos
              </li>
            </Link>
            <Link href="/Contact">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                Contato
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-400%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/navLogo.png"
                  width="150"
                  height="25"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
            <h2 className="py-4 flex justify-center text-[#7D8635]">
                {programs.name}
              </h2>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/About">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Sobre
                </li>
              </Link>
              <Link href="/Projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projetos
                </li>
              </Link>
              <Link href="/Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contato
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Entre em contato
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/isaque-batista-de-oliveira-a3b619236/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://github.com/IsaqueBatista"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
                  >
                    <FaGithub />
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=5534992225485&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Isaque%2C%20seja%20bem-vindo!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
                  >
                    <FaWhatsapp />
                  </div>
                </a>

                <Link href="/Contact">
                  <div onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
