import axios from "axios";
import { getCookie } from "cookies-next";
import React, { ReactNode, useEffect } from "react";
import { useLoaderContext } from "../context";
import { Props } from "../types";
import { Header, Footer, Modal, Shadow, Loader } from "./index";
export const instance = axios.create({
  baseURL: "https://student-assignment-project-front-end.vercel.app/",
  headers: { Authorization: getCookie("token") },
});
export const LayOut = (props: { children: ReactNode }) => {
  const { setOpenLoader, setOpenshadow, loader, shadow } = useLoaderContext();
  useEffect(() => console.log({ loader, shadow }), [loader, shadow]);
  axios.interceptors.request.use(
    function (config) {
      console.log(config)
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
      console.log(response)
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
