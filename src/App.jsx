import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
const App = () => {
  const [showContent, setshowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 3,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
      // scale: 1,
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.6",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.6",
      ease: "Expo.easeInOut",
    });
    gsap.to(".girl", {
      scale: 1.1,
      x: "-50%",
      transformOrigin: "50%,50%",
      bottom: "-30%",
      rotate: 0,
      duration: 2,
      delay: "-.6",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.6}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 5,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg]  scale-[1.5]">
          <div className="landing relative overflow-hidden w-full h-screen bg-black">
            <div className="navbar top-0 left-0 z-[10] w-full absolute px-10 py-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[7px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[8px] leading-none  text-white ">
                  RockStar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden w-full h-screen relative">
              <img
                className="w-full sky scale-[1.7] rotate-[-20deg] h-full top-0 left-0 object-cover absolute"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full h-full bg scale-[1.5] rotate-[-5deg] top-0 left-0  object-cover absolute"
                src="./bg.png"
                alt=""
              />
              <div className="text p-4 tracking-tight text-white  absolute top-0 left-1/2 scale-[2] rotate-[-10deg] -translate-x-1/2">
                <h1 className="text-[8rem]  leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem]  leading-none ml-55">theft</h1>
                <h1 className="text-[8rem] tracking-tight leading-none -ml-40">
                  auto
                </h1>
              </div>
              <img
                className="  h-full girl -bottom-[170%] left-1/2 rotate-[-20deg] -translate-x-1/2 object-cover scale-[3] absolute"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="footer w-full py-[20px] px-10 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 flex gap-2 ">
              <div className="flex gap-4 items-center">
                <i className="text-xl text-white ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica] text-white text-xl">
                  Scroll Down
                </h3>
              </div>
              <img
                className="h-[45px] absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full  h-screen flex items-center justify-center px-10 bg-black">
            <div className="container w-full h-[80%] flex ">
              <div className="limg relative h-full w-1/2 bg-red-4">
                <img
                  className=" absolute h-full scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                  src="./Limg.png"
                  alt=""
                />
              </div>
              <div className="rg text-white flex flex-col gap-2 w-1/2  bg--300">
                <div className="rg-t w-full flex flex-col items-start justify-center">
                  <h1 className="text-5xl">Still Running</h1>
                  <h1 className="text-5xl">Not Hunting</h1>
                  <p className="font-[Helvetica] mt-20 w-2/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque doloribus pariatur odit architecto commodi nisi
                    officia tempora cupiditate voluptas beatae sint reiciendis
                    ex similique iusto eos vel, ut ipsum ea?
                  </p>
                </div>
                <div className="video w-[20] flex items-center justify-start px-10 h-[300px] mt-4 bg--500 ">
                  <video
                    muted
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                    src="./video.mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
