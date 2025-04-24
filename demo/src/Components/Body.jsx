import hero from "../assets/hero.png";
import img1 from "../assets/image2.png";
import img2 from "../assets/image1.png";

import { useState } from "react";
function Body() {
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "How does Webflow help with responsive design?",
      answer:
        "Webflow’s visual designer lets you build responsive websites without code, adjusting layouts for desktop, tablet, and mobile seamlessly.",
    },
    {
      question: "Is Webflow good for SEO?",
      answer:
        "Yes, Webflow offers built-in SEO tools, clean code, and fast loading which are all great for search engine optimization.",
    },
  ];
  return (
    <div className="m-0 flex flex-col min-w-[375px]">
      <div className="relative">
        <img
          className="w-full h-[218px] sm:h-[448px] md:h-[700px] object-cover"
          src={hero}
          alt="Home Wallpaper"
        />

        {/* Content overlaid on desktop, stacked below on mobile */}
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

      <div className="w-full px-4 mt-[10px] md:mt-[80px] flex justify-center">
        <div className="bg-white w-full max-w-6xl flex flex-col md:flex-row rounded-lg  p-4 sm:p-6 items-center">
          {/* Image Section */}
          <div className="w-full max-w-[275px] mb-6 md:mb-0 md:mr-6">
            <img className="w-full h-auto object-cover" src={img1} alt="img1" />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Web & Mobile App Development
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 px-6 py-2 text-white text-sm sm:text-base rounded">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mt-[20px] md:mt-[80px] flex justify-center">
        <div className="w-full max-w-6xl bg-white flex flex-col-reverse md:flex-row items-center rounded-lg  p-4 sm:p-6">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-4 pt-6 md:pt-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Digital Strategy Consulting
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-orange-500 px-6 py-2 text-white text-sm sm:text-base rounded">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[275px] mb-6 md:mb-0 md:ml-6">
            <img
              className="w-full h-auto object-contain"
              src={img2}
              alt="Digital Strategy"
            />
          </div>
        </div>
      </div>

      <div className="bg-white w-full flex flex-col mt-[20px] md:mt-[80px] items-center px-4">
        <div className="bg-white w-full max-w-4xl flex flex-col p-4 sm:p-6 rounded-md shadow-sm">
          {/* Title */}
          <div className="flex justify-center items-center mb-6">
            <h2 className=" text-[#4F46E5] text-[27px] sm:text-2xl font-bold text-center">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ List */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#FAF8FF] p-4 mb-2 rounded-md"
            >
              <h3
                onClick={() => handleToggle(index)}
                className={`cursor-pointer select-none text-[18px] sm:text-[20px] flex justify-between items-center ${
                  activeIndex === index ? "text-[#4F46E5]" : "text-black"
                }`}
              >
                {faq.question}
                <span className="text-[22px] ml-2">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </h3>

              {activeIndex === index && (
                <p className="mt-2 text-left text-sm sm:text-base text-gray-700 [font-family:'Inter']">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
