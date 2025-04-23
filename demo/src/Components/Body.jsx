import hero from "../assets/hero.png";
import img1 from "../assets/image2.png";
import img2 from "../assets/image1.png";
function Body() {
  return (
    <div className="m-0 h-[2000px] min-w-[375px]">
      <div className="relative">
        <img
          className="w-full h-[218px] sm:h-[448px] md:h-[700px] object-cover"
          src={hero}
          alt="Home Wallpaper"
        />

        {/* Content overlaid on desktop, stacked below on mobile */}
        <div
          className="
        relative md:absolute md:top-[47%] md:left-10 
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

      <div className="h-[275px] w-full bg-white flex flex-col md:flex-row items-center justify-center mt-[200px] md:mt-[80px] min-w-[375px]">
        <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-md p-6 text-center items-center justify-center">
          {/* Image section */}
          <div className="h-[275px] w-[275px]">
            <img className="h-[275px] w-[275px]" src={img1} alt="img1" />
          </div>

          {/* Text section */}
          <div className="h-[275px] w-[413px] text-center sm:text-left pt-6 flex flex-col justify-center [font-family:'Inter']">
            <h2 className="text-xl font-semibold mb-2">
              Web & Mobile App Development
            </h2>

            <p className="text-gray-600 mb-4 [font-family:'Inter']">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>

            <div className="flex justify-center items-center">
              <button className="bg-orange-500 w-[135px] h-[38px] text-[14px] px-[20px] py-2 flex items-center justify-center text-white [font-family:'Inter'] ">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[275px] w-full bg-white flex flex-col-reverse md:flex-row items-center justify-center mt-[300px] md:mt-[80px] min-w-[375px]">
        <div className="h-auto w-[668px] md:w-[413px] text-center md:text-left pt-6 flex flex-col justify-center space-y-4">
          <h2 className="text-xl font-semibold">Digital Strategy Consulting</h2>
          <p className="text-gray-600">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-orange-500 w-fit px-6 py-2 flex items-center justify-center text-white sm:h-[38px] [font-family:'Inter']">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-[275px] h-[275px] mt-6 md:mt-0">
          <img
            className="w-full h-full object-contain"
            src={img2}
            alt="Digital Strategy"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
