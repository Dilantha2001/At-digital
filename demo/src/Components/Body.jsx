import hero from "../assets/hero.png";
import img1 from "../assets/image2.png";
import img2 from "../assets/image1.png";
import Faq from "./Faq";

function Body() {
  return (
    <div className="m-0 flex flex-col min-w-[375px]">
      <div className="relative">
        <img
          className="w-full h-[218px] sm:h-[448px] md:h-[700px] object-cover"
          src={hero}
          alt="Home Wallpaper"
        />

        <div
          className="
        relative md:absolute md:top-[46%] md:left-10 
        bg-[linear-gradient(to_right,#4DCA79,#1CBDDD)] 
        z-10 p-6 sm:pt-[24px] pl-[20px] pr-[20px] pb-[32px] md:p-[24px] 
        w-full sm:w-full h-[294px] md:w-[630px]  
        flex flex-col space-y-4 mx-auto md:mt-0
      "
        >
          <h2 className="text-[36px] sm:text-[36px] md:text-[48px] text-white font-bold leading-[100%] [letter-spacing:-2%] capitalize [font-family:'Inter']">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h2>
          <div className="bg-orange-500 w-fit px-6 py-2 flex items-center justify-center text-white sm:h-[38px] [font-family:'Inter']">
            <h4 className="text-[14px] sm:text-[16px] font-bold [letter-spacing:-2%] capitalize [font-family:'Inter']">
              Get free consultation
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <div className="w-full px-4 mt-5 md:mt-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-lg p-4 sm:p-6 items-center">
            {/* Image Section */}
            <div className="w-full md:w-[414px] h-auto mb-6 md:mb-0 md:mr-6 flex justify-center">
              <img
                className="w-full max-w-[414px] h-auto object-cover rounded"
                src={img1}
                alt="img1"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-[542px] text-center md:text-left flex flex-col justify-center space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Web & Mobile App Development
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-orange-500 text-white text-sm sm:text-base rounded w-[129px] h-[38px] hover:bg-orange-600 transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 mt-5 md:mt-20 flex justify-center">
          <div className="w-full max-w-6xl bg-white flex flex-col-reverse md:flex-row items-center rounded-lg p-4 sm:p-6">
            {/* Text Section */}
            <div className="w-full md:w-[542px] text-center md:text-left space-y-4 pt-6 md:pt-0 flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl text-[#4F46E5] font-semibold">
                Digital Strategy Consulting
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-orange-500 text-white text-sm sm:text-base rounded w-[129px] h-[38px] hover:bg-orange-600 transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[414px] mb-6 md:mb-0 md:ml-6 flex justify-center">
              <img
                className="w-full max-w-[414px] h-auto object-contain"
                src={img2}
                alt="Digital Strategy"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}

export default Body;
