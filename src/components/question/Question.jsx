import React from "react";
import { Button } from "@material-tailwind/react";
import send from "assets/icon/icon-send.png";

const Question = () => {
  return (
    <div className="bg-main h-[300px] xl:w-[1250px] my-4 rounded-lg drop-shadow-md">
      <p className="text-xl font-medium m-4">Hỏi và đáp</p>
      <div className="flex gap-6 justify-center">
        <textarea
          className="w-10/12 h-[200px] rounded-lg drop-shadow-md p-2 pt-[-50px] border-0 resize-none focus:outline-red-500 transition ease-linear"
          placeholder="Xin mời để lại câu hỏi, Apple Store sẽ trả lời sớm nhất có thể!" required
        />
        <Button className="flex bg-[#DDDDDD] h-12 items-center gap-2 px-6 py-4 hover:bg-red-500 transition">
          <img src={send} alt="icon-send" className="w-6" />
          <span className="text-lg">Gửi</span>
        </Button>
      </div>
    </div>
  );
};

export default Question;
