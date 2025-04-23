import img1 from "../assets/logo.png";
function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Logo & Description */}
          <div className="mb-6 md:mb-0">
            <div className="w-[100px] h-[100px]">
              <img
                className="w-full h-full object-contain"
                src={img1}
                alt="Logo"
              />
            </div>
            <p className="mt-2 text-white-400">
              Providing innovative solutions for modern problems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-xl font-semibold">Technologies</h2>
              <ul className="mt-2 text-white">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="mt-2 text-white">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Data Analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Company</h2>
              <ul className="mt-2 text-white">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-white">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
