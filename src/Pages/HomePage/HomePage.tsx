import { Link } from "react-router-dom";
import { Footer } from "../../Layout/Footer/Footer";
import { Header } from "../../Layout/Header/Header";
import { useQuery } from "@apollo/client";
import { GET_ALL_BRANDS } from "../../Queries/getAllBrands";

export function HomePage() {
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);
  if (loading) return <p className="text-5xl text-center">Loading...</p>;
  if (error)
    return <p className="text-5xl text-center">Error: {error.message}(</p>;
  return (
    <div className="w-[1440px] mx-auto relative">
      <section className="min-h-[750px] relative">
        <div className="pt-16 pl-28">
          <Header />
        </div>
        <div className="w-4/12 ml-28 pt-44">
          <p className="text-5xl text-center font-bold">
            Browse top quality <span className="text-[#FF6428]">Guitars </span>
            online
          </p>
          <p className="text-center mx-12 font-bold text-[#666666] mt-2">
            Explore 50k+ latest collections of branded guitars online with
            VibeStrings.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-full max-w-[672px] h-[586px] rounded-br-[151px] rounded-bl-[360px] overflow-hidden backdrop-blur-[40px]">
          <img
            src="src\img\mainGuitar.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom block"
          />
        </div>
        <div className="absolute bottom-32 right-[240px] w-20 h-20 bg-white rounded-full flex items-center z-10 justify-center">
          <img src="src/img/Butterfly.svg" alt="" className="w-7 h-7" />
        </div>
      </section>
      <section className="mb-32">
        <div className="text-center font-bold">
          <p className="text-5xl">
            Featuring the <span className="text-[#FF6428]">Best Brands</span>
          </p>
          <p className="text-[#666666]  mt-4">
            Select your preferred brand and explore our exquisite collection.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-32 mx-20 mt-16">
          {data.findAllBrands
            .slice(0, 8)
            .map((brand: { id: string; name: string; image: string }) => (
              <div key={brand.id} className="flex flex-col">
                <Link to={`/${brand.id}`}>
                  <img
                    src={brand.image}
                    className="w-44 h-24 object-fill opacity-50 grayscale"
                    alt={brand.name}
                  />
                </Link>
              </div>
            ))}
        </div>
      </section>
      <section className=" bg-black">
        <p className="text-5xl text-white font-bold text-center pt-24">
          Why try <span className="text-[#FF6428]">VibeStrings?</span>
        </p>
        <div className="flex justify-evenly mt-28 pb-16">
          <div className="flex flex-col items-center w-52 h-64 gap-3">
            <div className="w-20 rounded-3xl h-20 bg-[#262626] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_4418_9941)">
                  <path
                    d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_9941">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-7 text-left font-bold text-white text-xl">
              SMOOTH BROWSING
            </p>
            <p className="text-[#666666] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center w-52 h-64 gap-3">
            <div className="w-20 rounded-3xl h-20 bg-[#262626] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_4418_9501)">
                  <path
                    d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 8H8"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 11H6"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 14H4"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_9501">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-7 text-left font-bold text-white text-xl">
              EASY DELIVERY
            </p>
            <p className="text-[#666666] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center w-52 h-64 gap-3">
            <div className="w-20 rounded-3xl h-20 bg-[#262626] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_4418_169796)">
                  <path
                    d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 12.4103V7.84035C2.5 6.65035 3.23 5.5903 4.34 5.1703L12.28 2.1703C13.52 1.7003 14.85 2.62033 14.85 3.95033V7.75032"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 12H14"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.44141 18.9995L4.4314 19.9895L6.5614 18.0195"
                    stroke="#a4a4a4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4418_169796">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="mt-7 text-left font-bold text-white text-xl">
              EASY DELIVERY
            </p>
            <p className="text-[#666666] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[533px] mx-34 my-32 flex gap-32">
        <div className="w-[484px] flex flex-col justify-center">
          <p className="text-5xl text-center">
            Browse and buy your{" "}
            <span className="text-[#FF6428]">favorite guitars</span> with
            VibeStrings.
          </p>
          <div className="flex items-start gap-6 pt-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-13"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              className="h-13"
              alt=""
            />
          </div>
        </div>
        <div className="h-full w-[568px] flex items-center">
          <div className="w-full h-[354px] pl-12 flex items-center gap-8 rounded-l-[400%] rounded-r-[400%] bg-[#FF6428]">
            <img
              src="src\img\phone1.png"
              className="mb-22 w-[213px] rounded-3xl h-[461px]"
              alt=""
            />
            <img
              src="src\img\phone2.png"
              className="mt-18 w-[214px] rounded-3xl h-[461px]"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
