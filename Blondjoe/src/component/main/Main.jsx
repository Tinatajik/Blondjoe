export default function Main() {
  return (
    <>
      <div className="flex flex-col w-full mt-2 items-center md:ml-24 lg:w-full lg:items-start lg:ml-[13.5rem]">
        <div className="flex items-center gap-3 text-lg text-[#828285]">
          <p className="hidden lg:block">Home</p>
          <p className="text-xl hidden lg:block">{">"}</p>
          <p className="hidden lg:block">Cleanizer</p>
          <p className="text-xl hidden lg:block">{">"}</p>
          <img
            width="23"
            height="23"
            src="https://img.icons8.com/fluency-systems-filled/48/online-store.png"
            alt="online-store"
            style={{ filter: "invert(100%)" }}
          />
          <p className="text-white md:mr-80">Mawar shop official</p>
        </div>
        <div className="flex flex-col items-center lg:flex-row xl:items-start w-full gap-4">
          <div className="flex flex-col w-5/6 md:w-[28rem] lg:w-2/5 xl:w-1/4 mt-6 rounded-xl h-full bg-[#35363A]">
            <img
              className="w-full h-32 p-4 rounded-xl"
              src="image/skinCare.jpg"
              alt="skin-care"
              style={{ borderRadius: "30px" }}
            ></img>
            <div className="flex justify-between px-4 ">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/fluency-systems-filled/48/online-store.png"
                  alt="online-store"
                  style={{ filter: "invert(100%)" }}
                />
                <p className="text-white">Mawar shop official</p>
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/tiny-color/16/checked.png"
                  alt="checked"
                />
              </div>
              <div className="flex items-center gap-1">
                <img
                  width="10"
                  height="10"
                  src="https://img.icons8.com/small/16/100-percents.png"
                  alt="100-percents"
                  style={{
                    filter:
                      "invert(22%) sepia(98%) saturate(2182%) hue-rotate(141deg) brightness(89%) contrast(101%)",
                  }}
                />
                <p className="text-[#0C9A56]">Online</p>
              </div>
            </div>
            <div className="flex justify-between p-4 w-full gap-2">
              <button className="w-1/2 bg-[#1C64EC] text-white rounded-full py-1">
                Follow +
              </button>
              <button className="flex justify-center items-center gap-1 w-1/2 bg-[#323B4C] text-[#1C64EC] border border-[#1C64EC] rounded-full py-1">
                Chat
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/matisse/100/speech-bubble-with-dots.png"
                  alt="speech-bubble-with-dots"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start xl:items-center w-5/6 md:w-[32rem] lg:mt-[-4.5rem] xl:mt-[1.5rem] xl:flex-row xl:w-[34%] mt-6 rounded-xl h-full bg-[#35363A] text-sm">
            <div className="flex flex-col p-4 items-start justify-center gap-4">
              <div className="flex text-white gap-2">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-outlined/24/online-store.png"
                  alt="online-store"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Products :<span className="text-[#7898D4]"> 600</span>{" "}
                </p>
              </div>
              <div className="flex text-white gap-2">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/conference-call.png"
                  alt="conference-call"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Followers :<span className="text-[#7898D4]"> 40.5k</span>{" "}
                </p>
              </div>
              <div className="flex text-white gap-2">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/add-user-male.png"
                  alt="add-user-male"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Following :<span className="text-[#7898D4]"> 1.5k</span>{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 items-start justify-center gap-4">
              <div className="flex text-white gap-2 ">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-outlined/24/hand-drawn-star.png"
                  alt="hand-drawn-star"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Rating :<span className="text-[#7898D4]"> 4.9</span>{" "}
                  <span className="text-[#828285]">(30.2k reviews)</span>{" "}
                </p>
              </div>
              <div className="flex text-white gap-2">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-outlined/24/speech-bubble-with-dots.png"
                  alt="speech-bubble-with-dots"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Chat Performance :<span className="text-[#7898D4]"> 93%</span>
                  <span className="text-[#828285]"> (Within hours)</span>{" "}
                </p>
              </div>
              <div className="flex text-white gap-2 mr-1">
                <img
                  width="16"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/add-user-male.png"
                  alt="add-user-male"
                  style={{ filter: "invert(100%)" }}
                />
                <p>
                  Joined :<span className="text-[#7898D4]"> 4 years ago</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[9rem] bg-[#0C9A56] text-white p-4 mt-6 rounded-xl text-center hidden xl:block">
            <p>Awards for top shop</p>
            <img
              width="28"
              height="38"
              src="https://img.icons8.com/fluency-systems-regular/48/trophy--v1.png"
              alt="trophy--v1"
              className="mt-3.5 ml-10"
              style={{ filter: "invert(100%)" }}
            />
          </div>
          <div className="w-[9rem] bg-[#0C9A56] text-white p-4 mt-6 rounded-xl text-center hidden xl:block">
            <p>Best seller of the year</p>
            <img
              width="28"
              height="38"
              src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png"
              alt="facebook-like--v1"
              className="mt-3.5 ml-10"
              style={{ filter: "invert(100%)" }}
            />
          </div>
        </div>
        <div className="bg-[#35363A] text-white w-5/6 md:w-[34rem] md:px-5 justify-between mt-5 lg:w-[49.5%] lg:ml-[27rem] lg:mt-[-4.5rem] xl:w-[56.5%] xl:ml-[22rem] xl:mt-[-4.5rem] rounded-xl px-2 py-5 flex items-center gap-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nN1VPUtDQRCM32gjYiWW/gSxEsRObCwUBMVCQRBs/QHXJfFmLvC0SpEiKgivthexjlgoKgZBYyWiWES08cnCBeLzTN4lnQdb3d7MfszupVL/+iilerXWywBCkmWSL9buSO6RXFJKdbcEboxZIHlPMmpiZQDzPlF3kgwSAEc1A/AFYDsMw66mBCR3fcD5k2inITiAxVbBaU1K6wQPgqAPwEPsQQXAJsljD5KKiCNR9ACmbdnGfbIQ5bkIijHwjyiKOup6U/LoRegiuIgrI5PJDMldOp0eltQ9CG5dBK8Ox60Wm191yfPZQfCmtR6TUpE89Mjg3UVw+YfzuVJqQJQhAyilI/lpjFmxA1lNWqJCg6hOstnsoPWbADBbe5fL5UYk4qZNJjnXJO0rAFPxd1JCh/+qcwcBuElQ4xJJRXKG5LrdrPWBPBlj+n8R2PTPPNUSOTJdc4IbY0ZtA9sBL9YPZ5xgo03wQj6f73GC2yYfxWcAwGMC8Ipz9zgIrgGcSgO11pPyFYrJbwXgQARgScVEUfsy4c7N+a/ON9cjXPshDEZ0AAAAAElFTkSuQmCC" />
          <p className="hidden xl:block">+68 981 723 9012</p>
          <div className="bg-[#8C8C8C] h-8 w-0.5"></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO2Uz2rCQBDGc/JS9YGK0tarSh+nIIUcROrm+/YQyIOIevXPw6i9195Tho4QJLvR3asLA2F3Mr+Zb2Y3SR4rZGVZ9g5gT/KXZNlg4rMDML4pOMn5DUHLOgMwa8w8MPgzyZ5+j5wAlSUE0DPG9LWKrQ9wdgRYWGtfADypvZJcOnx/fPrX6frh8Z/U/XMPYCH7aZq2ABgAJ5JHGQTZ06pXwQCRxTNZczmz1r4FA4qiaGuWpxrAt5wZYzrRAP7Lct2bg5zled4NBsi0uCQC8KXVDWKavLw0WSHH6yaTXMcAShlFlz+Az7vG1HXRAKxkWqQnYirLOuSi7QKfirJiG18F41gAgKEToJBZBGDqDV6RaiSvoufxq2YsPpvGzB8rcaw/e3HPkG4HZAQAAAAASUVORK5CYII=" />
          <p className="hidden xl:block">@mwrshop</p>
          <div className="bg-[#8C8C8C] h-8 w-0.5"></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABfUlEQVR4nN1VvUoDQRg8f19DSOsDiPoGEkXi3yMI9tquEYW4M7uNVbDRRCWk9Bl8B0MSLRRrNUKwkJwsaZbzy+152ujCNsd8M/PN7n4XRf96VavVKWPMGoAGyRaAd5IvADoA6iS3HCYXOYBlkm2ScWB3AZQyE8dxPAbgCMAgA7m/qZQaz+L88JvEsbcrqeQki2kEAF4B7JJcsNYWtNbzJJ8SuFWRXCk17fJMIR9orRcFU9cJXMdxSdGUAu3f+GaMMdskTwB8CGbWJYFGIJ5Tz/VeAHsh5d8KFB142FoAeyt10A8U7XsCl4E4e1IHPekRWWsL4q0YmpoB8CyYeZPAd4JAbRS5Z+xRqGtLAleCk747UGPMhrV21sPOuW8k9Yg465LAZiDXctYzcFxfBNxUBPDwCwJdpdRk2gTNLYDhgFxJPTQA5gcdMMoyrh1QGNflNAEAx642KOCRFBNXd5TAvTFmKcqzms3mhPtlkjwDsOMJVACcuwHpMLnI/8z6BECK64IwPZIuAAAAAElFTkSuQmCC" />
          <p className="hidden xl:block">mwrshop</p>
          <div className="bg-[#8C8C8C] h-8 w-0.5"></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nOWUsYrCQBRFo9ViKwjb7QcICv6CjYV+hv3aWL4uyNybpNLa1g+wWX9hq4X9BkV7tdHIwCgiiUKcB4IXHswk4Z439w0JgldSFEUNWyrmIvIB4I/kv4hUvAMATEimrsa+zbsAjgD2ruy668u8BmBlOwfwTXLg1ps4jj+fMk/TtARg7gx/7D7rWWFAXre3pypkDqBOcueG2st43znPxRjTzDUKw7BK8nB1Q3xW6xzFr4L58jIfkiMFwPQSkzGmfe/jwNNvYKsGsCK5eARggaiur91QFUCypRqRiJQBrNUAViRnahFZkeyrApIk+VIFPBLfEnACppPW1JcmKFYAAAAASUVORK5CYII=" />
          <p className="hidden xl:block">mWrshop</p>
          <div className="bg-[#8C8C8C] h-8 w-0.5"></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVR4nO2UQUoDQRRE5wCiuUVOYZLT5BxZTlOvGQZmm+hNdBXduhICUQiuXIxkESI4EhnooDidSY/RmEUK/qb5VUX/+t1RdMRBwVrbBUaSroGJpCcglzQHVl/LneWuZ+I4o1LDKy6pB7x/F6JhSSokdSoGwOWu4nyaXPgMbn/R4MY3osctxLcGJg8+g5c6Upqmp0Bf0nOAQe4b0bKOFDlkWXYiaSDptaZ/4btBEWKwhjGmDdxt2qRo7wYEjihJkhYQ/2REtSHHcXy2U8gBa7pq8A6mf/rQgPH+vwprbXfbJhEmXhhjzisGLoeOpCFwJele0qwMzFUlSPddz8pexxluFD/i3/ABL+sLuX7x8CsAAAAASUVORK5CYII=" />
          <p className="hidden xl:block">reviewmvlimba</p>
        </div>
      </div>
    </>
  );
}
