interface HalfRoundedEllipseProps {
  imageSrc: string;
  imageAlt?: string;
}

export function HalfRoundedEllipse({
  imageSrc,
  imageAlt = "Brand image",
}: HalfRoundedEllipseProps) {
  return (
    <>
      <div className="absolute top-0 right-0 w-full max-w-[672px] h-[459px] flex items-center justify-center rounded-br-[151px] rounded-bl-[360px] bg-gradient-to-t from-[#FF5B1C] to-[#FF8C60] overflow-hidden backdrop-blur-[40px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="transparent w-[451px] h-[280px] opacity-40 grayscale object-contain"
        />
      </div>
      <div className="absolute bottom-26 right-[240px] w-20 h-20 bg-white rounded-full flex items-center z-10 justify-center">
        <img src="../src/img/Butterfly.svg" alt="" className="w-7 h-7" />
      </div>
    </>
  );
}
