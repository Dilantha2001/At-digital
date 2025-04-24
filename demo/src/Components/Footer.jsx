import Logo from "../assets/LOGO.png";
function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8 font-inter">
      <div className="container mx-auto px-6 w-full max-w-[1140px] min-w-[375px] flex flex-col">
        <div className="flex flex-col   md:flex-row justify-between w-full items-start">
          <div className="mb-6 md:mb-0 flex-2 flex flex-col text-left">
            <div className="md:w-[226px] md:h-[49.62px] w-[152px] h-[33.37px]  ">
              <img
                className="w-full h-full object-contain"
                src={Logo}
                alt="Logo"
              />
            </div>
            <p className="mt-2 text-white/80 font-lato font-light text-[16px] w-full md:w-[413px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>

          <div className="flex flex-col flex-1 md:flex-row gap-10 md:gap-15 justify-end w-full text-left">
            <div className="flex flex-col">
              <h2 className="text-[21px] font-semibold">Technologies</h2>
              <ul className="mt-2 text-white">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col">
              <h2 className="text-[21px] font-semibold"> Our Services</h2>
              <ul className="mt-2 text-white">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-left text-white flex items-center justify-center text-[14px]">
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
