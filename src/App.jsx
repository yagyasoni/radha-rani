import { useState } from "react";
import landing1 from "./assets/landing1.svg";
import landing2 from "./assets/landing2.svg";
import landing3 from "./assets/landing3.svg";
import landing4 from "./assets/landing4.svg";
import landing5 from "./assets/landing5.svg";
import landing6 from "./assets/landing6.svg";
import landing7 from "./assets/landing7.svg";
import landing8 from "./assets/landing8.svg";
import landing9 from "./assets/landing9.svg";
import landing10 from "./assets/landing10.svg";
import landing11 from "./assets/landing11.svg";
import landing12 from "./assets/landing12.svg";
import landing13 from "./assets/landing13.svg";
import star1 from "./assets/star1.svg";
import star2 from "./assets/star2.svg";
import services1 from "./assets/services1.svg";
import services2 from "./assets/services2.svg";
import services3 from "./assets/services3.svg";
import services4 from "./assets/services4.svg";
import bg2 from "./assets/bg2.svg";
import bg3 from "./assets/bg3.svg";
import bg1 from "./assets/bg1.svg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#fffff0] min-h-screen w-full relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute left-[-364px] top-[-395px] w-[1239.666px] h-[1239.666px] pointer-events-none overflow-hidden hidden lg:block">
        <div className="rotate-[-15.22deg] w-[1010px] h-[1010px]">
          <svg
            className="block w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1040 1040"
          >
            <g filter="url(#filter0_d_1_283)">
              <circle cx="520" cy="516" fill="#FFE066" r="505" />
              <circle cx="520" cy="516" r="504.5" stroke="white" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1040"
                id="filter0_d_1_283"
                width="1040"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_283"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_283"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute left-[calc(33.33%+82px)] top-[-391px] w-[1061.591px] h-[694.398px] pointer-events-none overflow-hidden hidden lg:block">
        <div className="rotate-[8.84deg] w-[989px] h-[549px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 pt-4 md:pt-[19px] px-4">
        <div className="max-w-[1280px] mx-auto bg-[rgba(255,255,255,0.4)] backdrop-blur-sm rounded-[100px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] h-[50px] md:h-[60px] flex items-center justify-between px-4 md:px-8 relative">
          <div className="font-['Cormorant_Infant'] font-bold text-[24px] md:text-[32px]">
            <span className="text-[#fa5e02]">Radha </span>
            <span className="text-[#1a1a1a]">Rani</span>
          </div>
          <div className="font-['Poppins'] hidden md:flex items-center gap-6 lg:gap-12">
            <a
              href="#home"
              className="bg-[#fa5e02] text-white hover:bg-[#e04a00] text-[18px] lg:text-[20px] transition-colors cursor-pointer py-2 px-4 rounded-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[18px] lg:text-[20px] text-black hover:text-[#fa5e02] transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#menu"
              className="text-[18px] lg:text-[20px] text-black hover:text-[#fa5e02] transition-colors cursor-pointer"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-[18px] lg:text-[20px] text-black hover:text-[#fa5e02] transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-[1280px] mx-auto mt-2 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="flex flex-col py-3">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-[18px] font-['Poppins'] text-white bg-[#fa5e02] mx-4 my-1 rounded-full hover:bg-[#e04a00] transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-[18px] font-['Poppins'] text-[#1a1a1a] hover:text-[#fa5e02] hover:bg-[rgba(250,94,2,0.06)] mx-4 my-1 rounded-full transition-colors cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-[18px] font-['Poppins'] text-[#1a1a1a] hover:text-[#fa5e02] hover:bg-[rgba(250,94,2,0.06)] mx-4 my-1 rounded-full transition-colors cursor-pointer"
              >
                Menu
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-[18px] font-['Poppins'] text-[#1a1a1a] hover:text-[#fa5e02] hover:bg-[rgba(250,94,2,0.06)] mx-4 my-1 rounded-full transition-colors cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto pt-8 md:pt-[50px] pb-12 md:pb-[100px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-8 lg:px-20">
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.15)] border-4 border-white">
              <img
                src={landing1}
                alt="Delicious food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="font-['Cormorant_Infant'] font-bold text-[36px] sm:text-[48px] lg:text-[60px] text-[#1a1a1a] mb-4 md:mb-8 leading-tight">
              Crafting Memorable Dining Experiences
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-[rgba(0,0,0,0.6)] mb-6 md:mb-10 leading-normal px-4 lg:px-0">
              Delicious food, impeccable service and beautifully curated menus
              for every occasion.
            </p>
            <button className="bg-[#fa5e02] font-['Poppins'] text-white text-[18px] lg:text-[20px] px-6 md:px-8 py-3 md:py-4 rounded-[100px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] hover:bg-[#e54e00] hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105">
              Explore Our Menu
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative max-w-[1280px] mx-auto mb-12 md:mb-[100px] px-4">
        <h2 className="font-['Cormorant_Infant'] font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-black text-center mb-6 md:mb-8">
          A Record Built on Experience
        </h2>
        <div className="bg-[rgba(255,255,255,0.5)] border border-[#fa5e02] rounded-[16px] shadow-[0px_10px_15px_5px_rgba(255,236,157,0.2)] p-6 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <p className="font-medium text-[28px] md:text-[36px] text-[#fa5e02] mb-2">
                100+
              </p>
              <p className="text-[14px] md:text-[25px] text-[rgba(26,26,26,0.7)]">
                Events Each Year
              </p>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <p className="font-medium text-[28px] md:text-[36px] text-[#fa5e02] mb-2">
                250+
              </p>
              <p className="text-[14px] md:text-[25px] text-[rgba(26,26,26,0.7)]">
                Happy Customers
              </p>
            </div>
            <div className="hover:transform hover:scale-110 transition-transform duration-300">
              <p className="font-medium text-[28px] md:text-[36px] text-[#fa5e02] mb-2">
                5+
              </p>
              <p className="text-[14px] md:text-[25px] text-[rgba(26,26,26,0.7)]">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative max-w-[1440px] mx-auto mb-12 md:mb-[100px] px-4">
        <h2 className="font-['Cormorant_Infant'] font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#1a1a1a] text-center mb-8 md:mb-12">
          Our Services
        </h2>
        <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {[
              { img: services1, title: "Food Event" },
              { img: services2, title: "Marriage" },
              { img: services3, title: "Annual Function" },
              { img: services4, title: "Conference" },
              { img: "", title: "Social Celebration" },
              { img: "", title: "Functions in Clubs" },
              { img: "", title: "Anniversary" },
              { img: "", title: "Schools/College" },
              { img: "", title: "Birthday Parties" },
              { img: "", title: "Catering Packages" },
            ].map((service, index) => (
              <div
                key={index}
                className="relative w-[280px] sm:w-[337px] h-[320px] sm:h-[400px] rounded-[24px] overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_25px_0px_rgba(0,0,0,0.2)] flex-shrink-0"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[78px] bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[10px] flex items-end justify-center pb-6">
                  <p className="text-[18px] sm:text-[20px] text-white">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative max-w-[1280px] mx-auto mb-12 md:mb-[100px] px-4">
        <h2 className="font-['Cormorant_Infant'] font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#1a1a1a] text-center mb-8 md:mb-12">
          Why Choose Radha Rani Catering?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white border-[1.5px] border-[#ffe066] rounded-[24px] p-6 md:p-8 text-center hover:shadow-[0px_10px_30px_rgba(255,224,102,0.4)] hover:transform hover:translateY-[-10px] transition-all duration-300">
            <div className="w-[100px] h-[100px] md:w-[118px] md:h-[118px] mx-auto mb-4 md:mb-6">
              <img src={landing12} />
            </div>
            <h3 className="font-['Cormorant_Infant'] font-semibold text-[24px] md:text-[32px] text-[#1a1a1a] mb-3 md:mb-4">
              Authentic Taste
            </h3>
            <p className="text-[20px] md:text-[20px] text-[rgba(26,26,26,0.7)] leading-[28px] md:leading-[30px]">
              Fresh ingredients and traditional recipes that bring rich flavors
              to every event.
            </p>
          </div>

          <div className="bg-white border-[1.5px] border-[#ffe066] rounded-[24px] p-6 md:p-8 text-center hover:shadow-[0px_10px_30px_rgba(255,224,102,0.4)] hover:transform hover:translateY-[-10px] transition-all duration-300">
            <div className="w-[100px] h-[100px] md:w-[118px] md:h-[118px] mx-auto mb-4 md:mb-6">
              <img src={landing11} />
            </div>
            <h3 className="font-['Cormorant_Infant'] font-semibold text-[24px] md:text-[32px] text-[#1a1a1a] mb-3 md:mb-4">
              Hygienic Cooking
            </h3>
            <p className="text-[20px] md:text-[20px] text-[rgba(26,26,26,0.7)] leading-[28px] md:leading-[30px]">
              We follow strict food safety and hygiene standards.
            </p>
          </div>

          <div className="bg-white border-[1.5px] border-[#ffe066] rounded-[24px] p-6 md:p-8 text-center hover:shadow-[0px_10px_30px_rgba(255,224,102,0.4)] hover:transform hover:translateY-[-10px] transition-all duration-300">
            <div className="w-[100px] h-[100px] md:w-[118px] md:h-[118px] mx-auto mb-4 md:mb-6">
              <img src={landing13} />
            </div>
            <h3 className="font-['Cormorant_Infant'] font-semibold text-[24px] md:text-[32px] text-[#1a1a1a] mb-3 md:mb-4">
              Perfect for Every Event
            </h3>
            <p className="text-[20px] md:text-[20px] text-[rgba(26,26,26,0.7)] leading-[28px] md:leading-[30px]">
              Customized catering for weddings, birthdays, and celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Top List Section */}
      <section
        className="relative w-full mx-auto mb-12 md:mb-[100px] px-4 py-12"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-['Cormorant_Infant'] font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#1a1a1a] mb-2 md:mb-4">
            Top List
          </h2>
          <p className="text-[20px] sm:text-[20px] lg:text-[24px] text-[rgba(26,26,26,0.7)]">
            Our Mainstay Menu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 max-w-[1200px] mx-auto items-start">
          {/* Crispy Salad */}
          <div className="flex flex-col items-center">
            {/* Circle image */}
            <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[305px] lg:h-[305px] rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer flex-shrink-0 z-10 -mb-12 lg:-mb-16">
              <img
                src={landing2}
                alt="Crispy Salad"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
              />
            </div>
            {/* Card */}
            <div className="bg-[#ffec9d] rounded-[40px] w-full pt-16 lg:pt-20 pb-8 px-6 text-center hover:shadow-[0px_10px_30px_rgba(255,236,157,0.5)] transition-all duration-300">
              <div className="flex items-center gap-2 justify-center mb-2">
                <h3 className="font-['Cormorant_Infant'] font-bold text-[20px] lg:text-[24px] text-[#1a1a1a]">
                  Crispy Salad
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src={star1}
                    className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
                  />
                  <span className="font-['Cormorant_Infant'] font-medium text-[18px] lg:text-[20px] text-[#1a1a1a]">
                    8.9
                  </span>
                </div>
              </div>
              <p className="text-[16px] lg:text-[18px] text-[rgba(26,26,26,0.7)] leading-relaxed">
                A crispy rice salad is a vibrant, textured dish featuring
                golden, pan-fried or baked rice mixed with fresh vegetables.
              </p>
            </div>
          </div>

          {/* Paneer Butter Masala - CENTER & LARGER */}
          <div className="flex flex-col items-center md:-mt-6">
            <div className="w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer flex-shrink-0 z-10 -mb-12 lg:-mb-16">
              <img
                src={landing3}
                alt="Paneer Butter Masala"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
              />
            </div>
            <div className="bg-[rgba(250,94,2,0.6)] rounded-[40px] w-full pt-16 lg:pt-20 pb-8 px-6 text-center hover:shadow-[0px_10px_30px_rgba(250,94,2,0.4)] transition-all duration-300">
              <div className="flex items-center gap-2 justify-center mb-2">
                <h3 className="font-['Cormorant_Infant'] font-bold text-[20px] lg:text-[24px] text-[#1a1a1a]">
                  Paneer Butter Masala
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src={star2}
                    className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
                  />
                  <span className="font-['Cormorant_Infant'] font-medium text-[18px] lg:text-[20px] text-[#1a1a1a]">
                    9.7
                  </span>
                </div>
              </div>
              <p className="text-[16px] lg:text-[18px] text-[rgba(26,26,26,0.7)] leading-relaxed">
                Paneer butter masala is a popular North Indian dish featuring
                soft paneer cubes cooked in a rich, creamy, and slightly sweet
                tomato-cashew gravy.
              </p>
            </div>
          </div>

          {/* Pav Bhaji */}
          <div className="flex flex-col items-center">
            <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[305px] lg:h-[305px] rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer flex-shrink-0 z-10 -mb-12 lg:-mb-16">
              <img
                src={landing4}
                alt="Pav Bhaji"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
              />
            </div>
            <div className="bg-[#ffec9d] rounded-[40px] w-full pt-16 lg:pt-20 pb-8 px-6 text-center hover:shadow-[0px_10px_30px_rgba(255,236,157,0.5)] transition-all duration-300">
              <div className="flex items-center gap-2 justify-center mb-2">
                <h3 className="font-['Cormorant_Infant'] font-bold text-[20px] lg:text-[24px] text-[#1a1a1a]">
                  Pav Bhaji
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src={star1}
                    className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
                  />
                  <span className="font-['Cormorant_Infant'] font-medium text-[18px] lg:text-[20px] text-[#1a1a1a]">
                    9.2
                  </span>
                </div>
              </div>
              <p className="text-[16px] lg:text-[18px] text-[rgba(26,26,26,0.7)] leading-relaxed">
                Pav Bhaji is an iconic Mumbai street food consisting of a thick,
                spicy mashed vegetable curry served with butter and bun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - FIXED LAYOUT & CENTERED */}
      <section className="relative max-w-[1440px] mx-auto mb-12 md:mb-0 px-4">
        <h2 className="font-['Cormorant_Infant'] font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#1a1a1a] text-center mb-8 md:mb-12">
          Gallery
        </h2>

        <div className="relative max-w-[1015px] mx-auto">
          {/* Decorative yellow blobs - Hidden on mobile */}
          {/* <div className="absolute left-[-120px] top-[50px] w-[400px] h-[500px] pointer-events-none overflow-hidden hidden lg:block opacity-60">
            <div className="rotate-[73.48deg] scale-y-[-1]">
              <img src={bg2} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="absolute right-[-120px] top-[0px] w-[400px] h-[500px] pointer-events-none overflow-hidden hidden lg:block opacity-60">
            <div className="rotate-[-106.52deg] scale-y-[-1]">
              <img src={bg3} alt="" className="w-full h-full object-contain" />
            </div>
          </div> */}

          {/* Desktop Gallery Layout - shown only on lg+ to avoid mid-screen cutoff */}
          <div className="hidden lg:block relative" style={{ height: "995px" }}>
            {/* Column 1 - Left */}
            <div className="absolute left-0 top-0 w-[325px] h-[532px] rounded-tl-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing5}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute left-0 top-[552px] w-[325px] h-[240px] rounded-bl-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing6}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Column 2 - Middle */}
            <div className="absolute left-[345px] top-0 w-[665px] h-[273px] rounded-tr-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing10}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute left-[345px] top-[293px] w-[325px] h-[240px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing7}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute left-[345px] top-[553px] w-[325px] h-[240px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing8}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Column 3 - Right */}
            <div className="absolute left-[686px] top-[293px] w-[325px] h-[500px] rounded-br-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <img
                src={landing9}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Tablet + Mobile Gallery Layout - shown on md and below */}
          <div className="grid lg:hidden grid-cols-2 gap-3">
            <div className="rounded-[16px] overflow-hidden shadow-lg aspect-square">
              <img
                src={landing5}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-lg aspect-square">
              <img
                src={landing6}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-[16px] overflow-hidden shadow-lg aspect-video">
              <img
                src={landing10}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-lg aspect-square">
              <img
                src={landing7}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-lg aspect-square">
              <img
                src={landing8}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-[16px] overflow-hidden shadow-lg aspect-video">
              <img
                src={landing9}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#263238] py-8 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Section */}
            <div>
              <div className="font-['Cormorant_Infant'] font-bold text-[32px] md:text-[40px] mb-3 md:mb-4">
                <span className="text-[#fa5e02]">Radha </span>
                <span className="text-[#1a1a1a]">Rani</span>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#1a1a1a]">
                Delicious food, impeccable service and beautifully curated menus
                for every occasion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-[20px] md:text-[24px] text-[#fa5e02] mb-3 md:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Menu */}
            <div>
              <h3 className="font-semibold text-[20px] md:text-[24px] text-[#fa5e02] mb-3 md:mb-4">
                Our Menu
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Regular Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Party Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] md:text-[20px] text-[rgba(26,26,26,0.8)] hover:text-[#fa5e02] transition-colors"
                  >
                    Birthday Menu
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-[20px] md:text-[24px] text-[#fa5e02] mb-3 md:mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-[14px] md:text-[18px] lg:text-[20px] text-[rgba(26,26,26,0.8)]">
                    HSR Layout, Bengaluru – 560102 Karnataka, India
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <span className="text-[14px] md:text-[18px] lg:text-[20px] text-[rgba(26,26,26,0.8)]">
                    +91 80 4567 8901
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <span className="text-[14px] md:text-[18px] lg:text-[20px] text-[rgba(26,26,26,0.8)]">
                    info@radharani.in
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#263238] pt-4 md:pt-6">
            <p className="text-[14px] md:text-[16px] text-[#263238] text-center">
              © 2026 Radha Rani. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
