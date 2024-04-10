export default function Header() {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center w-full mt-5">
        <div className="flex w-full lg:justify-start items-center gap-5 lg:w-3/4 ml-4">
          <h3 className="text-white text-2xl font-bold">
            Blon<span className="text-blue-600 italic">djoe</span>
          </h3>
          <div className="relative hidden md:block">
            <input
              placeholder="Search"
              className="bg-[#35363A] rounded-full outline-none h-9 w-96 px-10 py-2 pr-10 text-white"
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                alt="search--v1"
                style={{ filter: "invert(100%)" }}
              />
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/000000/horizontal-settings-mixer--v1.png"
                alt="horizontal-settings-mixer--v1"
                style={{ filter: "invert(100%)" }}
              />
            </div>
          </div>
          <div className="bg-[#2A2E38] text-[#7898D4] rounded-full h-9 py-1 px-4 flex items-center md:w-48">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/external-neu-royyan-wijaya/32/external-coin-neu-business-and-finance-neu-royyan-wijaya-2.png"
              alt="external-coin-neu-business-and-finance-neu-royyan-wijaya-2"
              style={{
                filter:
                  "brightness(1) invert(0.45) sepia(5) saturate(2.5) hue-rotate(170deg)",
              }}
            />
            <p className="ml-1">coin: 2,500,782.00</p>
          </div>
        </div>
        <div className="flex items-center mr-4 gap-5 w-full px-4 lg:hidden">
          <div className="relative w-full md:hidden">
            <input
              placeholder="Search"
              className="bg-[#35363A] rounded-full outline-none h-9 w-full px-10 py-2 pr-10 text-white"
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                alt="search--v1"
                style={{ filter: "invert(100%)" }}
              />
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/000000/horizontal-settings-mixer--v1.png"
                alt="horizontal-settings-mixer--v1"
                style={{ filter: "invert(100%)" }}
              />
            </div>
          </div>
        </div>

        <div className="lg:flex items-center mr-4 gap-5 hidden">
          <div className="flex gap-3 cursor-pointer ">
            <div className="w-9 h-9 rounded-full bg-[#35363A] flex justify-center items-center hover:bg-blue-400">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/shopping-bag.png"
                alt="shopping-bag"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#35363A] flex justify-center items-center hover:bg-blue-400">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/like--v1.png"
                alt="like--v1"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="w-9 h-9 rounded-full bg-[#35363A] flex justify-center items-center hover:bg-blue-400">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/appointment-reminders.png"
                alt="appointment-reminders"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
          <div className="h-8 w-0.5 bg-[#35363A]"></div>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/apps.png"
            alt="apps"
            style={{ filter: "brightness(0) invert(0.40)" }}
            className="cursor-pointer"
          />
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile-img"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#35363A] mt-3"></div>
    </>
  );
}
