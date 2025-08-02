interface SearchFilterProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchFilter({
  placeholder = "Search by name",
  value,
  onChange,
}: SearchFilterProps) {
  return (
    <div className="relative">
      <div className="w-[485px] h-[74px] border border-gray-300 rounded-[7px] bg-white flex items-center px-4 focus-within:border-[#FF6428] focus-within:ring-2 focus-within:ring-[#FF6428] focus-within:ring-opacity-20">
        <div className="w-6 h-6 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#bfbfbf"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#bfbfbf"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 text-center bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-3xl"
          style={{ fontFamily: "Circular Std, sans-serif" }}
        />
      </div>
    </div>
  );
}

