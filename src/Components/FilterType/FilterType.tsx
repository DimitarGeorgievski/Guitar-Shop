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
