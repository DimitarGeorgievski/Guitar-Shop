interface MusicianCardProps{
    image: string;
    imageAlt: string;
    name: string;
}

export function MusicianCard({image,name, imageAlt}: MusicianCardProps) {
  return <div className="w-[492px] h-[549px] bg-[#FFEFE8] flex flex-col items-center justify-center rounded-sm">
    <img src={image} alt={imageAlt} className=" w-[444px] h-[444px] object-cover"/>
    <p className="text-center text-2xl w-[492px] py-3 px-6 text-[#666666]">{name}</p>
  </div>;
}
