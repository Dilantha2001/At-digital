import { useState } from "react";
function Faq() {
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
    <div className="bg-white w-full flex flex-col mt-[20px] md:mt-[10px] items-center px-4">
      <div className="bg-white w-full max-w-4xl flex flex-col p-4 sm:p-6 rounded-md shadow-sm">
        {/* Title */}
        <div className="flex justify-center items-center mb-6">
          <h3 className=" text-[#4F46E5] text-[27px] sm:text-2xl font-bold text-center font-poppins">
            Frequently asked questions
          </h3>
        </div>

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
  );
}

export default Faq;
