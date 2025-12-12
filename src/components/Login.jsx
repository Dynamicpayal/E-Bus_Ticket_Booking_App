import React from "react";
const Hero = () => {
  return (
    <>
      {" "}
      <div className="bg-[url('/your-background.png')] bg-cover bg-center text-sm text-gray-500">
        {" "}
        {/* ---------------- NAVBAR ---------------- */}{" "}
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 font-medium relative z-10 bg-white/80 backdrop-blur-md">
          {" "}
          {/* LOGO — Replace with your own SVG/Image */}{" "}
          <a href="/">
            {" "}
            <img
              src="/your-logo.png"
              alt="Your Logo"
              className="w-32 h-auto"
            />{" "}
          </a>{" "}
          {/* MOBILE MENU ICON */}{" "}
          <button
            id="menu-toggle"
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {" "}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M4 6h16M4 12h16M4 18h16" />{" "}
            </svg>{" "}
          </button>{" "}
          {/* NAV LINKS */}{" "}
          <ul
            id="nav-menu"
            className="hidden max-md:absolute top-full left-0 max-md:w-full md:flex md:items-center gap-8 max-md:bg-white max-md:shadow-md max-md:px-6 max-md:py-4 flex-col md:flex-row z-50"
          >
            {" "}
            <li>
              <a className="hover:text-indigo-500 transition" href="/">
                Home
              </a>
            </li>{" "}
            <li>
              <a className="hover:text-indigo-500 transition" href="/about">
                About
              </a>
            </li>{" "}
            <li>
              <a className="hover:text-indigo-500 transition" href="/services">
                Services
              </a>
            </li>{" "}
            <li>
              <a className="hover:text-indigo-500 transition" href="/contact">
                Contact
              </a>
            </li>{" "}
          </ul>{" "}
          {/* LOGIN BUTTON */}{" "}
          <button className="group hidden md:flex items-center gap-2">
            {" "}
            Log In{" "}
            <svg
              className="group-hover:translate-x-1 transition pt-0.5"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>{" "}
          </button>{" "}
        </nav>{" "}
        {/* ---------------- HERO SECTION ---------------- */}{" "}
        <div className="h-[580px] flex flex-col items-center justify-center px-4 text-center">
          {" "}
          {/* BADGE */}{" "}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 p-1 text-sm text-gray-800">
            {" "}
            <p>Your custom announcement here.</p>{" "}
            <div className="flex items-center cursor-pointer gap-2 bg-white border border-gray-500/30 rounded-2xl px-3 py-1">
              {" "}
              <p>Explore</p>{" "}
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </div>{" "}
          </div>{" "}
          {/* TITLE */}{" "}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">
            {" "}
            Your Custom Title / Headline Comes Here{" "}
          </h1>{" "}
          {/* SUBTITLE */}{" "}
          <p className="max-w-xl mt-6 px-4">
            {" "}
            Your custom description goes here. Explain your app / service /
            product in a clean and short way.{" "}
          </p>{" "}
          {/* BUTTONS */}{" "}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {" "}
            <button className="px-7 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
              {" "}
              Get Started{" "}
            </button>{" "}
            <button className="group px-7 py-2.5 flex items-center gap-2 font-medium">
              {" "}
              Learn More{" "}
              <svg
                className="group-hover:translate-x-1 transition pt-0.5"
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Hero;
