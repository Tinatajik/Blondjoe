import React, { useState } from "react";
export default function Products() {
  const [selectedBox, setSelectedBox] = useState("All products");

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  return (
    <div className="w-full mb-10 px-3 lg:px-3 xl:w-5/6 mt-6 lg:ml-52  md:ml-44 md:w-[38rem] lg:w-[60rem] md:px-9">
      <div className="text-[#828285] text-lg  flex w-full py-2 items-center ">
        <p
          className={`cursor-pointer w-36 text-center h-10 ${
            selectedBox === "All products"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("All products")}
        >
          All products
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10  ${
            selectedBox === " Top Sales"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick(" Top Sales")}
        >
          Top Sales
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10 hidden lg:block ${
            selectedBox === "Promo"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("Promo")}
        >
          Promo
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10 hidden lg:block ${
            selectedBox === "La Crystal"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("La Crystal")}
        >
          La Crystal
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10 hidden lg:block  ${
            selectedBox === "Cleanizer"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("Cleanizer")}
        >
          Cleanizer
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10 hidden lg:block  ${
            selectedBox === "El Tonerb"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("El Tonerb")}
        >
          El Tonerb
        </p>
        <p
          className={`cursor-pointer w-36 text-center h-10 hidden lg:block ${
            selectedBox === "Serumb"
              ? "text-white  border-b-2 border-b-[#1C64EC]"
              : ""
          }`}
          onClick={() => handleBoxClick("Serumb")}
        >
          Serumb
        </p>
        <select className="bg-[#202124] outline-none cursor-pointer w-12 md:w-20 xl:w-28 text-center mt-[-0.75rem]">
          <option value="More" selected>
            More
          </option>
          <option value="Experiance">Experiance</option>
          <option value="Low Rate">Low Rate</option>
        </select>
      </div>
      <div className="w-full h-0.5 bg-[#35363A] mt-[-0.6rem]"></div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center  xl:justify-start gap-5 mt-4">
        <div className="xl:w-[23%] md:w-2/5 lg:w-1/4 bg-[#35363A] flex flex-col rounded-xl">
          <img
            className="rounded-t-xl  h-[9rem]"
            src="./image/skinCare2.webp"
            alt="skin-care"
          ></img>
          <div className="text-white flex gap-2 rounded-xl bg-[#35363A] w-12 py-1 px-2 ml-2 mt-4 absolute">
            <img
              width="9"
              height="5"
              src="https://img.icons8.com/tiny-glyph/16/000000/star.png"
              alt="star"
              style={{ filter: "invert(100%)" }}
            />
            <p className="text-sm">4.9</p>
          </div>
          <div className="flex justify-between items-center text-white px-3 mt-2">
            <p>Tarolasix Plotakov</p>
            <p className="text-md font-semibold">
              $50<span className="text-sm font-normal">.24</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-3 mt-1 mb-2">
            <p className="text-sm w-3/4 text-[#828285]">
              Tarolasix Plotakov floraz topics litixc{" "}
              <span className="text-[#7898D4] ">Read more...</span>
            </p>
            <button className="text-white rounded-xl bg-[#1C64EC] px-2">
              Buy
            </button>
          </div>
        </div>
        <div className="xl:w-[23%] md:w-2/5 lg:w-1/4 bg-[#35363A] flex flex-col rounded-xl">
          <img
            className="rounded-t-xl  h-[9rem]"
            src="./image/SkinCare3.jpg"
            alt="skin-care"
          ></img>
          <div className="text-white flex gap-2 rounded-xl bg-[#35363A] w-12 py-1 px-2 ml-2 mt-4 absolute">
            <img
              width="9"
              height="5"
              src="https://img.icons8.com/tiny-glyph/16/000000/star.png"
              alt="star"
              style={{ filter: "invert(100%)" }}
            />
            <p className="text-sm">4.7</p>
          </div>
          <div className="flex justify-between items-center text-white px-3 mt-2">
            <p>Tarolasix Plotakov</p>
            <p className="text-md font-semibold">
              $96<span className="text-sm font-normal">.14</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-3 mt-1 mb-2">
            <p className="text-sm w-3/4 text-[#828285]">
              Tarolasix Plotakov floraz topics litixc{" "}
              <span className="text-[#7898D4] ">Read more...</span>
            </p>
            <button className="text-white rounded-xl bg-[#1C64EC] px-2">
              Buy
            </button>
          </div>
        </div>
        <div className="xl:w-[23%] md:w-2/5 lg:w-1/4 bg-[#35363A] flex flex-col rounded-xl">
          <img
            className="rounded-t-xl h-[9rem]"
            src="./image/skinCare4.jpg"
            alt="skin-care"
          ></img>
          <div className="text-white flex gap-2 rounded-xl bg-[#35363A] w-12 py-1 px-2 ml-2 mt-4 absolute">
            <img
              width="9"
              height="5"
              src="https://img.icons8.com/tiny-glyph/16/000000/star.png"
              alt="star"
              style={{ filter: "invert(100%)" }}
            />
            <p className="text-sm">4.2</p>
          </div>
          <div className="flex justify-between items-center text-white px-3 mt-2">
            <p>Tarolasix Plotakov</p>
            <p className="text-md font-semibold">
              $54<span className="text-sm font-normal">.98</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-3 mt-1 mb-2">
            <p className="text-sm w-3/4 text-[#828285]">
              Tarolasix Plotakov floraz topics litixc{" "}
              <span className="text-[#7898D4] ">Read more...</span>
            </p>
            <button className="text-white rounded-xl bg-[#1C64EC] px-2">
              Buy
            </button>
          </div>
        </div>
        <div className="xl:w-[23%] md:w-2/5 lg:w-1/4 bg-[#35363A] flex flex-col rounded-xl">
          <img
            className="rounded-t-xl h-[9rem]"
            src="./image/skinCare5.jpg"
            alt="skin-care"
          ></img>
          <div className="text-white flex gap-2 rounded-xl bg-[#35363A] w-12 py-1 px-2 ml-2 mt-4 absolute">
            <img
              width="9"
              height="5"
              src="https://img.icons8.com/tiny-glyph/16/000000/star.png"
              alt="star"
              style={{ filter: "invert(100%)" }}
            />
            <p className="text-sm">5</p>
          </div>
          <div className="flex justify-between items-center text-white px-3 mt-2">
            <p>Tarolasix Plotakov</p>
            <p className="text-md font-semibold">
              $119<span className="text-sm font-normal">.58</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-3 mt-1 mb-2">
            <p className="text-sm w-3/4 text-[#828285]">
              Tarolasix Plotakov floraz topics litixc{" "}
              <span className="text-[#7898D4] ">Read more...</span>
            </p>
            <button className="text-white rounded-xl bg-[#1C64EC] px-2">
              Buy
            </button>
          </div>
        </div>
        <div className="xl:w-[23%] lg:w-1/4 bg-[#35363A] flex flex-col rounded-xl">
          <img
            className="rounded-t-xl h-[9rem]"
            src="./image/skinCare6.jpg"
            alt="skin-care"
          ></img>
          <div className="text-white flex gap-2 rounded-xl bg-[#35363A] w-12 py-1 px-2 ml-2 mt-4 absolute">
            <img
              width="9"
              height="5"
              src="https://img.icons8.com/tiny-glyph/16/000000/star.png"
              alt="star"
              style={{ filter: "invert(100%)" }}
            />
            <p className="text-sm">4.2</p>
          </div>
          <div className="flex justify-between items-center text-white px-3 mt-2">
            <p>Tarolasix Plotakov</p>
            <p className="text-md font-semibold">
              $24<span className="text-sm font-normal">.40</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-3 mt-1 mb-2">
            <p className="text-sm w-3/4 text-[#828285]">
              Tarolasix Plotakov floraz topics litixc{" "}
              <span className="text-[#7898D4] ">Read more...</span>
            </p>
            <button className="text-white rounded-xl bg-[#1C64EC] px-2">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
