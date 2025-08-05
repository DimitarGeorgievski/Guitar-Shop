import { useState, useRef, useEffect } from "react";

interface FilterTypeProps {
  types: string[];
  selectedType: string | null;
  onSelectClick: (type: string) => void;
}

export function FilterType({
  types,
  selectedType,
  onSelectClick,
}: FilterTypeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSelect = (type: string) => {
    onSelectClick(type);
    setIsOpen(false);
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <div className="px-4 py-2 w-[334px] h-[74px] border border-[#D0D0D0] rounded focus-within:border-[#FF6428] focus-within:ring-2 focus-within:ring-[#FF6428] focus-within:ring-opacity-20 flex items-center justify-between">
        <div className="w-6 h-6">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_4418_9865)">
              <path
                className="filter-stroke"
                d="M5.40002 2.09961H18.6C19.7 2.09961 20.6 2.99961 20.6 4.09961V6.29961C20.6 7.09961 20.1 8.09961 19.6 8.59961L15.3 12.3996C14.7 12.8996 14.3 13.8996 14.3 14.6996V18.9996C14.3 19.5996 13.9 20.3996 13.4 20.6996L12 21.5996C10.7 22.3996 8.90002 21.4996 8.90002 19.8996V14.5996C8.90002 13.8996 8.50002 12.9996 8.10002 12.4996L4.30002 8.49961C3.80002 7.99961 3.40002 7.09961 3.40002 6.49961V4.19961C3.40002 2.99961 4.30002 2.09961 5.40002 2.09961Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={isOpen ? "#FF6C33" : "#B8B8C0"}
              />
              <path
                className="filter-stroke"
                d="M10.93 2.09961L6 9.99961"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                
              />
            </g>
            <defs>
              <clipPath id="clip0_4418_9865">
                <rect width="24" height="24" fill="B8B8C0" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className={`flex-1 cursor-pointer text-center text-3xl transition-colors duration-150 ${
            isOpen ? "text-[#FF6C33]" : "text-[#B8B8C0]"
          }`}
          style={{ fontFamily: "Circular Std, sans-serif" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedType || "Select Type"}
        </div>
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z"
              fill={isOpen ? "#FF6C33" : "#B8B8C0"}
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {types.map((type) => (
            <div
              key={type}
              className="px-4 py-3 cursor-pointer text-[#9292A3] hover:bg-[#FFEFE9] hover:text-[#FF8C60]  duration-150 text-left"
              style={{ fontFamily: "Circular Std, sans-serif" }}
              onClick={() => handleSelect(type)}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
