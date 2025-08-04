import { Link, useParams } from "react-router-dom";
import { Header } from "../../Layout/Header/Header";
import { useQuery } from "@apollo/client";
import { GET_UNIQUE_MODEL } from "../../Queries/getUniqueModel";
import { useState } from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { MusicianCard } from "../../Components/MusicianCard/MusicianCard";

export function DescriptionPage() {
  const { id, guitarId } = useParams();
  const { data, loading } = useQuery(GET_UNIQUE_MODEL, {
    variables: {
      brandId: id,
      modelId: guitarId,
    },
  });
  const [activeTab, setActiveTab] = useState<"specs" | "musicians">("specs");
  const [currentPage, setCurrentPage] = useState(0);
  if (loading || !data || !data.findUniqueModel) {
    return <p className="text-5xl text-center">Loading...</p>;
  }
  const uniqueGuitarr = data.findUniqueModel;
  const cardsPerPage = 2;
  const totalPages = Math.ceil(uniqueGuitarr.musicians.length / cardsPerPage);
  const currentCards = uniqueGuitarr.musicians.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );
  function formatKey(key: string) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }
  return (
    <div className="w-[1440px] mx-auto relative">
      <section className="relative">
        <Link to={`/`}>
          <div className="flex gap-4 pt-8 pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#9292a3"
            >
              <path
                d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z"
                style={{ fill: "var(--fillg)" }}
              />
            </svg>
            <p>Back To List</p>
          </div>
        </Link>
        <div className="pt-2 pl-28">
          <Header />
        </div>
        <div className="w-[536px] h-[239px] ml-28 mt-20">
          <h1 className="text-center text-[56px] font-bold">
            {uniqueGuitarr.name}
          </h1>
        </div>
        <div className="absolute top-0 right-0 w-full max-w-[672px] h-[459px] flex items-center justify-center rounded-br-[151px] rounded-bl-[360px] bg-gradient-to-t from-[#FF5B1C] to-[#FF8C60] overflow-hidden backdrop-blur-[40px]">
          <img
            src={uniqueGuitarr.image}
            alt={uniqueGuitarr.name}
            className="transparent absolute right-13 bottom-32 w-[451px] h-[280px] -rotate-[48.69deg] object-contain"
          />
        </div>
        <div className="absolute right-[240px] w-20 h-20 bg-white rounded-full flex items-center z-10 justify-center">
          <img src="../src/img/Butterfly.svg" alt="" className="w-7 h-7" />
        </div>
      </section>
      <section className="pt-40">
        <div className="w-full flex">
          <button
            onClick={() => setActiveTab("specs")}
            className={`text-2xl text-center h-[69px] w-1/2 border-b-4 transition-all duration-200 ${
              activeTab === "specs"
                ? "border-[#FF8A5D] text-[#FF8A5D]"
                : "border-transparent text-[#9292A3]"
            }`}
          >
            Specification
          </button>
          <button
            onClick={() => setActiveTab("musicians")}
            className={`text-2xl text-center w-1/2 border-b-4 transition-all duration-200 ${
              activeTab === "musicians"
                ? "border-[#FF8A5D] text-[#FF8A5D]"
                : "border-transparent text-[#9292A3]"
            }`}
          >
            Who plays it?
          </button>
        </div>
        {activeTab === "specs" ? (
          <>
            <p className="text-left px-36 text-2xl pt-32">
              {uniqueGuitarr.description}
            </p>
            <ul className="pl-41 mt-16 mb-52 list-disc text-2xl">
              {Object.entries(uniqueGuitarr.specs)
                .filter(([key]) => key !== "__typename")
                .map(([key, value]) => (
                  <li key={key}>
                    <span>{formatKey(key)}:</span> {String(value)}
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <>
            <div className="flex w-[1027px] h-[549px] mx-auto gap-11 my-32">
              {currentCards.map((musician: any, index: number) => (
                <MusicianCard
                  key={index}
                  image={musician.musicianImage}
                  imageAlt={musician.name}
                  name={musician.name}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mb-20">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPage ? "bg-[#FF8A5D]" : "bg-[#D9D9D9]"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}
