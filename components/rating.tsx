import React, { ReactNode } from "react";
import { instance } from "../components/Layout";
import { useIsAgainGetDatas, useModalContext } from "../context";
import { motion } from "framer-motion";
import { Slider } from "@mui/material";
export const Rate: React.FC<RateType> = ({ post, isRating }:any) => {
  const [state, setState] = React.useState<any>(0);
  const { setIsAgainGetDatas } = useIsAgainGetDatas();
  const {setModalText,setOpenModal} = useModalContext()
  const rateWorkerPerformance = async () => {
    await instance.post(`/post/${post._id}/rateWorkerPerformance`, { rating: state })
    .then((res) => {
      setIsAgainGetDatas((e: boolean) => !e);
      setOpenModal(true), 
        setModalText('amjilttai')

    });
  };
  return (
    <motion.div
     initial={{ x: 100, opacity: 0 }}
     animate={isRating?{ x: 0, opacity: 1 }:{ x: 100, opacity: 0 }}
     className="items-center justify-center w-full flex flex-col justify-between font-medium text-center bg-white   h-[auto]    ">
      <Slider defaultValue={state} sx={{width:'60%'}} onChange={(e:any) => setState(e.target.value)} aria-label="Default" valueLabelDisplay="auto" />
      <button onClick={rateWorkerPerformance}>Батлах</button>
    </motion.div>
  );
};

type RateType = { children?: ReactNode,isRating?:boolean, post: {_id:string}[] };
