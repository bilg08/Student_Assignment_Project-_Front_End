import axios from "axios";
import { getCookie } from "cookies-next";
import React, { ReactNode } from "react";
import { useLoaderContext } from "../context";
import { Header, Footer, Modal, Shadow, Loader } from "./index";
export const instance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: { Authorization: getCookie("token") },
});
export const LayOut = (props: { children: ReactNode }) => {
  const { setOpenLoader, setOpenshadow, loader, shadow } = useLoaderContext();
  axios.interceptors.request.use(
    function (config) {
      setOpenLoader(true);
      setOpenshadow(true);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      setOpenLoader(false);
      setOpenshadow(false);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return (
    <div className="h-[100vh] w-full">
      <Modal />
      <Header />
      {props.children}
      <Shadow/>
      <Loader />
      <Footer />
    </div>
  );
};
