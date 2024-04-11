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

const CheckboxItem = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        className="mr-2 appearance-none w-4 h-4 bg-[#35363A] rounded-sm border border-[#3F4045] checked:bg-[#84A8EC] checked:border-transparent"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div style={{ color: isChecked ? "white" : "" }}>{label}</div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <>
      <div className="fixed top-[8.5rem] h-full w-48 overflow-y-auto scrollbar-hide hidden md:block">
        <div className="border-r-2 border-gray-600 pr-4">
          <Section title="Category">
            <CheckboxItem label="Cleanser" />
            <CheckboxItem label="Toner" />
            <CheckboxItem label="Serum" />
            <CheckboxItem label="Moisturizer" />
            <CheckboxItem label="Face mask" />
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Price">
            <CheckboxItem label="High to low" />
            <CheckboxItem label="Low to high" />
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Location">
            <CheckboxItem label="Nearest" />
            <CheckboxItem label="Farthest" />
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Rating">
            <CheckboxItem label="Highest" />
            <CheckboxItem label="Lowest" />
            <div className="flex items-center mb-2 text-sm text-[#84A8EC]">
              <div>Load more+</div>
            </div>
          </Section>
          <Section title="Shipping">
            <CheckboxItem label="Regular" />
            <CheckboxItem label="Next day" />
            <CheckboxItem label="Same day" />
            <CheckboxItem label="Instant" />
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
