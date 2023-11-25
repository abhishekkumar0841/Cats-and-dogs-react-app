import React, { useState } from "react";
import firstImage from "../assets/firstImage.png";
import secondImage from "../assets/secondImage.png";

const Slider = () => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className=" lg:w-1/2 w-full lg:min-h-[100vh] min-h-[30vh] absolute top-0 right-0">
      <div className=" h-[100vh] w-auto ">
        <img
          src={showImage ? firstImage  : secondImage }
          alt=""
          className=" h-full w-full "
        />
      </div>

      {/* text content */}
      <div className=" absolute top-[390px] left-20">
        <div className=" max-w-[45%] flex flex-col gap-5">
          <h1 className=" text-[#FFFFFF] text-[18px] font-semibold">
            Type Text
          </h1>
          <p className=" text-[#FFE8DF] text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className=" flex items-center gap-3">
            <div
              onClick={() => setShowImage(!showImage)}
              className=" w-[8px] h-[8px] bg-[#FEE7DE] rounded-full cursor-pointer"
            ></div>
            <div
              onClick={() => setShowImage(!showImage)}
              className=" w-[8px] h-[8px] bg-[#FEE7DE] rounded-full cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
