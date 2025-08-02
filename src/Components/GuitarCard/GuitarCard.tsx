interface GuitarCardProps {
  image: string;
  name: string;
  price: string;
}

export function GuitarCard({ image, name, price }: GuitarCardProps) {
  return (
    <div className="w-[364px] h-[280px]">
      <img src={image} alt={name} className="w-full h-[190px] object-contain" />
      <div className="text-left flex flex-col gap-2 mt-7">
        <p className="text-[#121212]">{name}</p>
        <p className="text-[#666666]">{price}</p>
      </div>
    </div>
  );
}
