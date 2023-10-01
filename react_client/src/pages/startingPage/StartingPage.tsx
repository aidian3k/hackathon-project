import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import "../../index.css";
import { useState } from "react";
import LoginModal from "./login/LoginModal";
import RegisterModal from "./register/RegisterModal";
import WhyUsComponent from "./whyUsComponent/whyUsComponent";
import { FC } from "react";

export const StartingPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1380&t=st=1696125628~exp=1696126228~hmac=a681f5245651df7717580a75da77fdc13b000747e28bdbeba232e1dd6ed7c7b4")', // Replace with your image URL
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StartingPageNavbar></StartingPageNavbar>

      <div className="h-full overflow-hidden flex items-center justify-center">
        <WhyUsComponent openRegisterModal={openRegisterModal} />
      </div>

      <RegisterModal open={showRegisterModal} onClose={closeRegisterModal} />
      <Footer />
    </div>
  );
};


export const StartingPageNavbar: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/dashboard" className="flex items-center gap-2">
          <img
            src={"https://www.svgrepo.com/show/299015/dolphin.svg"}
            style={{ width: "30px", height: "30px" }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Healthiness Dolphin
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <button
                className={
                  "rounded-xl bg-blue-500 px-2 py-1 transition-all hover:scale-105"
                }
                onClick={openLoginModal}
              >
                <p className={"text-lg font-sans font-semibold text-white"}>
                  Login
                </p>
              </button>
            </li>
            <li>
              <button
                className={
                  "rounded-xl bg-blue-500 px-2 py-1 transition-all hover:scale-105"
                }
                onClick={openRegisterModal}
              >
                <p className={"text-lg font-sans font-semibold text-white"}>
                  Register
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <LoginModal open={showLoginModal} onClose={closeLoginModal} />
      <RegisterModal open={showRegisterModal} onClose={closeRegisterModal} />
    </nav>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 w-full mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 gap-2">
            <img
              src={"https://www.svgrepo.com/show/299015/dolphin.svg"}
              style={{ width: "30px", height: "30px" }}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Healthiness Dolphin
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className={"hover:underline"}>Healthiness Dolphin™</a>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};