import React, { useState } from "react";

export default function Navbar() {
  const [selectedBox, setSelectedBox] = useState("🧴 Skin care");

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  return (
    <>
      <div className="flex overflow-x-auto whitespace-nowrap mt-4 text-white scrollbar-hide">
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "🎒 Ransel" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("🎒 Ransel")}
        >
          {selectedBox === "🎒 Ransel" && ""}
          🎒 Ransel
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👟 Shoes" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👟 Shoes")}
        >
          {selectedBox === "👟 Shoes" && ""}
          👟 Shoes
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-28 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👠 High heels" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👠 High heels")}
        >
          {selectedBox === "👠 High heels" && ""}
          👠 High heels
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "🧦 Socks" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("🧦 Socks")}
        >
          {selectedBox === "🧦 Socks" && ""}
          🧦 Socks
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👖 Pants" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👖 Pants")}
        >
          {selectedBox === "👖 Pants" && ""}
          👖 Pants
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👕 T-Shirt" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👕 T-Shirt")}
        >
          {selectedBox === "👕 T-Shirt" && ""}
          👕 T-Shirt
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👗 Dress" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👗 Dress")}
        >
          {selectedBox === "👗 Dress" && ""}
          👗 Dress
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-28 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "👙 Underwear" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("👙 Underwear")}
        >
          {selectedBox === "👙 Underwear" && ""}
          👙 Underwear
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-28 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "💇 Hair care" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("💇 Hair care")}
        >
          {selectedBox === "💇 Hair care" && ""}
          💇 Hair care
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "🧴 Skin care" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("🧴 Skin care")}
        >
          {selectedBox === "🧴 Skin care" && ""}
          🧴 Skin care
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-24 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "💍 Jewellery" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("💍 Jewellery")}
        >
          {selectedBox === "💍 Jewellery" && ""}
          💍 Jewellery
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "📚 Books" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("📚 Books")}
        >
          {selectedBox === "📚 Books" && ""}
          📚 Books
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "🎵 Vinyl" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("🎵 Vinyl")}
        >
          {selectedBox === "🎵 Vinyl" && ""}
          🎵 Vinyl
        </div>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-20 h-8 rounded-2xl mr-4 px-12 cursor-pointer ${
            selectedBox === "💻 Laptop" ? "bg-blue-500" : "bg-[#35363A]"
          }`}
          onClick={() => handleBoxClick("💻 Laptop")}
        >
          {selectedBox === "💻 Laptop" && ""}
          💻 Laptop
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#35363A] mt-3"></div>
    </>
  );
}
