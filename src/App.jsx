import React, { useEffect } from "react";
import {
  HeaderLogo,
  DeviceImage,
  Touch,
  FastIcons,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Reps,
  Swipe,
  Works,
  Star,
  Star2,
  Devices,
  FooterLogo,
} from "./assets";
import AOS from "aos";
import "aos/dist/aos.css";
import APK from "./assets/app-debug.apk";

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      {/* Navbar Start */}
      <div className="border ">
        <nav className="logo py-4 w-[90%] mx-auto md:w-[80%] flex items-center justify-between">
          <div className="">
            <a href="#">
              <h1 className="eco-text text-[36px] font-[600]">EcoShare</h1>
            </a>
          </div>
          <div className="button md:w-[20%] w-[30%]">
            <a
              href={APK}
              className="md:p-3 p-2 text-[20px] rounded-[15px] text-center block font-bold eco-text border-[1px] border-[#95BE6D] bg-[#ffff]
          "
            >
              Download
            </a>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
      {/* Main Page Start */}
      <main className="w-[90%] mx-auto md:w-[80%]">
        {/* Serious-tracking Start */}
        <div className="py-10">
          <h1 className="text-[55px]  md:text-[80px] lg:text-[100px] font-bold">
            Serious <span className="eco-text">tracking</span> for serious
            walkers.
          </h1>
        </div>
        {/* Serious-tracking End */}
        {/* device Section Start */}
        <div className="py-10 my-5">
          <div className="flex justify-between">
            <div className="relative w-[50%]">
              <p class="reset text-[13px] text-[#A8A9B2] md:text-[20px] w-[176%] absolute z-[100] mt-[45%] border-t-[2px] border-[#666666] md:pt-[10px] font-[600] element-animation element-show">
                Reset your progress
              </p>
              <p class="reset text-[13px] text-[#A8A9B2] md:text-[20px] w-[176%] absolute z-[100] mt-[76.5%] border-t-[2px] border-[#666666] md:pt-[10px] font-[600] element-animation element-show">
                Your progress as a percentage
              </p>
              <p class="reset text-[13px] text-[#A8A9B2] md:text-[20px] w-[176%] absolute z-[100] mt-[106%] border-t-[2px] border-[#666666] md:pt-[10px] font-[600] element-animation element-show">
                Unknown words
              </p>
              <p class="reset text-[13px] text-[#A8A9B2] md:text-[20px] w-[176%] absolute z-[100] mt-[155%] border-t-[2px] border-[#666666] md:pt-[10px] font-[600] element-animation element-show">
                Reviewed vocabluary
              </p>
            </div>
            <div className="w-[100%] ">
              <img src={DeviceImage} alt="" />
            </div>
          </div>
          <div className="py-5">
            <div data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold ">
                Cognitive
              </h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex items-center w-[100%] justify-end"
            >
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] inline font-bold ">
                by<span className="eco-text">design</span>
              </h1>
            </div>
          </div>
        </div>
        {/* device Section End */}
        {/* cognitive Section Start */}
        <div>
          <div className="title mb-4 text-[#A8A9B2] font-[400] text-[35px] text-center">
            Made purely for announcing something that shouldn't have been
          </div>
          <div className="row ">
            <div className="col-lg-4 mb-4 col-md-12  col-sm-12">
              <div className="border-[#95BE6D] bg-[#fff] h-[50] border-[4px] rounded-[40px]">
                <img src={Touch} className="w-100 object-cover" alt="" />
                <p className="text-center text-[#666666] py-[100px] text-[25px] font-bold">
                  Big touch areas <br />{" "}
                  <span className="font-[500] text-[#A8A9B2] text-[22px]">
                    Friendly for tired hands
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-8  col-md-12 col-sm-12">
              <div className="row w-[98%] mx-auto items-center border-[#95BE6D] p-0 py-5 bg-[#fff] overflow-hidden border-[4px] rounded-[40px]">
                <div className="col-4 p-0">
                  <img src={FastIcons} alt="" />
                </div>
                <div className="col-7 h-100 ">
                  <h1 className="lg:text-[30px] text-[#666] text-[25px] font-bold">
                    <span className="eco-text">Fast</span> as hell <br />{" "}
                    <span className="text-[#A8A9B2] font-[400]">
                      {" "}
                      Always smooth and speedy. Never in your way
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-[98%] mt-4 px-4 mx-auto items-center border-[#95BE6D] p-0 py-5 bg-[#fff] overflow-hidden border-[4px] rounded-[40px]">
                <h1 className="lg:text-[210px] text-[#95BE6D] text-[100px] font-[700]">
                  75%
                </h1>
                <div className="title text-[#666] font-[600] lg:text-[30px] text-[25px] ">
                  Project <span className="eco-text font-[700]">readiness</span>{" "}
                  as a percentage
                </div>
                <p className="lg:text-[23px] text-[#A8A9B2] text-[16px]">
                  At the moment, the application is available only on android,
                  by the new year we hope that there will be a version for iOS
                  as well
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-8 mt-4 col-md-7 col-sm-12">
              <div className="w-[98%] h-100 px-4 mx-auto items-center border-[#95BE6D] p-0 py-5 bg-[#fff] overflow-hidden border-[4px] rounded-[40px] row">
                <div className="col-3 ">
                  <img src={Works} alt="" />
                </div>
                <div className="col-9">
                  <h1 className="lg:text-[40px] text-[#666] font-[600] text-[20px]">
                    Works <span className="eco-text font-bold">offline</span>
                  </h1>
                  <p className="lg:text-[25px] text-[15px] text-[#A8A9B2]">
                    Does not rely on an internet connection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 col-md-5 col-sm-12">
              <div className="w-[98%] text-center text-[40px] px-4 mx-auto items-center border-[#95BE6D] pb-0 p-5 bg-[#fff] overflow-hidden border-[4px] rounded-[40px] ">
                <h1 className="mb-3 lg:text-[40px] text-[#666] text-[20px]">
                  Navigate by <br /> <b className="eco-text">Swipe</b>
                </h1>
                <div className="w-100 flex items-center justify-center">
                  <img src={Swipe} className="size-1/4 md:size-1/3" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p className="lg:text-[25px] my-5 text-[15px] text-[#A8A9B2]">
            In the app, you can track your steps and report littered areas,
            helping to make a positive change. Remember, you're doing it for
            yourself - stay disciplined, take responsibility, and trust
            yourself. We wish the whole team success in staying active and
            making the world a cleaner place!
          </p>
          <div className="py-5">
            <div data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-bold text-[#333]">
                Registration
              </h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex items-center w-[100%] justify-end"
            >
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] inline font-bold text-[#fff]">
                <span className="eco-text">frames.</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={Devices} className="w-[70%] object-contain" alt="" />
          </div>
          <p className="lg:text-[25px]  text-[15px] text-[#A8A9B2]">
            If you want to learn English. We choose only high-quality books for
            learning English. If you don't believe it, you can check it by
            downloading our app
          </p>
          <div className="py-5">
            <div data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-bold text-[#333]">
                Fully
              </h1>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex items-center w-[100%] justify-end"
            >
              <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] inline font-bold text-[#fff]">
                <span className="eco-text">featured</span>.
              </h1>
            </div>
          </div>
          <div>
            <h1 className="md:text-[100px] text-[55px] font-[600]">
              Info about <span className="eco-text">supersets</span>
            </h1>
            <p className="text-[30px] font-[400]">
              information about elements which placed on the top
            </p>

            <div className="mt-4">
              <img src={Feature1} alt="" />
            </div>
          </div>
          <div className="py-5">
            <h1 className="text-[60px] text-[#333] font-[600]  md:text-[100px]">
              Info about <span className="eco-text">logo</span>
            </h1>
            <p className="text-[30px]  md:text-[37px]">
              Information about us, our logo, our origins, who we are, etc.
            </p>
            <div className="mt-4">
              <img src={Feature2} alt="" />
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-[60px] text-[#333] font-[600] md:text-[100px]">
              What other <b className="eco-text">people</b> think.
            </h1>
            <p className="text-[30px] md:text-[40px] mt-3 text-[#A8A9B2]">
              Feedback from our <span className="eco-text">first users</span>
            </p>
          </div>
          <div className="row py-5">
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Alisher Nurullayev (student)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  A great app to explore! Flash cards are very helpful in
                  memorizing words for a long time. I use it every day
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Malika Azatbayevna (teacher)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  Convenient and understandable! I've been seeing a lot of
                  progress for the past month. I'm waiting for even more
                  languages!
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Marat Ibrayimov (principle)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  The best application for practice! Everything is intuitive,
                  and the repetition of words becomes interesting.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Atabayeva Eleonora (student)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  A very useful application, but I would like more languages. It
                  works without failures!
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star2}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Kudabayev Sultan (student)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  A good application, but sometimes flash cards are repeated too
                  often. Otherwise, it's great!
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 col-md-6 col-sm-6 col-12">
              <div>
                <div className="stars w-100 flex gap-[10px] items-center">
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star2}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                  <img
                    src={Star2}
                    className="w-[20px] sm:w-[30px] md:w-[40px] "
                    alt=""
                  />
                </div>
                <div className="name md:text-[35px] text-[20px] mt-2">
                  Khojamuratova Aynahan (student)
                </div>
                <p className="md:text-[25px] text-[18px] text-[#A8A9B2]">
                  It's a good start, but the functionality is still limited. I
                  am waiting for updates and the addition of new features.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className=" text-[60px] text-[#333] font-[600] md:text-[100px]">
              New ideas of <span className="eco-text">EcoShare</span>
            </h1>
            <p className="text-[30px] md:text-[40px] text-[#A8A9B2]">
              Our future plans..
            </p>
          </div>
          <div className="w-[90%]  flex justify-center h-[60vh] mt-4 px-4 mx-auto items-center border-[#95BE6D] p-0 py-5  overflow-hidden border-[4px] rounded-[40px]">
            <h1 className="text-[30px] md:text-[60px] eco-text font-bold">
              coming soon..
            </h1>
          </div>
        </div>
        {/* cognitive Section End */}
      </main>
      {/* Main Page Start */}
      {/* Footer Section Start */}
      <footer className="w-[90%] py-5 mx-auto md:w-[80%]">
        <div className="">
          <img src={FooterLogo} className="w-[200px] rotate-5" alt="" />
        </div>
        <p className="text-[#A8A9B2] text-[20px] md:text-[40px]">
          "echo" is free to download. You could try it in Google Play Market for
          Android. Designed by kubey Nukus, Karakalpakstan. since 2024. Get in
          touch with questions or feedback at
        </p>
        <p className="text-[20px] text-[#333] py-3 md:text-[40px] underline">
          hello@ecoshare.app
        </p>
        <p className="text-[#A8A9B2] text-[20px] md:text-[40px]">
          Copyright © · 2024.
        </p>
      </footer>
      {/* Footer Section End */}
    </>
  );
};

export default App;
