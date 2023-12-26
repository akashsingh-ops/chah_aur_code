import React from "react";
import { Navbar, Button, Link } from "react";

export default function Header() {
  return (
    <div>
      <header className="shadow sticky z-50 top-0">
        <nav className=" bg-white border-gray-300 px-4 lg:px-6 py-2.5">
          <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <link to="/" className="flex items-center">
              <h1 className="mr-3 h-12 text-yellow-700 ">LOGO</h1>
            </link>
            <div className="flex items-right lg:order-2 ">
              <Link to="#"></Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
