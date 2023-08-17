import { IsUserAuthorized } from "@/contexts/users";
import { useAtom } from "jotai";
import { useState } from "react";
import { IoMap } from "react-icons/io5";

interface CurrentLocationProps {
  isVisible: boolean;
}

export default function CurrentLocation({ isVisible }: CurrentLocationProps) {
  const [isUserAuthorized] = useAtom(IsUserAuthorized);
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  const handleUpdateLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        setLocation(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div
      className={`fixed left-0  w-full bg-white h-[3rem] transition-all duration-300 ease-in-out pl-4 pr-4 flex justify-between items-center
      ${isVisible ? "top-[-5rem]" : "top-0"}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <div className="p-1 rounded-lg bg-dark-blue">
          <IoMap color="#748CAB" size={18} />
        </div>
        <p className="text-soft-blue">São Paulo, Brasil</p>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      {isUserAuthorized && (
        <div>
          <button
            className="text-soft-blue hover:text-dark-blue"
            onClick={handleUpdateLocation}
          >
            Atualizar localização atual
          </button>
        </div>
      )}
    </div>
  );
}
