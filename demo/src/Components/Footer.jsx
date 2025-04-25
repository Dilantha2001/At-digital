import Logo from "../assets/LOGO.png";
function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8 font-inter">
      <div className="container mx-auto px-6 w-[1080px] max-w-[1140px] min-w-[375px] flex flex-col">
        <div className="flex flex-col   md:flex-row justify-between w-full items-start">
          <div className="mb-6 md:mb-0 w-[438px] flex flex-col text-left ">
            <div className="w-[152px] h-[33.37px] md:w-[226px] md:h-[49.62px]">
              <img
                className="w-full h-full object-contain"
                src={Logo}
                alt="Logo"
              />
            </div>

            {/* Text */}
            <p className="mt-2 text-white/80 font-lato font-light text-sm sm:text-base w-full max-w-[413px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective — your
              business results.
            </p>
          </div>

          <div className="flex flex-col w-[530px] md:flex-row gap-10 md:gap-15 justify-end  text-left">
            <div className="flex  flex-1 not-even:flex-col">
              <h2 className="text-[21px] font-semibold">Technologies</h2>
              <ul className="mt-2 text-white text-[14px]">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col">
              <h2 className="text-[21px] font-semibold"> Our Services</h2>
              <ul className="mt-2 text-white text-[14px]">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-8 border-t-[1px] w-[630px] pt-1 text-left text-white flex items-center justify-center text-[14px]">
            <div className="flex justify-between items-center w-[257px] text-[14px] [font-family:'Inter']">
              <div className=" flex items-start">
                <p>Privacy Policy </p>
              </div>
              <div className=" flex items-start">
                <p>|</p>
              </div>
              <div className=" flex items-start ">
                <p>Terms & Conditions </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
