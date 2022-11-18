import { useCollectionContext } from "../../context/isActive";
import axios, { Axios } from "axios";
import { useState } from "react";
import { Shadow } from "../Shadow";
import React from "react";
import { MyImage } from "../index";
import { arrayBuffer, json } from "stream/consumers";
import { getCookie } from "cookies-next";
import { useIsAgainGetDatas } from "../../context";
export interface PostModalProps {
  cActive: any;
  setCactive: any;
}

export const PostModal: React.FC<PostModalProps> = ({
  cActive,
  setCactive,
}) => {
  const [fileSelected, setFileSelected] = useState<any | null>([]);
  const [createObjectURL, setCreateObjectURL] = useState<any | null>(null);
  const {setIsAgainGetDatas} = useIsAgainGetDatas()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsAgainGetDatas(true)
    event.preventDefault();

    const formDatas = new FormData();
    formDatas.append("advertisingHeader", event.currentTarget.first.value);
    formDatas.append("detail", event.currentTarget.second.value);
    formDatas.append("price", event.currentTarget.third.value);
    formDatas.append("subject", event.currentTarget.fourth.value);
    formDatas.append("file", fileSelected);

    axios({
      method: "post",
      url: "http://localhost:8000/post",
      data: formDatas,
      headers: { "Content-Type": "multipart/form-data","authorization":getCookie('token')},
    })
      .then(async function (response) {
        await setCactive(false);
    setIsAgainGetDatas(false);

        
      })
      .catch(function (response) {
      });
  };

  const uploadFile = function (e: any) {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setFileSelected(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <Shadow>
      <form
        className="w-full sm:w-3/4 md:w-2/4 lg:w-auto h-auto absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 p-10 rounded-3xl backdrop-blur-md bg-black "
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between ">
          <h3>Create post</h3>
          <button
            onClick={() => setCactive(false)}
            type="button"
            className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center "
            data-modal-toggle="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full 2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center">
              Title
            </label>
            <input
              className="block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Title"
              name="first"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center">
              Description
            </label>
            <input
              className="appearance-none block w-full h-auto bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white "
              type="text"
              placeholder="..."
              name="second"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="deal"
              name="third"
            ></input>
          </div>
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Subject
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="fourth"
              >
                <option>hicheel1</option>
                <option>hicheel2</option>
                <option>hicheel3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MyImage src={createObjectURL} />

        <div className="flex justify-center items-center w-full">
          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer  focus:outline-none "
            id="small_size"
            type="file"
            onChange={uploadFile}
          ></input>
        </div>

        <button type="submit" className="w-auto h-[20px] text-gray-500 ">
          Submit
        </button>
      </form>
    </Shadow>
  );
};