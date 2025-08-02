interface PaginationButtonProps{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
};

export function PaginationButton({ children, onClick, disabled, active }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 flex justify-center items-center rounded border ${
        active
          ? "border-[#FF6428] text-[#FF6428] shadow-md"
          : "border-[#E8E8E8] text-[#E8E8E8]"
      } hover:border-[#FF6428] disabled:opacity-30`}
    >
      {children}
    </button>
  );
}
