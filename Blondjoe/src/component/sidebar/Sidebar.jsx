import React, { useState } from "react";

const Section = ({ title, children }) => {
  const [showSubtitles, setShowSubtitles] = useState(true);

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles);
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer px-4 py-2 justify-between w-3/4 text-lg"
        onClick={toggleSubtitles}
      >
        <div className="flex items-center">
          <div className="text-white">{title}</div>
        </div>
        <div className="w-6 h-6">
          {showSubtitles ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </div>
      </div>
      {showSubtitles && (
        <div className="ml-4 mt-2 text-[#828285]">{children}</div>
      )}
    </>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="fixed h-full w-48 overflow-y-auto scrollbar-hide hidden md:block">
        <div className="border-r-2 border-gray-600 pr-4">
          <Section title="Category">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Cleanser</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Toner</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Serum</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Moisturizer</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Face mask</div>
            </div>
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Price">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>High to low</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Low to high</div>
            </div>
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Location">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Nearest</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Farthest</div>
            </div>
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Rating">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Highest</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Lowest</div>
            </div>
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Shipping">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Regular</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Next day</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Same day</div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
              />
              <div>Instant</div>
            </div>
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Payment">
            <div className="flex items-center mb-28 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
