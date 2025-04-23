import hero from "../assets/hero.png";
function Body() {
  return (
    <div className="m-0">
      <div className="relative">
        <img
          className="w-full h-[218px] sm:h-[448px] md:h-[700px] object-cover"
          src={hero}
          alt="Home Wallpaper"
        />

        {/* Content overlaid on desktop, stacked below on mobile */}
        <div
          className="
          relative md:absolute md:top-[60%] md:left-10 
          bg-[linear-gradient(to_right,#4DCA79,#1CBDDD)] 
          z-10 p-6 sm:pt-[24px] pl-[20px] pr-[20px] pb-[32px] md:p-[24px] 
          w-full sm:w-full h-[294px] md:w-[630px]  
          flex flex-col space-y-4 mx-auto  md:mt-0
        "
        >
          <h2 className="text-[36px] sm:text-[36px] md:text-[48px] text-white font-bold leading-[100%] [letter-spacing:-2%] capitalize [font-family:'Inter']">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h2>
          <div className="bg-orange-500 w-fit px-6 py-2 flex items-center justify-center text-white sm:h-[38px]">
            <h4 className="text-[14px] sm:text-[16px] font-bold [letter-spacing:-2%] capitalize [font-family:'Inter']">
              Get free consultation
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
