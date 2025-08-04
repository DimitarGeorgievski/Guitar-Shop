import { Link, useParams } from "react-router-dom";
import { Footer } from "../../Layout/Footer/Footer.tsx";
import { Header } from "../../Layout/Header/Header.tsx";
import { useQuery } from "@apollo/client";
import { FilterType } from "../../Components/FilterType/FilterType.tsx";
import { useEffect, useMemo, useState } from "react";
import { SearchFilter } from "../../Components/SearchFilter/SearchFilter.tsx";
import { HalfRoundedEllipse } from "../../Components/HalfRoundedEllipse/HalfRoundedEllipse.tsx";
import { GuitarCard } from "../../Components/GuitarCard/GuitarCard.tsx";
import { GET_UNIQUE_BRAND_MODEL } from "../../Queries/getUniqueBrandModel.ts";
import { GET_ALL_BRANDS } from "../../Queries/getAllBrands.ts";
import { PaginationButton } from "../../Components/PaginationButton/PaginationButton.tsx";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export function ProductPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);

  const { data: modelData } = useQuery(GET_UNIQUE_BRAND_MODEL, {
    variables: {
      id,
      sortBy: {
        field: "name",
        order: "DESC",
      },
    },
    skip: !id,
  });
  const guitars = useMemo(() => {
    return modelData?.findUniqueBrand?.models || [];
  }, [modelData]);
  if (error)
    return <p className="text-5xl text-center">Error: {error.message}</p>;

  const brands = data?.findAllBrands || [];
  const currentBrand = brands.find(
    (b: { id: string }) => b.id.toLowerCase() === id?.toLowerCase()
  );
  const [selectedType, setSelectedType] = useState("Filter by type");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [filteredGuitars, setFilteredGuitars] = useState(guitars);
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startPagination = (currentPage - 1) * itemsPerPage;
  const endPagination = startPagination + itemsPerPage;
  const paginatedGuitars = filteredGuitars.slice(
    startPagination,
    endPagination
  );
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);
  useEffect(() => {
    let result = guitars;
    if (selectedType !== "Filter by type") {
      result = result.filter(
        (g: any) => g.type?.toLowerCase() === selectedType.toLowerCase()
      );
    }
    if (debouncedQuery.trim() !== "") {
      result = result.filter((g: any) =>
        g.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    }
    setFilteredGuitars(result);
  }, [guitars, selectedType, debouncedQuery]);
  if (!id) return <p className="text-5xl text-center">No brand ID</p>;
  if (loading) return <p className="text-5xl text-center">Loading...</p>;
  const uniqueCategories = [
    ...new Set((currentBrand?.categories as string[]) || []),
  ];
  return (
    <div className="w-[1440px] mx-auto">
      <section className="min-h-[600px] relative">
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
            <p>Back To Home</p>
          </div>
        </Link>
        <div className="pt-2 pl-28">
          <Header />
        </div>
        <div className="w-[536px] h-[239px] ml-28 mt-20">
          <h1 className="text-center text-[56px] font-bold">
            Play like a <span className="text-[#FF6428]">Rock star</span>
          </h1>
          <p className="text-[#666666] text-center px-9">
            With a legacy dating back to the 1950s, Ibanez blends expert
            craftsmanship with cutting-edge innovation to deliver guitars that
            inspire creativity and elevate your performance. Trusted by top
            artists worldwide, Ibanez guitars are built to play fast, sound
            bold, and stand out on any stage. Ask ChatGPT
          </p>
        </div>
        <HalfRoundedEllipse
          imageSrc={currentBrand?.image}
          imageAlt={currentBrand?.name}
        />
      </section>
      <section className="w-full px-32 h-[1023px]">
        <h2 className="font-bold text-5xl text-center">
          Check out the <span className="text-[#FF6428]">Selection</span>
        </h2>
        <div className="flex mt-14 justify-center gap-6">
          <FilterType
            types={uniqueCategories}
            selectedType={selectedType}
            onSelectClick={setSelectedType}
          />
          <SearchFilter
            value={searchQuery}
            onChange={(input) => setSearchQuery(input)}
          />
        </div>
        <div className="pt-32">
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {paginatedGuitars.map((model: any) => (
              <Link to={`/${currentBrand.id}/${model.id}`}>
                <GuitarCard
                  key={model.id}
                  image={model.image}
                  name={model.name}
                  price={formatPrice(Number(model.price)) || "0"}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <p className="text-[#9292A3]">
            Showing <span>{paginatedGuitars.length}</span> results from
            <span className="text-[#3D3D46]"> {filteredGuitars.length}</span>
          </p>
          <div className="flex gap-2">
            {filteredGuitars.length > itemsPerPage && (
              <>
                <PaginationButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  active={false}
                  children={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                        stroke="#9292a3"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  disabled={currentPage === 1}
                ></PaginationButton>
                {[
                  ...Array(Math.ceil(filteredGuitars.length / itemsPerPage)),
                ].map((_, i) => (
                  <PaginationButton
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationButton>
                ))}
                <PaginationButton
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(
                        prev + 1,
                        Math.ceil(filteredGuitars.length / itemsPerPage)
                      )
                    )
                  }
                  active={false}
                  children={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      <path
                        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                        stroke="#9292a3"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(filteredGuitars.length / itemsPerPage)
                  }
                ></PaginationButton>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
