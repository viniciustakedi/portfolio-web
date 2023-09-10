import { IsUserAuthorized } from "@/contexts/users";
import { getLocation } from "@/services/get";
import { updateLocation } from "@/services/patch";
import { useAtom } from "jotai";
import { useState } from "react";
import { IoMap } from "react-icons/io5";
import { useQuery } from "react-query";
import { BiRefresh } from "react-icons/bi";
import { locationAtom } from "@/contexts/global";

interface CurrentLocationProps {
  isVisible: boolean;
}

export default function CurrentLocation({ isVisible }: CurrentLocationProps) {
  const [isUserAuthorized] = useAtom(IsUserAuthorized);
  const [location, setLocation] = useAtom(locationAtom);

  const { data, status, isLoading } = useQuery(["locations", location], () =>
    getLocation(location)
  );

  if (status === "success" && Object.keys(data).length > 0) {
    setLocation(data);
  }

  const handleUpdateLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        await updateLocation(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div
      className={`fixed left-0 w-full bg-white h-[3rem] transition-all duration-300 ease-in-out pl-4 pr-4 flex justify-between items-center
      ${isVisible ? "top-[-5rem]" : "top-0"}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <div className="p-1 rounded-lg bg-dark-blue">
          <IoMap color="#748CAB" size={18} />
        </div>
        {isLoading ? (
          <div className="w-[6rem] h-4 bg-gray-200 animate-pulse rounded-lg" />
        ) : status === "success" ? (
          <p className="text-soft-blue">{`${data?.state}, ${data?.country}`}</p>
        ) : (
          <p className="text-soft-blue">Localização não atualizada</p>
        )}
        <span className="relative flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              isLoading ? "bg-yellow-400" : "bg-green-400"
            } opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              isLoading ? "bg-yellow-500" : "bg-green-500"
            }`}
          ></span>
        </span>
      </div>
      {isUserAuthorized && (
        <div className="flex items-center justify-center">
          <button
            className="text-dark-blue hover:text-soft-blue"
            onClick={handleUpdateLocation}
          >
            <BiRefresh size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
