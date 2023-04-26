import Link from "next/link";
import React from "react";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 p-4 text-center fixed bottom-0 w-full left-0">
      <div className="font-bold">
        Direitos autorais © {anoAtual} Isaque Batista
      </div>
      <div>
        <Link
          href="/Contact"
          className="mr-4 text-gray-700 hover:text-gray-900"
        >
          Contato
        </Link>
        <Link
          href="/About"
          className="text-gray-700 hover:text-gray-900"
        >
          Sobre
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
